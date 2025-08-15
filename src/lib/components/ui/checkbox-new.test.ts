import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Checkbox from './checkbox.svelte';

describe('Checkbox Component', () => {
	it('renders with default props', () => {
		render(Checkbox);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeInTheDocument();
		expect(checkbox).toHaveClass('h-4', 'w-4'); // default size
	});

	it('renders with label', () => {
		render(Checkbox, { label: 'Accept terms', id: 'terms' });
		const label = screen.getByLabelText('Accept terms');
		const labelElement = screen.getByText('Accept terms');
		expect(label).toBeInTheDocument();
		expect(labelElement).toBeInTheDocument();
		expect(labelElement.tagName).toBe('LABEL');
		expect(labelElement).toHaveAttribute('for', 'terms');
	});

	it('shows required asterisk when required', () => {
		render(Checkbox, { label: 'Required checkbox', required: true });
		const asterisk = screen.getByText('*');
		expect(asterisk).toBeInTheDocument();
		expect(asterisk).toHaveClass('text-destructive');
	});

	it('renders different sizes', () => {
		const { rerender } = render(Checkbox, { size: 'sm' });
		let checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveClass('h-3', 'w-3');

		rerender({ size: 'default' });
		checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveClass('h-4', 'w-4');

		rerender({ size: 'lg' });
		checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveClass('h-5', 'w-5');
	});

	it('handles disabled state', () => {
		render(Checkbox, { disabled: true });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeDisabled();
		expect(checkbox).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50');
	});

	it('shows description text', () => {
		render(Checkbox, { 
			label: 'Newsletter',
			description: 'Get updates about new features' 
		});
		const description = screen.getByText('Get updates about new features');
		expect(description).toBeInTheDocument();
		expect(description).toHaveClass('text-muted-foreground');
	});

	it('shows error text and applies error styling', () => {
		render(Checkbox, { 
			label: 'Test checkbox',
			errorText: 'This field is required'
		});
		const errorText = screen.getByText('This field is required');
		const checkbox = screen.getByRole('checkbox');
		const label = screen.getByText('Test checkbox');

		expect(errorText).toBeInTheDocument();
		expect(errorText).toHaveClass('text-destructive');
		expect(checkbox).toHaveClass('border-destructive');
		expect(label).toHaveClass('text-destructive');
	});

	it('prioritizes error text over description', () => {
		render(Checkbox, { 
			description: 'Description text',
			errorText: 'Error text'
		});
		
		expect(screen.getByText('Error text')).toBeInTheDocument();
		expect(screen.queryByText('Description text')).not.toBeInTheDocument();
	});

	it('handles checked state', async () => {
		const initialChecked = false;
		render(Checkbox, { checked: initialChecked });
		
		const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
		expect(checkbox.checked).toBe(false);

		await fireEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
	});

	it('handles indeterminate state', () => {
		render(Checkbox, { indeterminate: true });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
	});

	it('shows check icon when checked', () => {
		render(Checkbox, { checked: true });
		const checkIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
		expect(checkIcon).toBeInTheDocument();
	});

	it('shows minus icon when indeterminate', () => {
		render(Checkbox, { indeterminate: true });
		const minusIcon = screen.getByRole('checkbox').parentElement?.querySelector('svg');
		expect(minusIcon).toBeInTheDocument();
	});

	it('calls onchange handler', async () => {
		const onchange = vi.fn();
		render(Checkbox, { onchange });
		
		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);
		
		expect(onchange).toHaveBeenCalled();
	});

	it('does not call onchange when disabled', async () => {
		const onchange = vi.fn();
		render(Checkbox, { onchange, disabled: true });
		
		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);
		
		expect(onchange).not.toHaveBeenCalled();
	});

	it('sets proper ARIA attributes', () => {
		render(Checkbox, { 
			'aria-label': 'Custom label',
			description: 'Description text',
			error: true
		});
		
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('aria-label', 'Custom label');
		expect(checkbox).toHaveAttribute('aria-invalid', 'true');
		expect(checkbox).toHaveAttribute('aria-describedby');
	});

	it('generates unique IDs when not provided', () => {
		const { rerender } = render(Checkbox);
		const checkbox1 = screen.getByRole('checkbox');
		const id1 = checkbox1.getAttribute('id');

		rerender({});
		const checkbox2 = screen.getByRole('checkbox');
		const id2 = checkbox2.getAttribute('id');

		expect(id1).toBeTruthy();
		expect(id2).toBeTruthy();
		expect(id1).not.toBe(id2);
	});

	it('applies custom className', () => {
		render(Checkbox, { class: 'custom-class' });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveClass('custom-class');
	});

	it('handles form attributes', () => {
		render(Checkbox, {
			name: 'terms',
			value: 'accepted',
			required: true
		});

		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('name', 'terms');
		expect(checkbox).toHaveAttribute('value', 'accepted');
		expect(checkbox).toHaveAttribute('required');
	});

	it('updates data-state attribute based on state', () => {
		const { rerender } = render(Checkbox, { checked: false });
		let checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('data-state', 'unchecked');

		rerender({ checked: true });
		checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('data-state', 'checked');

		rerender({ indeterminate: true });
		checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('data-state', 'indeterminate');
	});
});
