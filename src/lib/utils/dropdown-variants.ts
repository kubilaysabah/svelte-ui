import { cva } from 'class-variance-authority';

export const dropdownTriggerVariants = cva(
	[
		'inline-flex items-center justify-between rounded-md border px-3 py-2 text-sm transition-colors',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'cursor-pointer select-none gap-2'
	],
	{
		variants: {
			variant: {
				default: [
					'border-input bg-background text-foreground',
					'hover:bg-accent hover:text-accent-foreground',
					'focus:border-primary'
				],
				destructive: [
					'border-destructive bg-background text-destructive',
					'hover:bg-destructive hover:text-destructive-foreground',
					'focus:border-destructive',
					'focus-visible:ring-destructive/20'
				],
				outline: [
					'border-input bg-transparent text-foreground',
					'hover:bg-accent hover:text-accent-foreground',
					'focus:border-primary'
				],
				ghost: [
					'border-transparent bg-transparent text-foreground',
					'hover:bg-accent hover:text-accent-foreground',
					'focus:bg-accent focus:text-accent-foreground'
				]
			},
			size: {
				default: 'h-10 px-3 py-2',
				sm: 'h-8 px-2 py-1 text-xs',
				lg: 'h-12 px-4 py-3 text-base'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export const dropdownMenuVariants = cva(
	[
		'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
		'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2',
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
	],
	{
		variants: {
			align: {
				start: 'left-0',
				center: 'left-1/2 -translate-x-1/2',
				end: 'right-0'
			},
			size: {
				default: 'min-w-[8rem]',
				sm: 'min-w-[6rem] text-xs',
				lg: 'min-w-[10rem] text-base'
			}
		},
		defaultVariants: {
			align: 'start',
			size: 'default'
		}
	}
);

export const dropdownItemVariants = cva(
	[
		'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors',
		'focus:bg-accent focus:text-accent-foreground',
		'data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
	],
	{
		variants: {
			destructive: {
				true: 'text-destructive focus:bg-destructive focus:text-destructive-foreground'
			}
		}
	}
);

export const dropdownSeparatorVariants = cva(
	'-mx-1 my-1 h-px bg-muted'
);

export const dropdownShortcutVariants = cva(
	'ml-auto text-xs tracking-widest opacity-60'
);
