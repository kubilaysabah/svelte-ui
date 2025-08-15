import type { Meta, StoryObj } from '@storybook/svelte';
import Textarea from '$lib/components/ui/textarea.svelte';

const meta = {
	title: 'Components/Textarea',
	component: Textarea,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: 'A flexible textarea component with support for different variants, sizes, resize options, validation states, and comprehensive accessibility features.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'destructive', 'filled'],
			description: 'The visual variant of the textarea'
		},
		size: {
			control: { type: 'select' },
			options: ['default', 'sm', 'lg'],
			description: 'The size of the textarea'
		},
		resize: {
			control: { type: 'select' },
			options: ['none', 'both', 'horizontal', 'vertical'],
			description: 'How the textarea can be resized'
		},
		placeholder: {
			control: { type: 'text' },
			description: 'Placeholder text for the textarea'
		},
		label: {
			control: { type: 'text' },
			description: 'Label text for the textarea'
		},
		helperText: {
			control: { type: 'text' },
			description: 'Helper text displayed below the textarea'
		},
		errorText: {
			control: { type: 'text' },
			description: 'Error text displayed below the textarea (overrides helperText)'
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the textarea is disabled'
		},
		readonly: {
			control: { type: 'boolean' },
			description: 'Whether the textarea is readonly'
		},
		required: {
			control: { type: 'boolean' },
			description: 'Whether the textarea is required'
		},
		error: {
			control: { type: 'boolean' },
			description: 'Whether the textarea is in an error state'
		},
		rows: {
			control: { type: 'number' },
			description: 'Number of visible text lines'
		}
	}
} satisfies Meta<Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Enter your message...'
	}
};

export const WithLabel: Story = {
	args: {
		label: 'Message',
		placeholder: 'Type your message here...'
	}
};

export const WithHelperText: Story = {
	args: {
		label: 'Feedback',
		placeholder: 'Share your thoughts...',
		helperText: 'Please provide detailed feedback to help us improve.'
	}
};

export const Required: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter description...',
		required: true,
		helperText: 'This field is required'
	}
};

export const Error: Story = {
	args: {
		label: 'Comments',
		placeholder: 'Enter comments...',
		errorText: 'Comments must be at least 10 characters long',
		value: 'Too short'
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Field',
		placeholder: 'Cannot edit this',
		disabled: true,
		value: 'This content cannot be edited'
	}
};

export const Readonly: Story = {
	args: {
		label: 'Readonly Field',
		readonly: true,
		value: 'This is readonly content that cannot be modified but can be selected and copied.'
	}
};

// Variants
export const DefaultVariant: Story = {
	args: {
		variant: 'default',
		label: 'Default Textarea',
		placeholder: 'Default styling'
	}
};

export const DestructiveVariant: Story = {
	args: {
		variant: 'destructive',
		label: 'Destructive Textarea',
		placeholder: 'Destructive styling'
	}
};

export const FilledVariant: Story = {
	args: {
		variant: 'filled',
		label: 'Filled Textarea',
		placeholder: 'Filled styling'
	}
};

// Sizes
export const SmallSize: Story = {
	args: {
		size: 'sm',
		label: 'Small Textarea',
		placeholder: 'Small size'
	}
};

export const DefaultSize: Story = {
	args: {
		size: 'default',
		label: 'Default Textarea',
		placeholder: 'Default size'
	}
};

export const LargeSize: Story = {
	args: {
		size: 'lg',
		label: 'Large Textarea',
		placeholder: 'Large size'
	}
};

// Resize Options
export const NoResize: Story = {
	args: {
		resize: 'none',
		label: 'Non-resizable',
		placeholder: 'This textarea cannot be resized',
		rows: 6
	}
};

export const VerticalResize: Story = {
	args: {
		resize: 'vertical',
		label: 'Vertical Resize',
		placeholder: 'This textarea can be resized vertically',
		rows: 4
	}
};

export const HorizontalResize: Story = {
	args: {
		resize: 'horizontal',
		label: 'Horizontal Resize',
		placeholder: 'This textarea can be resized horizontally',
		rows: 4
	}
};

export const BothResize: Story = {
	args: {
		resize: 'both',
		label: 'Both Directions',
		placeholder: 'This textarea can be resized in both directions',
		rows: 4
	}
};

// Custom Rows
export const CustomRows: Story = {
	args: {
		label: 'Large Text Area',
		placeholder: 'This textarea has 8 rows...',
		rows: 8
	}
};

// Complex Examples
export const FormExample: Story = {
	render: () => ({
		Component: Textarea,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Textarea 
		label="Biography" 
		placeholder="Tell us about yourself..." 
		helperText="Maximum 500 characters"
		maxlength={500}
	/>
	<Textarea 
		label="Additional Comments" 
		placeholder="Any additional information..." 
		rows={6}
		resize="vertical"
	/>
	<Textarea 
		label="Required Feedback" 
		placeholder="Your feedback is important to us..." 
		required 
		helperText="Please provide detailed feedback"
	/>
</div>
			`
			}
		}
	}
};

export const ValidationStates: Story = {
	render: () => ({
		Component: Textarea,
		props: {}
	}),
	parameters: {
		docs: {
			source: {
				code: `
<div class="space-y-4 max-w-md">
	<Textarea 
		label="Valid Input" 
		value="This is a valid message with sufficient content."
		helperText="This looks good!"
	/>
	<Textarea 
		label="Invalid Input" 
		value="Too short"
		errorText="Message must be at least 20 characters long"
	/>
	<Textarea 
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
