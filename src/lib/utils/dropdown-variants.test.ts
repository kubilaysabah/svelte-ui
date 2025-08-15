import { describe, it, expect } from 'vitest';
import { 
	dropdownTriggerVariants, 
	dropdownMenuVariants, 
	dropdownItemVariants,
	dropdownSeparatorVariants,
	dropdownShortcutVariants
} from './dropdown-variants.js';

describe('dropdownTriggerVariants', () => {
	it('should generate correct base classes', () => {
		const result = dropdownTriggerVariants();
		expect(result).toContain('inline-flex');
		expect(result).toContain('items-center');
		expect(result).toContain('justify-between');
		expect(result).toContain('rounded-md');
		expect(result).toContain('border');
		expect(result).toContain('px-3');
		expect(result).toContain('py-2');
		expect(result).toContain('text-sm');
		expect(result).toContain('transition-colors');
		expect(result).toContain('cursor-pointer');
		expect(result).toContain('select-none');
		expect(result).toContain('gap-2');
	});

	it('should apply default variant correctly', () => {
		const result = dropdownTriggerVariants({ variant: 'default' });
		expect(result).toContain('border-input');
		expect(result).toContain('bg-background');
		expect(result).toContain('text-foreground');
	});

	it('should apply destructive variant correctly', () => {
		const result = dropdownTriggerVariants({ variant: 'destructive' });
		expect(result).toContain('border-destructive');
		expect(result).toContain('bg-background');
		expect(result).toContain('text-destructive');
	});

	it('should apply outline variant correctly', () => {
		const result = dropdownTriggerVariants({ variant: 'outline' });
		expect(result).toContain('border-input');
		expect(result).toContain('bg-transparent');
		expect(result).toContain('text-foreground');
	});

	it('should apply ghost variant correctly', () => {
		const result = dropdownTriggerVariants({ variant: 'ghost' });
		expect(result).toContain('border-transparent');
		expect(result).toContain('bg-transparent');
		expect(result).toContain('text-foreground');
	});

	it('should apply small size correctly', () => {
		const result = dropdownTriggerVariants({ size: 'sm' });
		expect(result).toContain('h-8');
		expect(result).toContain('px-2');
		expect(result).toContain('py-1');
		expect(result).toContain('text-xs');
	});

	it('should apply large size correctly', () => {
		const result = dropdownTriggerVariants({ size: 'lg' });
		expect(result).toContain('h-12');
		expect(result).toContain('px-4');
		expect(result).toContain('py-3');
		expect(result).toContain('text-base');
	});

	it('should apply default size correctly', () => {
		const result = dropdownTriggerVariants({ size: 'default' });
		expect(result).toContain('h-10');
		expect(result).toContain('px-3');
		expect(result).toContain('py-2');
	});
});

describe('dropdownMenuVariants', () => {
	it('should generate correct base classes', () => {
		const result = dropdownMenuVariants();
		expect(result).toContain('absolute');
		expect(result).toContain('z-50');
		expect(result).toContain('min-w-[8rem]');
		expect(result).toContain('overflow-hidden');
		expect(result).toContain('rounded-md');
		expect(result).toContain('border');
		expect(result).toContain('bg-popover');
		expect(result).toContain('p-1');
		expect(result).toContain('text-popover-foreground');
		expect(result).toContain('shadow-md');
	});

	it('should apply start alignment correctly', () => {
		const result = dropdownMenuVariants({ align: 'start' });
		expect(result).toContain('left-0');
	});

	it('should apply center alignment correctly', () => {
		const result = dropdownMenuVariants({ align: 'center' });
		expect(result).toContain('left-1/2');
		expect(result).toContain('-translate-x-1/2');
	});

	it('should apply end alignment correctly', () => {
		const result = dropdownMenuVariants({ align: 'end' });
		expect(result).toContain('right-0');
	});

	it('should apply small size correctly', () => {
		const result = dropdownMenuVariants({ size: 'sm' });
		expect(result).toContain('min-w-[6rem]');
		expect(result).toContain('text-xs');
	});

	it('should apply large size correctly', () => {
		const result = dropdownMenuVariants({ size: 'lg' });
		expect(result).toContain('min-w-[10rem]');
		expect(result).toContain('text-base');
	});
});

describe('dropdownItemVariants', () => {
	it('should generate correct base classes', () => {
		const result = dropdownItemVariants();
		expect(result).toContain('relative');
		expect(result).toContain('flex');
		expect(result).toContain('cursor-pointer');
		expect(result).toContain('select-none');
		expect(result).toContain('items-center');
		expect(result).toContain('rounded-sm');
		expect(result).toContain('px-2');
		expect(result).toContain('py-1.5');
		expect(result).toContain('text-sm');
		expect(result).toContain('outline-none');
		expect(result).toContain('transition-colors');
	});

	it('should apply destructive variant correctly', () => {
		const result = dropdownItemVariants({ destructive: true });
		expect(result).toContain('text-destructive');
		expect(result).toContain('focus:bg-destructive');
		expect(result).toContain('focus:text-destructive-foreground');
	});
});

describe('dropdownSeparatorVariants', () => {
	it('should generate correct classes', () => {
		const result = dropdownSeparatorVariants();
		expect(result).toContain('-mx-1');
		expect(result).toContain('my-1');
		expect(result).toContain('h-px');
		expect(result).toContain('bg-muted');
	});
});

describe('dropdownShortcutVariants', () => {
	it('should generate correct classes', () => {
		const result = dropdownShortcutVariants();
		expect(result).toContain('ml-auto');
		expect(result).toContain('text-xs');
		expect(result).toContain('tracking-widest');
		expect(result).toContain('opacity-60');
	});
});
