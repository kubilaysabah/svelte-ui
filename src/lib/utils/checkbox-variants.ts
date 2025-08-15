import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
	[
		'peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-50',
		'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
		'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground'
	],
	{
		variants: {
			size: {
				default: 'h-4 w-4',
				sm: 'h-3 w-3',
				lg: 'h-5 w-5'
			},
			error: {
				true: 'border-destructive data-[state=checked]:bg-destructive data-[state=indeterminate]:bg-destructive'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const checkboxLabelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
	{
		variants: {
			error: {
				true: 'text-destructive'
			}
		}
	}
);

export const checkboxDescriptionVariants = cva(
	'text-xs text-muted-foreground mt-1',
	{
		variants: {
			error: {
				true: 'text-destructive'
			}
		}
	}
);
