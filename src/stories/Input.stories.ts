import type { Meta, StoryObj } from '@storybook/sveltekit';
import Input from '../lib/components/ui/input.svelte';

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A flexible input component with support for different variants, sizes, validation states, and comprehensive accessibility features.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'destructive', 'filled'],
			description: 'The visual variant of the input'
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg'],
			description: 'The size of the input'
		},
		type: {
			control: { type: 'select' },
			options: ['text', 'email', 'password', 'tel', 'url', 'search', 'number', 'date', 'time'],
			description: 'The input type'
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text for the input'
		},
		label: {
			control: { type: 'text' },
			description: 'Label text for the input'
		},
		helperText: {
			control: { type: 'text' },
			description: 'Helper text displayed below the input'
		},
		errorText: {
			control: { type: 'text' },
			description: 'Error text displayed below the input (overrides helperText)'
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the input is disabled'
		},
		readonly: {
			control: { type: 'boolean' },
			description: 'Whether the input is readonly'
		},
		required: {
			control: { type: 'boolean' },
			description: 'Whether the input is required'
		},
		error: {
			control: { type: 'boolean' },
			description: 'Whether the input is in an error state'
		}
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter text...'
	}
};

export const WithLabel: Story = {
	args: {
		label: 'Username',
		placeholder: 'Enter your username'
	}
};

export const WithHelperText: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		helperText: 'We will never share your email with anyone.'
	}
};

export const Required: Story = {
	args: {
		label: 'Password',
		type: 'password',
		placeholder: 'Enter password',
		required: true,
		helperText: 'Must be at least 8 characters long'
	}
};

export const Error: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		errorText: 'Please enter a valid email address',
		value: 'invalid-email'
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Field',
		placeholder: 'Cannot edit this',
		disabled: true,
		value: 'Disabled content'
	}
};

export const Readonly: Story = {
	args: {
		label: 'Readonly Field',
		readonly: true,
		value: 'This is readonly content'
	}
};

// Variants
export const DefaultVariant: Story = {
	args: {
		variant: 'default',
		label: 'Default Input',
		placeholder: 'Default styling'
	}
};

export const DestructiveVariant: Story = {
	args: {
		variant: 'destructive',
		label: 'Destructive Input',
		placeholder: 'Destructive styling'
	}
};

export const FilledVariant: Story = {
	args: {
		variant: 'filled',
		label: 'Filled Input',
		placeholder: 'Filled styling'
	}
};

// Sizes
export const SmallSize: Story = {
	args: {
		size: 'sm',
		label: 'Small Input',
		placeholder: 'Small size'
	}
};

export const DefaultSize: Story = {
	args: {
		size: 'default',
		label: 'Default Input',
		placeholder: 'Default size'
	}
};

export const LargeSize: Story = {
	args: {
		size: 'lg',
		label: 'Large Input',
		placeholder: 'Large size'
	}
};

// Input Types
export const EmailType: Story = {
	args: {
		type: 'email',
		label: 'Email Address',
		placeholder: 'example@domain.com'
	}
};

export const PasswordType: Story = {
	args: {
		type: 'password',
		label: 'Password',
		placeholder: 'Enter password'
	}
};

export const NumberType: Story = {
	args: {
		type: 'number',
		label: 'Age',
		placeholder: 'Enter your age',
		min: 0,
		max: 120
	}
};

export const SearchType: Story = {
	args: {
		type: 'search',
		label: 'Search',
		placeholder: 'Search for anything...'
	}
};

export const DateType: Story = {
	args: {
		type: 'date',
		label: 'Birth Date'
	}
};

// Complex Examples
export const FormExample: Story = {
	render: () => ({
		Component: Input,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Input 
		label="Full Name" 
		placeholder="John Doe" 
		required 
	/>
	<Input 
		type="email" 
		label="Email Address" 
		placeholder="john@example.com" 
		required 
		helperText="We'll use this to contact you"
	/>
	<Input 
		type="password" 
		label="Password" 
		placeholder="Enter password" 
		required 
		helperText="Must be at least 8 characters"
	/>
	<Input 
		type="tel" 
		label="Phone Number" 
		placeholder="+1 (555) 123-4567"
	/>
</div>
			`
			}
		}
	}
};

export const ValidationStates: Story = {
	render: () => ({
		Component: Input,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Input 
		label="Valid Input" 
		value="valid@email.com" 
		helperText="This looks good!"
	/>
	<Input 
		label="Invalid Input" 
		value="invalid-email" 
		errorText="Please enter a valid email address"
	/>
	<Input 
		label="Required Field" 
		required 
		helperText="This field is required"
	/>
</div>
			`
			}
		}
	}
};
