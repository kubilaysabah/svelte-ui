import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';
import Dropdown from './dropdown.svelte';
import type { DropdownItem } from '../../types/dropdown.js';

const mockItems: DropdownItem[] = [
	{ value: 'item1', label: 'Item 1' },
	{ value: 'item2', label: 'Item 2', icon: '📝' },
	{ value: 'separator', label: '', separator: true },
	{ value: 'item3', label: 'Item 3', shortcut: '⌘K' },
	{ value: 'delete', label: 'Delete', disabled: true }
];

describe('Dropdown Component', () => {
	it('should render with default props', () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		expect(trigger).toBeInTheDocument();
		expect(trigger).toHaveTextContent('Select option...');
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('should render with custom trigger text', () => {
		render(Dropdown, { 
			props: { 
				items: mockItems, 
				trigger: 'Custom Trigger'
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toHaveTextContent('Custom Trigger');
	});

	it('should open dropdown when trigger is clicked', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'true');
		expect(screen.getByRole('menu')).toBeInTheDocument();
	});

	it('should close dropdown when clicking outside', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		// Click outside
		await fireEvent.click(document.body);
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});

	it('should select item when clicked', async () => {
		let selectedValue = $state(null);
		const onselect = vi.fn((item) => {
			selectedValue = item.value;
		});

		render(Dropdown, { 
			props: { 
				items: mockItems,
				onselect,
				get value() { return selectedValue; },
				set value(v) { selectedValue = v; }
			} 
		});
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		const item = screen.getByText('Item 1');
		await fireEvent.click(item);
		await tick();
		
		expect(onselect).toHaveBeenCalledWith(mockItems[0]);
		expect(selectedValue).toBe('item1');
	});

	it('should show selected item in trigger', async () => {
		render(Dropdown, { 
			props: { 
				items: mockItems,
				value: 'item2'
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toHaveTextContent('Item 2');
	});

	it('should handle keyboard navigation', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		
		// Open with Enter key
		await fireEvent.keyDown(trigger, { key: 'Enter' });
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'true');
		
		// Close with Escape key
		await fireEvent.keyDown(trigger, { key: 'Escape' });
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('should open dropdown with Space key', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.keyDown(trigger, { key: ' ' });
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'true');
	});

	it('should open dropdown with ArrowDown key', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.keyDown(trigger, { key: 'ArrowDown' });
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'true');
	});

	it('should render disabled state correctly', () => {
		render(Dropdown, { 
			props: { 
				items: mockItems,
				disabled: true 
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toBeDisabled();
	});

	it('should not open when disabled', async () => {
		render(Dropdown, { 
			props: { 
				items: mockItems,
				disabled: true 
			} 
		});
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
		expect(screen.queryByRole('menu')).not.toBeInTheDocument();
	});

	it('should render item with icon', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(screen.getByText('📝')).toBeInTheDocument();
		expect(screen.getByText('Item 2')).toBeInTheDocument();
	});

	it('should render item with shortcut', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(screen.getByText('⌘K')).toBeInTheDocument();
	});

	it('should render separator', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(screen.getByRole('separator')).toBeInTheDocument();
	});

	it('should disable item interaction when item is disabled', async () => {
		const onselect = vi.fn();
		
		render(Dropdown, { 
			props: { 
				items: mockItems,
				onselect
			} 
		});
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		const disabledItem = screen.getByText('Delete');
		await fireEvent.click(disabledItem);
		await tick();
		
		expect(onselect).not.toHaveBeenCalled();
	});

	it('should close dropdown after selection by default', async () => {
		render(Dropdown, { props: { items: mockItems } });
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		const item = screen.getByText('Item 1');
		await fireEvent.click(item);
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'false');
	});

	it('should not close dropdown after selection when closeOnSelect is false', async () => {
		render(Dropdown, { 
			props: { 
				items: mockItems,
				closeOnSelect: false
			} 
		});
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		const item = screen.getByText('Item 1');
		await fireEvent.click(item);
		await tick();
		
		expect(trigger).toHaveAttribute('aria-expanded', 'true');
	});

	it('should apply custom classes', () => {
		render(Dropdown, { 
			props: { 
				items: mockItems,
				class: 'custom-class',
				triggerClass: 'custom-trigger-class'
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toHaveClass('custom-trigger-class');
	});

	it('should handle different variants', () => {
		const { rerender } = render(Dropdown, { 
			props: { 
				items: mockItems,
				variant: 'destructive'
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toHaveClass('border-destructive');
		
		rerender({ 
			items: mockItems,
			variant: 'outline' 
		});
		expect(trigger).toHaveClass('bg-transparent');
	});

	it('should handle different sizes', () => {
		const { rerender } = render(Dropdown, { 
			props: { 
				items: mockItems,
				size: 'sm'
			} 
		});
		
		const trigger = screen.getByRole('button');
		expect(trigger).toHaveClass('h-8');
		
		rerender({ 
			items: mockItems,
			size: 'lg' 
		});
		expect(trigger).toHaveClass('h-12');
	});

	it('should call onopen and onclose callbacks', async () => {
		const onopen = vi.fn();
		const onclose = vi.fn();
		
		render(Dropdown, { 
			props: { 
				items: mockItems,
				onopen,
				onclose
			} 
		});
		
		const trigger = screen.getByRole('button');
		await fireEvent.click(trigger);
		await tick();
		
		expect(onopen).toHaveBeenCalled();
		
		await fireEvent.click(trigger);
		await tick();
		
		expect(onclose).toHaveBeenCalled();
	});
});
