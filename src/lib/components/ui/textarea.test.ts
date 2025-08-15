import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Textarea from './textarea.svelte';

describe('Textarea Component', () => {
	it('renders with default props', () => {
		render(Textarea);
		const textarea = screen.getByRole('textbox');
		expect(textarea).toBeInTheDocument();
		expect(textarea.tagName).toBe('TEXTAREA');
	});

	it('renders with custom placeholder', () => {
		render(Textarea, { placeholder: 'Enter your message' });
		const textarea = screen.getByPlaceholderText('Enter your message');
		expect(textarea).toBeInTheDocument();
	});

	it('renders with label', () => {
		render(Textarea, { label: 'Message', id: 'message' });
		const label = screen.getByLabelText('Message');
		const labelElement = screen.getByText('Message');
		expect(label).toBeInTheDocument();
		expect(labelElement).toBeInTheDocument();
		expect(labelElement.tagName).toBe('LABEL');
		expect(labelElement).toHaveAttribute('for', 'message');
	});

	it('shows required asterisk when required', () => {
		render(Textarea, { label: 'Comment', required: true });
		const asterisk = screen.getByText('*');
		expect(asterisk).toBeInTheDocument();
		expect(asterisk).toHaveClass('text-destructive');
	});

	it('renders different variants', () => {
		const { rerender } = render(Textarea, { variant: 'default' });
		let textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('border-input');

		rerender({ variant: 'destructive' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('border-destructive');

		rerender({ variant: 'filled' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('bg-muted');
	});

	it('renders different sizes', () => {
		const { rerender } = render(Textarea, { size: 'sm' });
		let textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('min-h-[60px]');

		rerender({ size: 'default' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('min-h-[80px]');

		rerender({ size: 'lg' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('min-h-[120px]');
	});

	it('handles different resize options', () => {
		const { rerender } = render(Textarea, { resize: 'none' });
		let textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('resize-none');

		rerender({ resize: 'vertical' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('resize-y');

		rerender({ resize: 'horizontal' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('resize-x');

		rerender({ resize: 'both' });
		textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('resize');
	});

	it('handles disabled state', () => {
		render(Textarea, { disabled: true });
		const textarea = screen.getByRole('textbox');
		expect(textarea).toBeDisabled();
		expect(textarea).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
	});

	it('handles readonly state', () => {
		render(Textarea, { readonly: true });
		const textarea = screen.getByRole('textbox');
		expect(textarea).toHaveAttribute('readonly');
		expect(textarea).toHaveClass('read-only:cursor-default', 'read-only:bg-muted');
	});

	it('shows helper text', () => {
		render(Textarea, { helperText: 'Maximum 500 characters' });
		const helperText = screen.getByText('Maximum 500 characters');
		expect(helperText).toBeInTheDocument();
		expect(helperText).toHaveClass('text-muted-foreground');
	});

	it('shows error text and applies error styling', () => {
		render(Textarea, { errorText: 'This field is required', label: 'Test' });
		const errorText = screen.getByText('This field is required');
		const textarea = screen.getByRole('textbox');
		const label = screen.getByText('Test');

		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-destructive');
		expect(textarea).toHaveClass('border-destructive');
		expect(label).toHaveClass('text-destructive');
	});

	it('prioritizes error text over helper text', () => {
		render(Textarea, { 
			helperText: 'Helper text', 
			errorText: 'Error text' 
		});
		
		expect(screen.getByText('Error text')).toBeInTheDocument();
		expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
	});

	it('handles value binding', async () => {
		const initialValue = 'initial text';
		render(Textarea, { value: initialValue });
		
		const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
		expect(textarea.value).toBe('initial text');

		await fireEvent.input(textarea, { target: { value: 'new text' } });
		expect(textarea.value).toBe('new text');
	});

	it('calls event handlers', async () => {
		const onchange = vi.fn();
		const oninput = vi.fn();
		const onfocus = vi.fn();
		const onblur = vi.fn();

		render(Textarea, { onchange, oninput, onfocus, onblur });
		const textarea = screen.getByRole('textbox');

		await fireEvent.input(textarea, { target: { value: 'test' } });
		expect(oninput).toHaveBeenCalled();

		await fireEvent.change(textarea);
		expect(onchange).toHaveBeenCalled();

		await fireEvent.focus(textarea);
		expect(onfocus).toHaveBeenCalled();

		await fireEvent.blur(textarea);
		expect(onblur).toHaveBeenCalled();
	});

	it('sets proper ARIA attributes', () => {
		render(Textarea, { 
			'aria-label': 'Custom label',
			helperText: 'Helper text',
			error: true
		});
		
		const textarea = screen.getByRole('textbox');
		expect(textarea).toHaveAttribute('aria-label', 'Custom label');
		expect(textarea).toHaveAttribute('aria-invalid', 'true');
		expect(textarea).toHaveAttribute('aria-describedby');
	});

	it('generates unique IDs when not provided', () => {
		const { rerender } = render(Textarea);
		const textarea1 = screen.getByRole('textbox');
		const id1 = textarea1.getAttribute('id');

		rerender({});
		const textarea2 = screen.getByRole('textbox');
		const id2 = textarea2.getAttribute('id');

		expect(id1).toBeTruthy();
		expect(id2).toBeTruthy();
		expect(id1).not.toBe(id2);
	});

	it('applies custom className', () => {
		render(Textarea, { class: 'custom-class' });
		const textarea = screen.getByRole('textbox');
		expect(textarea).toHaveClass('custom-class');
	});

	it('handles textarea-specific attributes', () => {
		render(Textarea, {
			rows: 10,
			cols: 50,
			maxlength: 1000,
			minlength: 10,
			required: true
		});

		const textarea = screen.getByRole('textbox');
		expect(textarea).toHaveAttribute('rows', '10');
		expect(textarea).toHaveAttribute('cols', '50');
		expect(textarea).toHaveAttribute('maxlength', '1000');
		expect(textarea).toHaveAttribute('minlength', '10');
		expect(textarea).toHaveAttribute('required');
	});

	it('handles default rows when not specified', () => {
		render(Textarea);
		const textarea = screen.getByRole('textbox');
		expect(textarea).toHaveAttribute('rows', '4');
	});
});
