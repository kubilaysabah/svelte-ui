import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { Button } from '../../../src/lib/components/button/index.js';

describe('Button Component', () => {
	it('renders with default props', () => {
		const { getByRole } = render(Button, {
			props: {
				children: () => 'Test Button'
			}
		});

		const button = getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Test Button');
	});

	it('applies variant classes correctly', () => {
		const { getByRole } = render(Button, {
			props: {
				variant: 'destructive',
				children: () => 'Delete'
			}
		});

		const button = getByRole('button');
		expect(button.className).toContain('bg-destructive');
	});

	it('handles disabled state', () => {
		const { getByRole } = render(Button, {
			props: {
				disabled: true,
				children: () => 'Disabled'
			}
		});

		const button = getByRole('button');
		expect(button).toBeDisabled();
	});

	it('applies custom classes', () => {
		const { getByRole } = render(Button, {
			props: {
				class: 'custom-class',
				children: () => 'Custom'
			}
		});

		const button = getByRole('button');
		expect(button.className).toContain('custom-class');
	});
});