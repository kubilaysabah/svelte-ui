<!--
@component
Textarea component with variants, sizes and comprehensive form features
Supports all native textarea attributes, validation states, and accessibility features
-->

<script lang="ts">
	import { cn } from '$lib/utils/cn.js';
	import { textareaVariants, textareaLabelVariants, textareaHelperVariants } from '$lib/utils/textarea-variants.js';
	import type { TextareaProps } from '../../types/textarea.js';

	let {
		variant = 'default',
		size = 'default',
		placeholder,
		value = $bindable(''),
		disabled = false,
		readonly = false,
		required = false,
		error = false,
		helperText,
		errorText,
		label,
		id,
		name,
		rows = 4,
		cols,
		maxlength,
		minlength,
		resize = 'vertical',
		class: className = '',
		'aria-label': ariaLabel,
		'aria-describedby': ariaDescribedby,
		'aria-invalid': ariaInvalid,
		onchange,
		oninput,
		onfocus,
		onblur,
		...restProps
	}: TextareaProps = $props();

	// Generate unique ID if not provided
	const textareaId = id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
	const helperId = helperText || errorText ? `${textareaId}-helper` : undefined;

	// Determine if textarea is in error state
	const isError = $derived(error || !!errorText);
	
	// Compute classes
	const textareaClass = $derived(cn(textareaVariants({ variant, size, error: isError, resize }), className));
	const labelClass = $derived(cn(textareaLabelVariants({ error: isError })));
	const helperClass = $derived(cn(textareaHelperVariants({ error: isError })));

	// Get helper text to display
	const displayHelperText = $derived(errorText || helperText);

	// Compute aria attributes
	const computedAriaDescribedby = $derived(
		[ariaDescribedby, helperId].filter(Boolean).join(' ') || undefined
	);
	const computedAriaInvalid = $derived(ariaInvalid ?? isError);
</script>

<div class="grid w-full gap-1.5">
	{#if label}
		<label for={textareaId} class={labelClass}>
			{label}
			{#if required}
				<span class="text-destructive ml-1">*</span>
			{/if}
		</label>
	{/if}
	
	<textarea
		id={textareaId}
		{name}
		{placeholder}
		bind:value
		{disabled}
		readonly={readonly}
		{required}
		{rows}
		{cols}
		{maxlength}
		{minlength}
		class={textareaClass}
		aria-label={ariaLabel}
		aria-describedby={computedAriaDescribedby}
		aria-invalid={computedAriaInvalid}
		{onchange}
		{oninput}
		{onfocus}
		{onblur}
		{...restProps}
	></textarea>
	
	{#if displayHelperText}
		<p id={helperId} class={helperClass}>
			{displayHelperText}
		</p>
	{/if}
</div>
