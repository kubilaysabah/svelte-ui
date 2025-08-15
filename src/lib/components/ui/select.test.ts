import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Select from './select.svelte';

const mockOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3', disabled: true }
];

describe('Select Component', () => {
	it('renders with default props', () => {
		render(Select, { options: mockOptions });
		const select = screen.getByRole('combobox');
		expect(select).toBeInTheDocument();
	});

	it('renders with custom placeholder', () => {
		render(Select, { options: mockOptions, placeholder: 'Choose an option' });
		const placeholder = screen.getByText('Choose an option');
		expect(placeholder).toBeInTheDocument();
	});

	it('renders with label', () => {
		render(Select, { options: mockOptions, label: 'Country', id: 'country' });
		const label = screen.getByText('Country');
		const select = screen.getByLabelText('Country');
		expect(label).toBeInTheDocument();
		expect(select).toBeInTheDocument();
		expect(label.tagName).toBe('LABEL');
		expect(label).toHaveAttribute('for', 'country');
	});

	it('shows required asterisk when required', () => {
		render(Select, { options: mockOptions, label: 'Required Field', required: true });
		const asterisk = screen.getByText('*');
		expect(asterisk).toBeInTheDocument();
		expect(asterisk).toHaveClass('text-destructive');
	});

	it('renders different variants', () => {
		const { rerender } = render(Select, { options: mockOptions, variant: 'default' });
		let select = screen.getByRole('combobox');
		expect(select).toHaveClass('border-input');

		rerender({ options: mockOptions, variant: 'destructive' });
		select = screen.getByRole('combobox');
		expect(select).toHaveClass('border-destructive');

		rerender({ options: mockOptions, variant: 'filled' });
		select = screen.getByRole('combobox');
		expect(select).toHaveClass('bg-muted');
	});

	it('renders different sizes', () => {
		const { rerender } = render(Select, { options: mockOptions, size: 'sm' });
		let select = screen.getByRole('combobox');
		expect(select).toHaveClass('h-8');

		rerender({ options: mockOptions, size: 'default' });
		select = screen.getByRole('combobox');
		expect(select).toHaveClass('h-10');

		rerender({ options: mockOptions, size: 'lg' });
		select = screen.getByRole('combobox');
		expect(select).toHaveClass('h-12');
	});

	it('handles disabled state', () => {
		render(Select, { options: mockOptions, disabled: true });
		const select = screen.getByRole('combobox');
		expect(select).toBeDisabled();
		expect(select).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
	});

	it('shows helper text', () => {
		render(Select, { options: mockOptions, helperText: 'Choose your preferred option' });
		const helperText = screen.getByText('Choose your preferred option');
		expect(helperText).toBeInTheDocument();
		expect(helperText).toHaveClass('text-muted-foreground');
	});

	it('shows error text and applies error styling', () => {
		render(Select, { 
			options: mockOptions, 
			errorText: 'Please select an option', 
			label: 'Test' 
		});
		const errorText = screen.getByText('Please select an option');
		const select = screen.getByRole('combobox');
		const label = screen.getByText('Test');

		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-destructive');
		expect(select).toHaveClass('border-destructive');
		expect(label).toHaveClass('text-destructive');
	});

	it('prioritizes error text over helper text', () => {
		render(Select, { 
			options: mockOptions,
			helperText: 'Helper text', 
			errorText: 'Error text' 
		});
		
		expect(screen.getByText('Error text')).toBeInTheDocument();
		expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
	});

	it('renders all options including disabled ones', () => {
		render(Select, { options: mockOptions });
		
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
		expect(screen.getByText('Option 3')).toBeInTheDocument();
	});

	it('handles value selection', async () => {
		const initialValue = 'option1';
		render(Select, { options: mockOptions, value: initialValue });
		
		const select = screen.getByRole('combobox') as HTMLSelectElement;
		expect(select.value).toBe('option1');
	});

	it('calls onchange handler', async () => {
		const onchange = vi.fn();
		render(Select, { options: mockOptions, onchange });
		
		const select = screen.getByRole('combobox');
		await fireEvent.change(select, { target: { value: 'option2' } });
		
		expect(onchange).toHaveBeenCalled();
	});

	it('handles multiple selection', () => {
		render(Select, { options: mockOptions, multiple: true });
		const select = screen.getByRole('listbox'); // multiple select has listbox role
		expect(select).toHaveAttribute('multiple');
	});

	it('sets proper ARIA attributes', () => {
		render(Select, { 
			options: mockOptions,
			'aria-label': 'Custom label',
			helperText: 'Helper text',
			error: true
		});
		
		const select = screen.getByRole('combobox');
		expect(select).toHaveAttribute('aria-label', 'Custom label');
		expect(select).toHaveAttribute('aria-invalid', 'true');
		expect(select).toHaveAttribute('aria-describedby');
	});

	it('generates unique IDs when not provided', () => {
		const { rerender } = render(Select, { options: mockOptions });
		const select1 = screen.getByRole('combobox');
		const id1 = select1.getAttribute('id');

		rerender({ options: mockOptions });
		const select2 = screen.getByRole('combobox');
		const id2 = select2.getAttribute('id');

		expect(id1).toBeTruthy();
		expect(id2).toBeTruthy();
		expect(id1).not.toBe(id2);
	});

	it('applies custom className', () => {
		render(Select, { options: mockOptions, class: 'custom-class' });
		const select = screen.getByRole('combobox');
		expect(select).toHaveClass('custom-class');
	});

	it('handles form attributes', () => {
		render(Select, {
			options: mockOptions,
			name: 'country',
			required: true
		});

		const select = screen.getByRole('combobox');
		expect(select).toHaveAttribute('name', 'country');
		expect(select).toHaveAttribute('required');
	});

	it('shows dropdown arrow for single select', () => {
		render(Select, { options: mockOptions });
		const arrow = screen.getByRole('combobox').parentElement?.querySelector('svg');
		expect(arrow).toBeInTheDocument();
	});

	it('does not show dropdown arrow for multiple select', () => {
		render(Select, { options: mockOptions, multiple: true });
		const arrow = screen.getByRole('listbox').parentElement?.querySelector('svg');
		expect(arrow).not.toBeInTheDocument();
	});
});
