<!--
@component
Checkbox component with support for indeterminate state, different sizes, and comprehensive accessibility features
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { checkboxVariants, checkboxLabelVariants, checkboxDescriptionVariants } from '../../utils/variants/checkbox.js';
	import type { CheckboxProps } from '../../types/components/checkbox.js';

	let {
		checked = $bindable(false),
		indeterminate = false,
		disabled = false,
		required = false,
		size = 'default',
		value,
		name,
		id,
		label,
		description,
		error = false,
		errorText,
		class: className = '',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		onchange,
		...restProps
	}: CheckboxProps = $props();

	// Generate unique ID if not provided
	const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
	const descriptionId = description || errorText ? `${checkboxId}-description` : undefined;

	// Determine if checkbox is in error state
	const isError = $derived(error || !!errorText);
	
	// Compute classes
	const checkboxClass = $derived(cn(checkboxVariants({ size, error: isError }), className));
	const labelClass = $derived(cn(checkboxLabelVariants({ error: isError })));
	const descriptionClass = $derived(cn(checkboxDescriptionVariants({ error: isError })));

	// Get description text to display
	const displayDescription = $derived(errorText || description);

	// Compute checkbox state
	const state = $derived(indeterminate ? 'indeterminate' : checked ? 'checked' : 'unchecked');

	// Compute aria attributes
	const computedAriaDescribedby = $derived(
		[ariaDescribedby, descriptionId].filter(Boolean).join(' ') || undefined
	);

	// Handle checkbox change
	function handleChange(event: Event) {
		if (disabled) return;
		
		const target = event.target as HTMLInputElement;
		checked = target.checked;
		
		onchange?.(event);
	}
</script>

<div class="flex items-start space-x-2">
	<input
		type="checkbox"
		id={checkboxId}
		{name}
		{value}
		bind:checked
		{disabled}
		{required}
		class={checkboxClass}
		data-state={state}
		aria-label={ariaLabel}
		aria-describedby={computedAriaDescribedby}
		aria-invalid={isError}
		onchange={handleChange}
		{...restProps}
	/>
	
	<!-- Checkbox visual indicator -->
	<div class="relative pointer-events-none">
		{#if checked && !indeterminate}
			<svg class="h-3 w-3 text-primary-foreground absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
			</svg>
		{:else if indeterminate}
			<svg class="h-3 w-3 text-primary-foreground absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
				<path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
			</svg>
		{/if}
	</div>

	{#if label || displayDescription}
		<div class="grid gap-1.5 leading-none">
			{#if label}
				<label for={checkboxId} class={labelClass}>
					{label}
					{#if required}
						<span class="text-destructive ml-1">*</span>
					{/if}
				</label>
			{/if}
			
			{#if displayDescription}
				<p id={descriptionId} class={descriptionClass}>
					{displayDescription}
				</p>
			{/if}
		</div>
	{/if}
</div>
