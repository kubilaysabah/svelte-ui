import type { Meta, StoryObj } from '@storybook/svelte';
import Select from '$lib/components/ui/select.svelte';

const meta = {
	title: 'Components/Select',
	component: Select,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A flexible select component with support for single and multiple selection, different variants, sizes, validation states, and comprehensive accessibility features.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'destructive', 'filled'],
			description: 'The visual variant of the select'
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg'],
			description: 'The size of the select'
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text for the select'
		},
		label: {
			control: { type: 'text' },
			description: 'Label text for the select'
		},
		helperText: {
			control: { type: 'text' },
			description: 'Helper text displayed below the select'
		},
		errorText: {
			control: { type: 'text' },
			description: 'Error text displayed below the select (overrides helperText)'
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the select is disabled'
		},
		required: {
			control: { type: 'boolean' },
			description: 'Whether the select is required'
		},
		multiple: {
			control: { type: 'boolean' },
			description: 'Whether multiple options can be selected'
		},
		error: {
			control: { type: 'boolean' },
			description: 'Whether the select is in an error state'
		}
	}
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
	{ value: 'us', label: 'United States' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'mx', label: 'Mexico' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' },
	{ value: 'jp', label: 'Japan', disabled: true },
	{ value: 'au', label: 'Australia' }
];

const colorOptions = [
	{ value: 'red', label: 'Red' },
	{ value: 'blue', label: 'Blue' },
	{ value: 'green', label: 'Green' },
	{ value: 'yellow', label: 'Yellow' },
	{ value: 'purple', label: 'Purple' }
];

export const Default: Story = {
	args: {
		options: countryOptions,
		placeholder: 'Select a country...'
	}
};

export const WithLabel: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Choose your country'
	}
};

export const WithHelperText: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select your country',
		helperText: 'This will be used for shipping calculations.'
	}
};

export const Required: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select your country',
		required: true,
		helperText: 'Country selection is required'
	}
};

export const Error: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select your country',
		errorText: 'Please select a valid country'
	}
};

export const Disabled: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Not available',
		disabled: true
	}
};

export const WithSelectedValue: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		value: 'us'
	}
};

export const Multiple: Story = {
	args: {
		options: colorOptions,
		label: 'Favorite Colors',
		multiple: true,
		value: ['red', 'blue']
	}
};

// Variants
export const DefaultVariant: Story = {
	args: {
		variant: 'default',
		options: countryOptions,
		label: 'Default Select',
		placeholder: 'Default styling'
	}
};

export const DestructiveVariant: Story = {
	args: {
		variant: 'destructive',
		options: countryOptions,
		label: 'Destructive Select',
		placeholder: 'Destructive styling'
	}
};

export const FilledVariant: Story = {
	args: {
		variant: 'filled',
		options: countryOptions,
		label: 'Filled Select',
		placeholder: 'Filled styling'
	}
};

// Sizes
export const SmallSize: Story = {
	args: {
		size: 'sm',
		options: countryOptions,
		label: 'Small Select',
		placeholder: 'Small size'
	}
};

export const DefaultSize: Story = {
	args: {
		size: 'default',
		options: countryOptions,
		label: 'Default Select',
		placeholder: 'Default size'
	}
};

export const LargeSize: Story = {
	args: {
		size: 'lg',
		options: countryOptions,
		label: 'Large Select',
		placeholder: 'Large size'
	}
};

// Option States
export const WithDisabledOptions: Story = {
	args: {
		options: [
			{ value: 'option1', label: 'Available Option 1' },
			{ value: 'option2', label: 'Available Option 2' },
			{ value: 'option3', label: 'Disabled Option', disabled: true },
			{ value: 'option4', label: 'Available Option 3' }
		],
		label: 'Select with Disabled Options',
		placeholder: 'Some options are disabled'
	}
};

// Complex Examples
export const FormExample: Story = {
	render: () => ({
		Component: Select,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Select 
		label="Country" 
		options={countryOptions}
		placeholder="Select your country"
		required
		helperText="Required for shipping"
	/>
	<Select 
		label="Preferred Language" 
		options={languageOptions}
		placeholder="Choose language"
		helperText="Used for communication preferences"
	/>
	<Select 
		label="Interests" 
		options={interestOptions}
		multiple
		placeholder="Select multiple interests"
		helperText="Hold Ctrl/Cmd to select multiple"
	/>
</div>
			`
			}
		}
	}
};

export const ValidationStates: Story = {
	render: () => ({
		Component: Select,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Select 
		label="Valid Selection" 
		options={countryOptions}
		value="us"
		helperText="Good choice!"
	/>
	<Select 
		label="Invalid Selection" 
		options={countryOptions}
		errorText="Please select a valid option"
	/>
	<Select 
		label="Required Field" 
		options={countryOptions}
		required 
		helperText="This field is required"
	/>
</div>
			`
			}
		}
	}
};
