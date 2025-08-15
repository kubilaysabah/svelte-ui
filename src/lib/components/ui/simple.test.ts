import { describe, it, expect } from 'vitest';

describe('Simple Test', () => {
	it('should pass a basic test', () => {
		expect(1 + 1).toBe(2);
	});
	
	it('should test DOM manipulation', () => {
		const element = document.createElement('div');
		element.textContent = 'Hello, World!';
		expect(element.textContent).toBe('Hello, World!');
	});
});
