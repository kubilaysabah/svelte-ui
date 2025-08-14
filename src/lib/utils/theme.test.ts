import { describe, it, expect, beforeEach } from 'vitest';
import { getTheme, setTheme, isDarkMode, toggleTheme } from './theme.js';

// Mock browser environment
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: (query: string) => ({
		matches: query === '(prefers-color-scheme: dark)',
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => {}
	})
});

// Mock localStorage
const localStorageMock = {
	getItem: (key: string) => localStorageMock.store[key] || null,
	setItem: (key: string, value: string) => {
		localStorageMock.store[key] = value;
	},
	removeItem: (key: string) => {
		delete localStorageMock.store[key];
	},
	store: {} as Record<string, string>
};

Object.defineProperty(window, 'localStorage', {
	value: localStorageMock
});

// Mock document
Object.defineProperty(document, 'documentElement', {
	value: {
		classList: {
			add: () => {},
			remove: () => {},
			contains: () => false
		}
	}
});

describe('Theme Utils', () => {
	beforeEach(() => {
		localStorageMock.store = {};
	});

	it('returns system theme by default', () => {
		expect(getTheme()).toBe('system');
	});

	it('returns stored theme when available', () => {
		localStorageMock.setItem('theme', 'dark');
		expect(getTheme()).toBe('dark');
	});

	it('sets theme correctly', () => {
		setTheme('dark');
		expect(localStorageMock.getItem('theme')).toBe('dark');
	});

	it('removes theme from storage when set to system', () => {
		localStorageMock.setItem('theme', 'dark');
		setTheme('system');
		expect(localStorageMock.getItem('theme')).toBeNull();
	});

	it('detects dark mode correctly', () => {
		// Test with explicit dark theme
		localStorageMock.setItem('theme', 'dark');
		expect(isDarkMode()).toBe(true);

		// Test with explicit light theme
		localStorageMock.setItem('theme', 'light');
		expect(isDarkMode()).toBe(false);
	});

	it('toggles theme correctly', () => {
		// Start with light
		localStorageMock.setItem('theme', 'light');
		toggleTheme();
		expect(localStorageMock.getItem('theme')).toBe('dark');

		// Toggle back to light
		toggleTheme();
		expect(localStorageMock.getItem('theme')).toBe('light');
	});
});
