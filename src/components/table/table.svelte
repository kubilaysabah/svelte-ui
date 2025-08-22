<script lang="ts">
	import type { TableProps, ProcessedHeader, ProcessedAction, LoadingState, PaginationState, TableFilter } from './types';
	import { table } from './types';
	import { onMount, type Component } from 'svelte';
	import { cn } from '$lib/utils';
	
	// Icon imports
	import { ChevronDownIcon, ChevronUpIcon, PenIcon, Trash2Icon, EyeIcon, PlusIcon } from '@lucide/svelte';

	// Destructure props with defaults
	const {
		class: className,
		title = '',
		subtitle = '',
		description = '',
		page: initialPage = 1,
		limit: initialLimit = 10,
		headers,
		actions = {},
		search = [],
		searchValue: initialSearchValue = '',
		searchOuter = false,
		filters = {},
		selection,
		emptyMessage = 'No data found',
		data: dataFetcher,
		buttons,
		bottom,
		size = 'medium',
		variant = 'default',
		breakpoint = '6xl',
		...rest
	}: TableProps = $props();

	// Reactive state
	let currentPage = $state(initialPage);
	let currentLimit = $state(initialLimit);
	let searchValue = $state(initialSearchValue);
	let searchChanged = $state(false);
	let actualData = $state<Record<string, unknown>[]>([]);
	let processedHeaders = $state<Record<string, ProcessedHeader>>({});
	let processedActions = $state<ProcessedAction[][]>([]);
	let actualFilters = $state<Record<string, TableFilter>>({});
	let actualSelection = $state<Record<string | number, string | number>>({});
	
	// Loading and pagination state
	let loadingState = $state<LoadingState>({
		isFetching: false,
		isLoading: false,
		loadingTimeout: null as ReturnType<typeof setTimeout> | null
	});
	
	let paginationState = $state<PaginationState>({
		page: 1,
		pages: 0,
		total: 0,
		limit: 10,
		range: []
	});

	/**
	 * Processes headers configuration into internal format
	 * Converts string headers to proper header objects with access paths
	 */
	function processHeaders(): void {
		processedHeaders = {};
		for (const [key, value] of Object.entries(headers)) {
			if (typeof value === 'string') {
				processedHeaders[key] = {
					name: value,
					access: key.includes(':') ? key.split(':') : key.split('.')
				};
			} else {
				processedHeaders[key] = {
					name: value.name,
					access: typeof value.access === 'string' 
						? (value.access.includes(':') ? value.access.split(':') : value.access.split('.'))
						: value.access
				};
			}
		}
	}

	/**
	 * Resolves nested object property values using access path
	 * @param item - The data object
	 * @param access - Array of property names for nested access
	 * @returns The resolved value or '?' if not found
	 */
	function resolveValue(item: Record<string, unknown>, access: string[]): string {
		let resolved: unknown = item;
		for (const key of access) {
			if (typeof resolved !== 'object' || resolved === null || !(key in resolved)) {
				return '?';
			}
			resolved = (resolved as Record<string, unknown>)[key];
		}
		return String(resolved);
	}

	/**
	 * Loads table data with current filters and pagination
	 * @param page - Page number to load
	 * @param limit - Items per page
	 */
	async function loadData(page: number, limit: number): Promise<void> {
		if (loadingState.isFetching) return;
		
		loadingState.isFetching = true;
		const queryData: Record<string, unknown> = {};

		// Add search query if configured
		if (search.length && searchValue.trim()) {
			queryData.LIKE = [search, searchValue.split('-').map(s => `%${s}%`)];
		}

		// Add filter queries
		for (const [key, filter] of Object.entries(actualFilters)) {
			if (!filter.list?.length || filter.selected === undefined) continue;
			
			const selectedItem = filter.list[filter.selected];
			if (selectedItem.value !== '') {
				queryData[selectedItem.column || key] = selectedItem.value;
			}
		}

		// Set loading timeout
		loadingState.loadingTimeout = setTimeout(() => {
			loadingState.isLoading = true;
		}, 500);

		try {
			const result = await dataFetcher(page, limit, queryData);
			
			if (result) {
				actualData = result.data;
				paginationState = {
					page: result.page,
					pages: result.pages,
					total: result.total,
					limit: result.limit,
					range: calculatePageRange(result.page, result.pages)
				};
				await processActions();
			} else {
				actualData = [];
				paginationState = { page: 1, pages: 0, total: 0, limit, range: [] };
			}
		} catch (error) {
			console.error('Failed to load table data:', error);
			actualData = [];
		} finally {
			if (loadingState.loadingTimeout) {
				clearTimeout(loadingState.loadingTimeout);
			}
			loadingState.isLoading = false;
			loadingState.isFetching = false;
		}
	}

	/**
	 * Calculates pagination range for display
	 * @param currentPage - Current page number
	 * @param totalPages - Total number of pages
	 * @returns Array of page numbers to display
	 */
	function calculatePageRange(currentPage: number, totalPages: number): number[] {
		const range: number[] = [];
		const start = Math.max(1, currentPage - 3);
		const end = Math.min(totalPages, start + 6);
		
		for (let i = start; i <= end; i++) {
			range.push(i);
		}
		return range;
	}

	/**
	 * Processes actions for each data item
	 * Applies test conditions and prepares action objects
	 */
	async function processActions(): Promise<void> {
		processedActions = [];
		
		for (const [index, item] of actualData.entries()) {
			const itemActions: ProcessedAction[] = [];
			
			for (const [actionKey, actionConfig] of Object.entries(actions)) {
				// Test if action should be shown
				if (actionConfig.test && !(await actionConfig.test(item))) continue;
				
				// Get default icon based on action key
				let icon = actionConfig.icon;
				if (!icon) {
					switch (actionKey) {
						case 'add':
							icon = PlusIcon as Component;
							break;
						case 'edit':
							icon = PenIcon as Component;
							break;
						case 'delete':
							icon = Trash2Icon as Component;
							break;
						case 'view':
							icon = EyeIcon as Component;
							break;
						default:
							icon = EyeIcon as Component;
							break;
					}
				}
				
				itemActions.push({
					key: actionKey,
					tooltip: actionConfig.tooltip || '',
					tooltipOpen: false,
					tooltipTimeout: null,
					icon,
					class: actionConfig.class || '',
					action: actionConfig.action
				});
			}
			
			processedActions[index] = itemActions;
		}
	}

	/**
	 * Changes current page and reloads data
	 * @param newPage - Target page number
	 */
	function changePage(newPage: number): void {
		if (loadingState.isFetching) return;
		
		const clampedPage = Math.max(1, Math.min(newPage, paginationState.pages));
		if (clampedPage === paginationState.page) return;
		
		currentPage = clampedPage;
		loadData(currentPage, currentLimit);
	}

	/**
	 * Handles filter selection change
	 * @param filterKey - Filter identifier
	 * @param selectedIndex - Selected option index
	 */
	function handleFilterChange(filterKey: string, selectedIndex: number): void {
		if (loadingState.isFetching) return;
		
		const filter = actualFilters[filterKey];
		if (filter.selected === selectedIndex) return;
		
		filter.selected = selectedIndex;
		filter.open = false;
		currentPage = 1;
		loadData(currentPage, currentLimit);
	}

	/**
	 * Handles selection toggle for items
	 * @param item - Data item to toggle
	 * @param isSelectAll - Whether this is a select all operation
	 */
	function handleSelection(item: Record<string, unknown>, isSelectAll: boolean = false): void {
		if (!selection) return;
		
		// Check if selection is allowed
		if (selection.onSelect && !selection.onSelect(item, isSelectAll)) return;
		
		const itemKey = item[selection.key] as string | number;
		if (actualSelection[itemKey] !== undefined) {
			delete actualSelection[itemKey];
		} else {
			actualSelection[itemKey] = itemKey;
		}
		
		// Update selection array
		selection.selected = Object.keys(actualSelection);
	}

	/**
	 * Handles select all toggle
	 */
	function handleSelectAll(): void {
		if (!selection) return;
		
		const hasAnySelected = Object.keys(actualSelection).length > 0;
		
		for (const item of actualData) {
			if (selection.onSelect && !selection.onSelect(item, true)) continue;
			
			const itemKey = item[selection.key] as string | number;
			if (hasAnySelected) {
				delete actualSelection[itemKey];
			} else {
				actualSelection[itemKey] = itemKey;
			}
		}
		
		selection.selected = Object.keys(actualSelection);
	}

	/**
	 * Gets CSS classes for the table container
	 */
	function getTableClasses(): string {
		return table({ size, variant, breakpoint, class: className });
	}

	// Computed values
	const isEmpty = $derived(!actualData.length || !Object.keys(processedHeaders).length);
	const hasActions = $derived(Object.keys(actions).length > 0);
	const allSelected = $derived(() => {
		if (!selection || !actualData.length) return false;
		return actualData.every(item => actualSelection[item[selection.key] as string | number] !== undefined);
	});
	const anySelected = $derived(() => {
		if (!selection) return false;
		return actualData.some(item => actualSelection[item[selection.key] as string | number] !== undefined);
	});

	// Search debouncing
	let searchTimeout: ReturnType<typeof setTimeout> | null = null;
	$effect(() => {
		if (search.length && searchChanged) {
			if (searchTimeout) clearTimeout(searchTimeout);
			searchTimeout = setTimeout(() => {
				currentPage = 1;
				loadData(currentPage, currentLimit);
				searchChanged = false;
			}, 300);
		}
	});

	// Initialize component
	onMount(async () => {
		// Process headers
		processHeaders();
		
		// Initialize filters
		for (const [key, filterConfig] of Object.entries(filters)) {
			actualFilters[key] = {
				...filterConfig,
				key,
				selected: filterConfig.selected || 0,
				open: false,
				list: []
			};
			
			// Load filter options
			if (filterConfig.initial) {
				actualFilters[key].list = [...filterConfig.initial];
			}
			
			if (filterConfig.fetch) {
				try {
					const fetchedOptions = await filterConfig.fetch();
					if (filterConfig.initial) {
						actualFilters[key].list = [...filterConfig.initial, ...fetchedOptions];
					} else {
						actualFilters[key].list = fetchedOptions;
					}
				} catch (error) {
					console.error(`Failed to load filter options for ${key}:`, error);
				}
			}
		}
		
		// Initialize selection
		if (selection) {
			for (const selectedKey of selection.selected) {
				actualSelection[selectedKey] = selectedKey;
			}
		}
		
		// Load initial data
		await loadData(currentPage, currentLimit);
	});

	// Public API
	export function refresh(): void {
		if (selection) {
			actualSelection = {};
			selection.selected = [];
		}
		loadData(paginationState.page, paginationState.limit);
	}
</script>

<!-- Table header with title, filters, and search -->
<div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
	<div class="flex items-center justify-between">
		<div class="flex flex-col items-start">
			{#if title}
				<h1 class="text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
			{/if}
			{#if subtitle}
				<h2 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{subtitle}</h2>
			{/if}
			{#if description}
				<p class="text-sm text-gray-500 dark:text-gray-400">{description}</p>
			{/if}
		</div>
		<div class="md:hidden">
			{@render buttons?.()}
		</div>
	</div>
	
	<div class="flex flex-col md:flex-row md:items-center justify-end gap-2">
		<!-- Filters -->
		{#each Object.entries(actualFilters) as [filterName, filter] (filterName)}
			{#if filter.list?.length}
				<div class="relative">
					<button 
						class="flex w-full md:w-auto items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
						onclick={() => filter.open = !filter.open}
					>
						<span>{filter.list[filter.selected || 0]?.short || filter.list[filter.selected || 0]?.name || ''}</span>
						{#if filter.open}
							<ChevronUpIcon class="ml-2 w-4 h-4" />
						{:else}
							<ChevronDownIcon class="ml-2 w-4 h-4" />
						{/if}
					</button>
					
					{#if filter.open}
						<div class="absolute z-50 w-full md:w-max left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
							{#each filter.list as option, index (index)}
								<button
									class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
									onclick={() => handleFilterChange(filterName, index)}
								>
									{option.name}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
		
		<!-- Search -->
		{#if search.length && !searchOuter}
			<input 
				type="text" 
				class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
				placeholder="Search..." 
				bind:value={searchValue}
				oninput={() => searchChanged = true}
			/>
		{/if}
		
		<div class="hidden md:block">
			{@render buttons?.()}
		</div>
	</div>
</div>

<!-- Table content -->
{#if loadingState.isLoading}
	<div class="flex items-center justify-center h-32 bg-gray-50 rounded-lg dark:bg-gray-800">
		<p class="text-gray-500 dark:text-gray-400">Loading...</p>
	</div>
{:else if isEmpty}
	<div class="flex items-center justify-center h-32 bg-gray-50 rounded-lg dark:bg-gray-800">
		<p class="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
	</div>
{:else}
	<div class="overflow-x-auto bg-white rounded-lg shadow dark:bg-gray-800">
		<table class="w-full table-auto" {...rest}>
			<thead class="bg-gray-50 dark:bg-gray-700 @{breakpoint}:table-header-group hidden">
				<tr>
					{#if selection}
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
							<button
								class="flex items-center justify-center w-4 h-4 border border-gray-300 rounded bg-white transition-colors dark:border-gray-600 dark:bg-gray-800"
								onclick={handleSelectAll}
							>
								{#if allSelected()}
									<svg class="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
										<path d="M5 13l4 4L19 7" />
									</svg>
								{:else if anySelected()}
									<div class="w-2 h-0.5 bg-blue-600 rounded"></div>
								{/if}
							</button>
						</th>
					{/if}
					
					{#each Object.values(processedHeaders) as header}
						<th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
							{header.name}
						</th>
					{/each}
					
					{#if hasActions}
						<th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
							Actions
						</th>
					{/if}
				</tr>
			</thead>
			
			<tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
				{#each actualData as item, index (index)}
					<tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
						{#if selection}
							<td class="px-6 py-4 whitespace-nowrap @{breakpoint}:table-cell block @{breakpoint}:w-auto w-full">
								<button
									class="flex items-center justify-center w-4 h-4 border border-gray-300 rounded bg-white transition-colors dark:border-gray-600 dark:bg-gray-800"
									onclick={() => handleSelection(item)}
								>
									{actualSelection[item[selection.key] as string | number] !== undefined ? '☑' : '☐'}
								</button>
							</td>
						{/if}
						
						{#each Object.entries(processedHeaders) as [key, header]}
							<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 @{breakpoint}:table-cell block @{breakpoint}:w-auto w-full @{breakpoint}:before:hidden before:content-[attr(data-label)] before:font-medium before:inline-block before:w-24" data-label="{header.name}:">
								{resolveValue(item, header.access)}
							</td>
						{/each}
						
						{#if hasActions && processedActions[index]}
							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium @{breakpoint}:table-cell block">
								{#each processedActions[index] as action}
									<button
										class="relative inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 {action.class}"
										onclick={() => action.action(item)}
										onmouseenter={() => {
										if (action.tooltip) {
											action.tooltipTimeout = setTimeout(() => {
												action.tooltipOpen = true;
											}, 600);
										}
									}}
									onmouseleave={() => {
										if (action.tooltipTimeout) clearTimeout(action.tooltipTimeout);
										action.tooltipOpen = false;
									}}
								>
									{#if action.icon}
										{@const IconComponent = action.icon}
										<IconComponent size={16} />
									{/if}
										
										{#if action.tooltipOpen && action.tooltip}
											<div class="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap z-10">
												{action.tooltip}
											</div>
										{/if}
									</button>
								{/each}
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
		
		<!-- Pagination -->
		<div class="flex items-center justify-between px-6 py-3 bg-gray-50 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
			<div class="flex items-center">
				<span class="text-sm text-gray-700 dark:text-gray-300">
					{paginationState.total} Records
				</span>
			</div>
			
			<div class="flex items-center space-x-1">
				<button
					class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
					onclick={() => changePage(1)}
					disabled={paginationState.page === 1}
				>
					&laquo;
				</button>
				
				<button
					class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
					onclick={() => changePage(paginationState.page - 1)}
					disabled={paginationState.page === 1}
				>
					&lsaquo;
				</button>
				
				{#each paginationState.range as pageNum}
					<button
						class="px-3 py-1 text-sm font-medium rounded {pageNum === paginationState.page ? 'text-white bg-blue-600' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700'}"
						onclick={() => changePage(pageNum)}
					>
						{pageNum}
					</button>
				{/each}
				
				<button
					class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
					onclick={() => changePage(paginationState.page + 1)}
					disabled={paginationState.page === paginationState.pages}
				>
					&rsaquo;
				</button>
				
				<button
					class="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700"
					onclick={() => changePage(paginationState.pages)}
					disabled={paginationState.page === paginationState.pages}
				>
					&raquo;
				</button>
			</div>
		</div>
		
		{@render bottom?.()}
	</div>
{/if}

<style lang="postcss">
	@reference "tailwindcss";
	
	.table {
		@apply w-full;
	}
	
	.table-small {
		@apply text-sm;
	}
	
	.table-medium {
		@apply text-base;
	}
	
	.table-large {
		@apply text-lg;
	}
	
	.table-striped tbody tr:nth-child(even) {
		@apply bg-gray-50 dark:bg-gray-700;
	}
	
	.table-bordered {
		@apply border border-gray-200 dark:border-gray-700;
	}
	
	.table-bordered th,
	.table-bordered td {
		@apply border border-gray-200 dark:border-gray-700;
	}
</style>
