import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with clsx and merges Tailwind classes with tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Focus ring utility for interactive elements
 */
export const focusRing = [
	// base
	'outline outline-0 focus-visible:outline-2',
	// outline color
	'outline-offset-2 outline-blue-500',
	// transition
	'transition-colors'
].join(' ');

/**
 * Focus ring for input elements
 */
export const focusInput = [
	'focus:outline-none',
	'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
	'focus:border-primary-500'
].join(' ');
