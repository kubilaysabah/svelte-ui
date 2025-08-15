import { cva } from 'class-variance-authority';

export const selectVariants = cva(
	[
		'flex w-full rounded-md border px-3 py-2 text-sm transition-colors',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'appearance-none bg-no-repeat bg-right bg-[length:16px_16px] pr-8'
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
				default: 'h-10 px-3 py-2',
				sm: 'h-8 px-2 py-1 text-xs',
				lg: 'h-12 px-4 py-3 text-base'
			},
			error: {
				true: 'border-destructive focus-visible:ring-destructive/20'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export const selectLabelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
	{
		variants: {
			error: {
				true: 'text-destructive'
			}
		}
	}
);

export const selectHelperVariants = cva(
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
