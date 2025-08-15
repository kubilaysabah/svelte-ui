import type { Meta, StoryObj } from '@storybook/svelte';
import Checkbox from '$lib/components/ui/checkbox.svelte';

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A flexible checkbox component with support for indeterminate state, different sizes, and comprehensive accessibility features.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg'],
			description: 'The size of the checkbox'
		},
		checked: {
			control: { type: 'boolean' },
			description: 'Whether the checkbox is checked'
		},
		indeterminate: {
			control: { type: 'boolean' },
			description: 'Whether the checkbox is in indeterminate state'
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the checkbox is disabled'
		},
		required: {
			control: { type: 'boolean' },
			description: 'Whether the checkbox is required'
		},
		error: {
			control: { type: 'boolean' },
			description: 'Whether the checkbox is in an error state'
		},
		label: {
			control: { type: 'text' },
			description: 'Label text for the checkbox'
		},
		description: {
			control: { type: 'text' },
			description: 'Description text displayed below the checkbox'
		},
		errorText: {
			control: { type: 'text' },
			description: 'Error text displayed below the checkbox (overrides description)'
		}
	}
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Accept terms and conditions'
	}
};

export const WithDescription: Story = {
	args: {
		label: 'Send me marketing emails',
		description: 'Get updates about new products and features.'
	}
};

export const Required: Story = {
	args: {
		label: 'I agree to the terms of service',
		required: true,
		description: 'You must accept the terms to continue.'
	}
};

export const Error: Story = {
	args: {
		label: 'Required checkbox',
		errorText: 'You must check this box to continue',
		error: true
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled option',
		disabled: true,
		description: 'This option is not available'
	}
};

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled checked',
		checked: true,
		disabled: true
	}
};

export const Indeterminate: Story = {
	args: {
		label: 'Select all',
		indeterminate: true,
		description: 'Some items are selected'
	}
};

// Sizes
export const SmallSize: Story = {
	args: {
		size: 'sm',
		label: 'Small checkbox',
		description: 'This is a small checkbox'
	}
};

export const DefaultSize: Story = {
	args: {
		size: 'default',
		label: 'Default checkbox',
		description: 'This is a default size checkbox'
	}
};

export const LargeSize: Story = {
	args: {
		size: 'lg',
		label: 'Large checkbox',
		description: 'This is a large checkbox'
	}
};

// Complex Examples
export const FormExample: Story = {
	render: () => ({
		Component: Checkbox,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Checkbox 
		label="Email notifications" 
		description="Receive notifications via email"
	/>
	<Checkbox 
		label="SMS notifications" 
		description="Receive notifications via SMS"
		checked
	/>
	<Checkbox 
		label="Push notifications" 
		description="Receive push notifications in your browser"
	/>
	<Checkbox 
		label="Newsletter subscription" 
		description="Subscribe to our weekly newsletter"
		required
	/>
</div>
			`
			}
		}
	}
};

export const ValidationStates: Story = {
	render: () => ({
		Component: Checkbox,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Checkbox 
		label="Valid checkbox" 
		checked
		description="This checkbox is valid"
	/>
	<Checkbox 
		label="Required checkbox" 
		required
		description="This checkbox is required"
	/>
	<Checkbox 
		label="Error checkbox" 
		errorText="This field is required"
	/>
</div>
			`
			}
		}
	}
};
