<!--
@component
Input component with variants, sizes and comprehensive form features
Supports all native input attributes, validation states, and accessibility features
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { inputVariants, inputLabelVariants, inputHelperVariants } from '$lib/utils/input-variants.js';
	import type { InputProps } from '../../types/input.js';

	let {
		variant = 'default',
		size = 'default',
		type = 'text',
		placeholder,
		value = $bindable(),
		disabled = false,
		readonly = false,
		required = false,
		error = false,
		helperText,
		errorText,
		label,
		id,
		name,
		autocomplete,
		min,
		max,
		step,
		maxlength,
		minlength,
		pattern,
		class: className = '',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		'aria-invalid': ariaInvalid,
		onchange,
		oninput,
		onfocus,
		onblur,
		...restProps
	}: InputProps = $props();

	// Generate unique ID if not provided
	const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
	const helperId = helperText || errorText ? `${inputId}-helper` : undefined;

	// Determine if input is in error state
	const isError = $derived(error || !!errorText);
	
	// Compute classes
	const inputClass = $derived(cn(inputVariants({ variant, size, error: isError }), className));
	const labelClass = $derived(cn(inputLabelVariants({ error: isError })));
	const helperClass = $derived(cn(inputHelperVariants({ error: isError })));

	// Get helper text to display
	const displayHelperText = $derived(errorText || helperText);

	// Compute aria attributes
	const computedAriaDescribedby = $derived(
		[ariaDescribedby, helperId].filter(Boolean).join(' ') || undefined
	);
	const computedAriaInvalid = $derived(ariaInvalid ?? isError);
</script>

<div class="grid w-full max-w-sm items-center gap-1.5">
	{#if label}
		<label for={inputId} class={labelClass}>
			{label}
			{#if required}
				<span class="text-destructive ml-1">*</span>
			{/if}
		</label>
	{/if}
	
	<input
		{type}
		id={inputId}
		{name}
		{placeholder}
		bind:value
		{disabled}
		readonly={readonly}
		{required}
		autocomplete={autocomplete as any}
		{min}
		{max}
		{step}
		{maxlength}
		{minlength}
		{pattern}
		class={inputClass}
		aria-label={ariaLabel}
		aria-describedby={computedAriaDescribedby}
		aria-invalid={computedAriaInvalid}
		{onchange}
		{oninput}
		{onfocus}
		{onblur}
		{...restProps}
	/>
	
	{#if displayHelperText}
		<p id={helperId} class={helperClass}>
			{displayHelperText}
		</p>
	{/if}
</div>
