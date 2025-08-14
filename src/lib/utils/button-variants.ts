import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
				destructive: 'bg-destructive-500 text-white hover:bg-destructive-600 active:bg-destructive-700',
				outline: 'border border-muted-300 bg-white text-muted-900 hover:bg-muted-50 hover:text-muted-950',
				secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
				ghost: 'text-muted-700 hover:bg-muted-100 hover:text-muted-900',
				link: 'text-primary-600 underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
