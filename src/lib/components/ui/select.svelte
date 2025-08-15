<!--
@component
Select component with variants, sizes and comprehensive form features
Supports options, validation states, and accessibility features
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { selectVariants, selectLabelVariants, selectHelperVariants } from '$lib/utils/select-variants.js';
	import type { SelectProps } from '../../types/select.js';

	let {
		variant = 'default',
		size = 'default',
		value = $bindable(),
		options,
		placeholder = 'Select an option...',
		disabled = false,
		required = false,
		multiple = false,
		error = false,
		helperText,
		errorText,
		label,
		id,
		name,
		class: className = '',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		onchange,
		...restProps
	}: SelectProps = $props();

	// Generate unique ID if not provided
	const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;
	const helperId = helperText || errorText ? `${selectId}-helper` : undefined;

	// Determine if select is in error state
	const isError = $derived(error || !!errorText);
	
	// Compute classes
	const selectClass = $derived(cn(selectVariants({ variant, size, error: isError }), className));
	const labelClass = $derived(cn(selectLabelVariants({ error: isError })));
	const helperClass = $derived(cn(selectHelperVariants({ error: isError })));

	// Get helper text to display
	const displayHelperText = $derived(errorText || helperText);

	// Compute aria attributes
	const computedAriaDescribedby = $derived(
		[ariaDescribedby, helperId].filter(Boolean).join(' ') || undefined
	);

	// Handle select change
	function handleChange(event: Event) {
		if (disabled) return;
		
		const target = event.target as HTMLSelectElement;
		
		if (multiple) {
			const selectedOptions = Array.from(target.selectedOptions);
			value = selectedOptions.map(option => option.value);
		} else {
			value = target.value;
		}
		
		onchange?.(event);
	}

	// Check if option is selected
	function isOptionSelected(optionValue: string | number): boolean {
		if (multiple && Array.isArray(value)) {
			return (value as (string | number)[]).includes(optionValue);
		}
		return value === optionValue;
	}
</script>

<div class="grid w-full max-w-sm items-center gap-1.5">
	{#if label}
		<label for={selectId} class={labelClass}>
			{label}
			{#if required}
				<span class="text-destructive ml-1">*</span>
			{/if}
		</label>
	{/if}
	
	<div class="relative">
		{#if multiple}
			<select
				id={selectId}
				{name}
				bind:value
				{disabled}
				{required}
				multiple
				class={selectClass}
				aria-label={ariaLabel}
				aria-describedby={computedAriaDescribedby}
				aria-invalid={isError}
				onchange={handleChange}
				{...restProps}
			>
				{#each options as option}
					<option 
						value={option.value} 
						disabled={option.disabled}
						selected={isOptionSelected(option.value)}
					>
						{option.label}
					</option>
				{/each}
			</select>
		{:else}
			<select
				id={selectId}
				{name}
				bind:value
				{disabled}
				{required}
				class={selectClass}
				aria-label={ariaLabel}
				aria-describedby={computedAriaDescribedby}
				aria-invalid={isError}
				onchange={handleChange}
				{...restProps}
			>
				{#if placeholder}
					<option value="" disabled selected={!value}>
						{placeholder}
					</option>
				{/if}
				
				{#each options as option}
					<option 
						value={option.value} 
						disabled={option.disabled}
						selected={isOptionSelected(option.value)}
					>
						{option.label}
					</option>
				{/each}
			</select>
			
			<!-- Dropdown arrow -->
			<div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
				<svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			</div>
		{/if}
	</div>
	
	{#if displayHelperText}
		<p id={helperId} class={helperClass}>
			{displayHelperText}
		</p>
	{/if}
</div>
