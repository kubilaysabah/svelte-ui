import { describe, it, expect } from 'vitest';
import { buttonVariants } from '../utils/button-variants.js';

describe('Button Variants', () => {
	it('generates correct default classes', () => {
		const classes = buttonVariants();

		expect(classes).toContain('inline-flex');
		expect(classes).toContain('bg-primary-500');
		expect(classes).toContain('h-10');
	});

	it('generates correct destructive variant', () => {
		const classes = buttonVariants({ variant: 'destructive' });

		expect(classes).toContain('bg-destructive-500');
	});

	it('generates correct outline variant', () => {
		const classes = buttonVariants({ variant: 'outline' });

		expect(classes).toContain('border');
		expect(classes).toContain('border-muted-300');
	});

	it('generates correct sizes', () => {
		const small = buttonVariants({ size: 'sm' });
		const large = buttonVariants({ size: 'lg' });
		const icon = buttonVariants({ size: 'icon' });

		expect(small).toContain('h-9');
		expect(large).toContain('h-11');
		expect(icon).toContain('w-10');
	});

	it('combines variant and size correctly', () => {
		const classes = buttonVariants({ variant: 'outline', size: 'lg' });

		expect(classes).toContain('border');
		expect(classes).toContain('h-11');
	});
});
