import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
	[
		'flex w-full rounded-md border px-3 py-2 text-sm transition-colors',
		'placeholder:text-muted-foreground',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'read-only:cursor-default read-only:bg-muted'
	],
	{
		variants: {
			variant: {
				default: [
					'border-input bg-background',
					'hover:border-primary/50',
					'focus:border-primary'
				],
				destructive: [
					'border-destructive bg-background',
					'hover:border-destructive/80',
					'focus:border-destructive',
					'focus-visible:ring-destructive/20'
				],
				filled: [
					'border-transparent bg-muted',
					'hover:bg-muted/80',
					'focus:bg-background focus:border-primary'
				]
			},
			size: {
				default: 'min-h-[80px] px-3 py-2',
				sm: 'min-h-[60px] px-2 py-1 text-xs',
				lg: 'min-h-[120px] px-4 py-3 text-base'
			},
			error: {
				true: 'border-destructive focus-visible:ring-destructive/20'
			},
			resize: {
				none: 'resize-none',
				both: 'resize',
				horizontal: 'resize-x',
				vertical: 'resize-y'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			resize: 'vertical'
		}
	}
);

export const textareaLabelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
	{
		variants: {
			error: {
				true: 'text-destructive'
			}
		}
	}
);

export const textareaHelperVariants = cva(
	'text-xs mt-1',
	{
		variants: {
			error: {
				true: 'text-destructive',
				false: 'text-muted-foreground'
			}
		}
	}
);
