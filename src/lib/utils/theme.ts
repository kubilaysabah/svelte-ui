export type Theme = 'light' | 'dark' | 'system';

// Cross-platform browser detection
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
	if (!isBrowser) return 'system';
	
	const stored = localStorage.getItem('theme') as Theme;
	if (stored && ['light', 'dark', 'system'].includes(stored)) {
		return stored;
	}
	
	return 'system';
}

/**
 * Set theme and update DOM
 */
export function setTheme(theme: Theme) {
	if (!isBrowser) return;
	
	const html = document.documentElement;
	
	// Remove existing theme classes
	html.classList.remove('light', 'dark');
	
	if (theme === 'system') {
		localStorage.removeItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		html.classList.add(systemTheme);
	} else {
		localStorage.setItem('theme', theme);
		html.classList.add(theme);
	}
}

/**
 * Check if current effective theme is dark
 */
export function isDarkMode(): boolean {
	if (!isBrowser) return false;
	
	const theme = getTheme();
	if (theme === 'dark') return true;
	if (theme === 'light') return false;
	
	// System theme
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme() {
	const current = isDarkMode();
	setTheme(current ? 'light' : 'dark');
}

/**
 * Initialize theme on page load
 */
export function initTheme() {
	if (!isBrowser) return;
	
	const theme = getTheme();
	setTheme(theme);
	
	// Listen for system theme changes when using system theme
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		if (getTheme() === 'system') {
			setTheme('system');
		}
	});
}
