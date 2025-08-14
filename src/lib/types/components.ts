import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps extends HTMLButtonAttributes {
	variant?: ButtonVariant;
	size?: ButtonSize;
	asChild?: boolean;
	class?: string;
}

export type HTMLDivAttributes = HTMLAttributes<HTMLDivElement>;
export type HTMLSpanAttributes = HTMLAttributes<HTMLSpanElement>;

// Common component props
export interface BaseProps {
	class?: string;
}

// Event types for Svelte 5
export interface ComponentEvents {
	click?: (event: MouseEvent) => void;
	focus?: (event: FocusEvent) => void;
	blur?: (event: FocusEvent) => void;
	keydown?: (event: KeyboardEvent) => void;
	keyup?: (event: KeyboardEvent) => void;
}
