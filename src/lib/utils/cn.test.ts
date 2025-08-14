import { describe, it, expect } from 'vitest';
import { cn } from './cn.js';

describe('cn utility', () => {
	it('combines classes correctly', () => {
		const result = cn('class1', 'class2');
		expect(result).toBe('class1 class2');
	});

	it('handles conditional classes', () => {
		const result = cn('base', true && 'conditional', false && 'hidden');
		expect(result).toBe('base conditional');
	});

	it('merges tailwind classes correctly', () => {
		const result = cn('p-4', 'p-2');
		expect(result).toBe('p-2');
	});

	it('handles undefined and null values', () => {
		const result = cn('base', undefined, null, 'end');
		expect(result).toBe('base end');
	});

	it('handles arrays of classes', () => {
		const result = cn(['class1', 'class2'], 'class3');
		expect(result).toBe('class1 class2 class3');
	});
});
