import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Input from './input.svelte';

describe('Input Component', () => {
	it('renders with default props', () => {
		render(Input);
		const input = screen.getByRole('textbox');
		expect(input).toBeInTheDocument();
		expect(input).toHaveClass('h-10', 'px-3', 'py-2'); // default size
	});

	it('renders with custom placeholder', () => {
		render(Input, { placeholder: 'Enter your name' });
		const input = screen.getByPlaceholderText('Enter your name');
		expect(input).toBeInTheDocument();
	});

	it('renders with label', () => {
		render(Input, { label: 'Username', id: 'username' });
		const label = screen.getByLabelText('Username');
		const labelElement = screen.getByText('Username');
		expect(label).toBeInTheDocument();
		expect(labelElement).toBeInTheDocument();
		expect(labelElement.tagName).toBe('LABEL');
		expect(labelElement).toHaveAttribute('for', 'username');
	});

	it('shows required asterisk when required', () => {
		render(Input, { label: 'Email', required: true });
		const asterisk = screen.getByText('*');
		expect(asterisk).toBeInTheDocument();
		expect(asterisk).toHaveClass('text-destructive');
	});

	it('renders different variants', () => {
		const { rerender } = render(Input, { variant: 'default' });
		let input = screen.getByRole('textbox');
		expect(input).toHaveClass('border-input');

		rerender({ variant: 'destructive' });
		input = screen.getByRole('textbox');
		expect(input).toHaveClass('border-destructive');

		rerender({ variant: 'filled' });
		input = screen.getByRole('textbox');
		expect(input).toHaveClass('bg-muted');
	});

	it('renders different sizes', () => {
		const { rerender } = render(Input, { size: 'sm' });
		let input = screen.getByRole('textbox');
		expect(input).toHaveClass('h-8');

		rerender({ size: 'default' });
		input = screen.getByRole('textbox');
		expect(input).toHaveClass('h-10');

		rerender({ size: 'lg' });
		input = screen.getByRole('textbox');
		expect(input).toHaveClass('h-12');
	});

	it('handles disabled state', () => {
		render(Input, { disabled: true });
		const input = screen.getByRole('textbox');
		expect(input).toBeDisabled();
		expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
	});

	it('handles readonly state', () => {
		render(Input, { readonly: true });
		const input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('readonly');
		expect(input).toHaveClass('read-only:cursor-default', 'read-only:bg-muted');
	});

	it('shows helper text', () => {
		render(Input, { helperText: 'This is a helper text' });
		const helperText = screen.getByText('This is a helper text');
		expect(helperText).toBeInTheDocument();
		expect(helperText).toHaveClass('text-muted-foreground');
	});

	it('shows error text and applies error styling', () => {
		render(Input, { errorText: 'This field is required', label: 'Test' });
		const errorText = screen.getByText('This field is required');
		const input = screen.getByRole('textbox');
		const label = screen.getByText('Test');

		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-destructive');
		expect(input).toHaveClass('border-destructive');
		expect(label).toHaveClass('text-destructive');
	});

	it('prioritizes error text over helper text', () => {
		render(Input, { 
			helperText: 'Helper text', 
			errorText: 'Error text' 
		});
		
		expect(screen.getByText('Error text')).toBeInTheDocument();
		expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
	});

	it('handles different input types', () => {
		const { rerender } = render(Input, { type: 'email' });
		let input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('type', 'email');

		rerender({ type: 'password' });
		input = screen.getByLabelText('', { selector: 'input[type="password"]' });
		expect(input).toHaveAttribute('type', 'password');

		rerender({ type: 'number' });
		input = screen.getByRole('spinbutton');
		expect(input).toHaveAttribute('type', 'number');
	});

	it('handles value binding', async () => {
		const initialValue = 'initial value';
		render(Input, { value: initialValue });
		
		const input = screen.getByRole('textbox') as HTMLInputElement;
		expect(input.value).toBe('initial value');

		await fireEvent.input(input, { target: { value: 'new value' } });
		expect(input.value).toBe('new value');
	});

	it('calls event handlers', async () => {
		const onchange = vi.fn();
		const oninput = vi.fn();
		const onfocus = vi.fn();
		const onblur = vi.fn();

		render(Input, { onchange, oninput, onfocus, onblur });
		const input = screen.getByRole('textbox');

		await fireEvent.input(input, { target: { value: 'test' } });
		expect(oninput).toHaveBeenCalled();

		await fireEvent.change(input);
		expect(onchange).toHaveBeenCalled();

		await fireEvent.focus(input);
		expect(onfocus).toHaveBeenCalled();

		await fireEvent.blur(input);
		expect(onblur).toHaveBeenCalled();
	});

	it('sets proper ARIA attributes', () => {
		render(Input, { 
			'aria-label': 'Custom label',
			helperText: 'Helper text',
			error: true
		});
		
		const input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('aria-label', 'Custom label');
		expect(input).toHaveAttribute('aria-invalid', 'true');
		expect(input).toHaveAttribute('aria-describedby');
	});

	it('generates unique IDs when not provided', () => {
		const { rerender } = render(Input);
		const input1 = screen.getByRole('textbox');
		const id1 = input1.getAttribute('id');

		rerender({});
		const input2 = screen.getByRole('textbox');
		const id2 = input2.getAttribute('id');

		expect(id1).toBeTruthy();
		expect(id2).toBeTruthy();
		expect(id1).not.toBe(id2);
	});

	it('applies custom className', () => {
		render(Input, { class: 'custom-class' });
		const input = screen.getByRole('textbox');
		expect(input).toHaveClass('custom-class');
	});

	it('handles validation attributes', () => {
		render(Input, {
			required: true,
			min: '0',
			max: '100',
			maxlength: 50,
			minlength: 2,
			pattern: '[A-Za-z]+',
			step: '1'
		});

		const input = screen.getByRole('textbox');
		expect(input).toHaveAttribute('required');
		expect(input).toHaveAttribute('min', '0');
		expect(input).toHaveAttribute('max', '100');
		expect(input).toHaveAttribute('maxlength', '50');
		expect(input).toHaveAttribute('minlength', '2');
		expect(input).toHaveAttribute('pattern', '[A-Za-z]+');
		expect(input).toHaveAttribute('step', '1');
	});
});
