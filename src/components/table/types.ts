import type { HTMLTableAttributes } from 'svelte/elements';
import type { VariantProps } from 'class-variance-authority';
import type { Snippet, Component } from 'svelte';
import { cva } from 'class-variance-authority';

/**
 * Table component style variants using CVA (Class Variance Authority)
 * Provides consistent styling patterns across different table states and breakpoints
 */
export const table = cva('table', {
	variants: {
		size: {
			small: 'table-small',
			medium: 'table-medium',
			large: 'table-large'
		},
		variant: {
			default: 'table-default',
			striped: 'table-striped',
			bordered: 'table-bordered'
		},
		breakpoint: {
			xs: 'table-xs',
			sm: 'table-sm',
			md: 'table-md',
			lg: 'table-lg',
			xl: 'table-xl',
			'2xl': 'table-2xl',
			'3xl': 'table-3xl',
			'4xl': 'table-4xl',
			'5xl': 'table-5xl',
			'6xl': 'table-6xl',
			'7xl': 'table-7xl'
		}
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
		breakpoint: '6xl'
	}
});

/**
 * Breakpoint type for responsive table behavior
 */
export type TableBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';

/**
 * Table size variants
 */
export type TableSize = 'small' | 'medium' | 'large';

/**
 * Table visual variants
 */
export type TableVariant = 'default' | 'striped' | 'bordered';

/**
 * Column header configuration interface
 */
export interface TableHeader {
	/** Display name for the column */
	name: string;
	/** Data access path (supports nested properties with dot notation or array format) */
	access: string | string[];
	/** Whether this column is sortable */
	sortable?: boolean;
	/** Custom width class for the column */
	width?: string;
	/** Custom alignment for the column */
	align?: 'left' | 'center' | 'right';
}

/**
 * Table headers configuration (key-value pairs)
 */
export type TableHeaders = Record<string, string | TableHeader>;

/**
 * Action button configuration for table rows
 */
export interface TableAction<T = Record<string, unknown>> {
	/** Action identifier (auto-generated from object key) */
	key?: string;
	/** Display tooltip text */
	tooltip?: string;
	/** Icon component to display */
	icon?: Component;
	/** Additional CSS classes */
	class?: string;
	/** Action handler function */
	action: (item: T) => void | Promise<void>;
	/** Conditional test function to show/hide action */
	test?: (item: T) => boolean | Promise<boolean>;
}

/**
 * Filter configuration for table data
 */
export interface TableFilter {
	/** Filter key identifier (auto-generated from object key) */
	key?: string;
	/** Initial filter options */
	initial?: FilterOption[];
	/** Function to fetch filter options dynamically */
	fetch?: () => Promise<FilterOption[]>;
	/** Currently selected filter index */
	selected?: number;
	/** Whether filter dropdown is open */
	open?: boolean;
	/** Available filter options */
	list?: FilterOption[];
}

/**
 * Filter option interface
 */
export interface FilterOption {
	/** Option value */
	value: string | number;
	/** Display name */
	name: string;
	/** Short display name for compact view */
	short?: string;
	/** Custom column name for filtering (if different from filter key) */
	column?: string;
}

/**
 * Data fetching function interface
 */
export interface TableDataFetcher<T = Record<string, unknown>> {
	(page: number, limit: number, query: Record<string, unknown>): Promise<TableDataResponse<T>>;
}

/**
 * Table data response interface
 */
export interface TableDataResponse<T = Record<string, unknown>> {
	/** Total number of records */
	total: number;
	/** Current page number */
	page: number;
	/** Total number of pages */
	pages: number;
	/** Number of items per page */
	limit: number;
	/** Array of data items */
	data: T[];
}

/**
 * Selection configuration interface
 */
export interface TableSelection<T = Record<string, unknown>> {
	/** Property name to use as selection key */
	key: string;
	/** Array of selected item keys */
	selected: (string | number)[];
	/** Selection change handler */
	onSelect?: (item: T, isSelectAll: boolean) => boolean;
}

/**
 * Main table component props interface
 */
export interface TableProps<T = Record<string, unknown>> 
	extends Omit<HTMLTableAttributes, 'size'>,
		VariantProps<typeof table> {
	/** Table title */
	title?: string;
	/** Table subtitle */
	subtitle?: string;
	/** Table description */
	description?: string;
	
	/** Current page number */
	page?: number;
	/** Items per page */
	limit?: number;
	
	/** Column headers configuration */
	headers: TableHeaders;
	/** Row actions configuration */
	actions?: Record<string, TableAction<T>>;
	/** Search configuration */
	search?: string[];
	/** Current search value */
	searchValue?: string;
	/** External search control */
	searchOuter?: boolean;
	/** Filters configuration */
	filters?: Record<string, TableFilter>;
	/** Selection configuration */
	selection?: TableSelection<T>;
	/** Empty state message */
	emptyMessage?: string;
	
	/** Data fetching function */
	data: TableDataFetcher<T>;
	
	/** Buttons slot content */
	buttons?: Snippet;
	/** Bottom slot content */
	bottom?: Snippet;
	
	/** Additional CSS classes */
	class?: string;
}

/**
 * Internal processed header interface
 */
export interface ProcessedHeader {
	name: string;
	access: string[];
}

/**
 * Internal processed action interface
 */
export interface ProcessedAction<T = Record<string, unknown>> {
	key: string;
	tooltip: string;
	tooltipOpen: boolean;
	tooltipTimeout: ReturnType<typeof setTimeout> | null;
	icon: Component;
	class: string;
	action: (item: T) => void | Promise<void>;
}

/**
 * Loading state interface
 */
export interface LoadingState {
	isFetching: boolean;
	isLoading: boolean;
	loadingTimeout: ReturnType<typeof setTimeout> | null;
}

/**
 * Pagination state interface
 */
export interface PaginationState {
	page: number;
	pages: number;
	total: number;
	limit: number;
	range: number[];
}

/**
 * Storybook story arguments interface for better type safety
 */
export interface TableStoryArgs<T = Record<string, unknown>> extends Partial<TableProps<T>> {
	/** Story title override */
	storyTitle?: string;
	/** Story description override */
	storyDescription?: string;
}

/**
 * Common table configuration for consistent usage
 */
export interface TableConfig {
	/** Default page size options */
	pageSizeOptions?: number[];
	/** Default search debounce delay in milliseconds */
	searchDebounceMs?: number;
	/** Default loading timeout in milliseconds */
	loadingTimeoutMs?: number;
	/** Default empty message */
	defaultEmptyMessage?: string;
	/** Default error message */
	defaultErrorMessage?: string;
}

/**
 * Table theme configuration
 */
export interface TableTheme {
	/** Primary color scheme */
	primary?: string;
	/** Secondary color scheme */
	secondary?: string;
	/** Success color scheme */
	success?: string;
	/** Warning color scheme */
	warning?: string;
	/** Error color scheme */
	error?: string;
	/** Border radius */
	borderRadius?: string;
	/** Font family */
	fontFamily?: string;
}

/**
 * Extended table props with theme support
 */
export interface ThemedTableProps<T = Record<string, unknown>> extends TableProps<T> {
	/** Theme configuration */
	theme?: TableTheme;
	/** Custom CSS variables */
	cssVariables?: Record<string, string>;
}
