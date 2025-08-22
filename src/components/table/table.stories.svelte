<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Table } from './index';
	import type { TableProps, TableDataResponse, TableAction, TableSelection } from './types';

	// Mock data for stories
	interface User extends Record<string, unknown> {
		id: number;
		name: string;
		email: string;
		role: string;
		status: 'active' | 'inactive';
		createdAt: string;
		department: {
			name: string;
			code: string;
		};
	}

	const mockUsers: User[] = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john.doe@example.com',
			role: 'Admin',
			status: 'active',
			createdAt: '2024-01-15',
			department: { name: 'Engineering', code: 'ENG' }
		},
		{
			id: 2,
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			role: 'User',
			status: 'active',
			createdAt: '2024-02-20',
			department: { name: 'Marketing', code: 'MKT' }
		},
		{
			id: 3,
			name: 'Bob Johnson',
			email: 'bob.johnson@example.com',
			role: 'Editor',
			status: 'inactive',
			createdAt: '2024-03-10',
			department: { name: 'Sales', code: 'SAL' }
		},
		{
			id: 4,
			name: 'Alice Brown',
			email: 'alice.brown@example.com',
			role: 'User',
			status: 'active',
			createdAt: '2024-04-05',
			department: { name: 'Engineering', code: 'ENG' }
		},
		{
			id: 5,
			name: 'Charlie Wilson',
			email: 'charlie.wilson@example.com',
			role: 'Admin',
			status: 'active',
			createdAt: '2024-05-12',
			department: { name: 'HR', code: 'HR' }
		}
	];

	// Mock data fetcher function
	async function mockDataFetcher(
		page: number,
		limit: number,
		query: Record<string, unknown>
	): Promise<TableDataResponse<User>> {
		// Simulate API delay
		await new Promise(resolve => setTimeout(resolve, 500));
		
		let filteredData = [...mockUsers];
		
		// Apply search filter
		if (query.LIKE && Array.isArray(query.LIKE)) {
			const [searchFields, searchTerms] = query.LIKE as [string[], string[]];
			filteredData = filteredData.filter(user => 
				searchFields.some((field: string) => 
					searchTerms.some((term: string) => 
						user[field as keyof User]?.toString().toLowerCase().includes(term.toLowerCase())
					)
				)
			);
		}
		
		// Apply other filters
		if (query.role) {
			filteredData = filteredData.filter(user => user.role === query.role);
		}
		
		if (query.status) {
			filteredData = filteredData.filter(user => user.status === query.status);
		}
		
		// Calculate pagination
		const total = filteredData.length;
		const pages = Math.ceil(total / limit);
		const start = (page - 1) * limit;
		const end = start + limit;
		const data = filteredData.slice(start, end);
		
		return {
			total,
			page,
			pages,
			limit,
			data
		};
	}

	// Common props for stories - using type assertion to work with Storybook
	const commonProps = {
		data: mockDataFetcher,
		headers: {
			id: 'ID',
			name: 'Name',
			email: 'Email',
			role: 'Role',
			status: 'Status',
			'department:name': 'Department',
			createdAt: 'Created At'
		},
		search: ['name', 'email'],
		emptyMessage: 'No users found'
	} as any;

	// Type-safe actions for User interface
	const userActions = {
		edit: {
			tooltip: 'Edit user',
			action: (user: any) => alert(`Editing user: ${user.name}`)
		},
		delete: {
			tooltip: 'Delete user',
			action: (user: any) => alert(`Deleting user: ${user.name}`),
			class: 'text-red-600 hover:text-red-800'
		},
		view: {
			tooltip: 'View details',
			action: (user: any) => alert(`Viewing user: ${user.name}`)
		}
	} as any;

	// Type-safe selection for User interface
	const userSelection = {
		key: 'id',
		selected: [],
		onSelect: (user: any, isSelectAll: boolean) => {
			console.log('Selection changed:', user, isSelectAll);
			return true;
		}
	} as any;

	const { Story } = defineMeta({
		component: Table,
		title: 'Components/Table',
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: 'select',
				options: ['small', 'medium', 'large']
			},
			variant: {
				control: 'select',
				options: ['default', 'striped', 'bordered']
			},
			breakpoint: {
				control: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']
			},
			title: {
				control: 'text',
				description: 'Table title'
			},
			subtitle: {
				control: 'text',
				description: 'Table subtitle'
			},
			description: {
				control: 'text',
				description: 'Table description'
			},
			emptyMessage: {
				control: 'text',
				description: 'Message shown when no data is available'
			}
		}
	});
</script>

<!-- Default Story -->
<Story name="Default" args={{
	...commonProps,
	title: 'Users Table',
	description: 'A simple table displaying user information'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- With Actions -->
<Story name="With Actions" args={{
	...commonProps,
	title: 'Users with Actions',
	description: 'Table with row actions for edit and delete operations',
	actions: userActions
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- With Selection -->
<Story name="With Selection" args={{
	...commonProps,
	title: 'Selectable Users',
	description: 'Table with multi-select functionality',
	selection: userSelection
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- With Filters -->
<Story name="With Filters" args={{
	...commonProps,
	title: 'Filtered Users',
	description: 'Table with role and status filters',
	filters: {
		role: {
			initial: [
				{ value: '', name: 'All Roles' },
				{ value: 'Admin', name: 'Admin' },
				{ value: 'User', name: 'User' },
				{ value: 'Editor', name: 'Editor' }
			]
		},
		status: {
			initial: [
				{ value: '', name: 'All Status' },
				{ value: 'active', name: 'Active' },
				{ value: 'inactive', name: 'Inactive' }
			]
		}
	}
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Striped Variant -->
<Story name="Striped" args={{
	...commonProps,
	title: 'Striped Table',
	variant: 'striped',
	description: 'Table with alternating row colors'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Bordered Variant -->
<Story name="Bordered" args={{
	...commonProps,
	title: 'Bordered Table',
	variant: 'bordered',
	description: 'Table with borders around cells'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Small Size -->
<Story name="Small Size" args={{
	...commonProps,
	title: 'Compact Users',
	size: 'small',
	description: 'Compact table with smaller text and padding'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Large Size -->
<Story name="Large Size" args={{
	...commonProps,
	title: 'Large Users Table',
	size: 'large',
	description: 'Spacious table with larger text and padding'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Complete Example -->
<Story name="Complete Example" args={{
	...commonProps,
	title: 'User Management',
	subtitle: 'Complete user administration interface',
	description: 'Full-featured table with all capabilities enabled',
	variant: 'striped',
	size: 'medium',
	actions: {
		edit: {
			tooltip: 'Edit user',
			action: (user: any) => alert(`Editing user: ${user.name}`)
		},
		delete: {
			tooltip: 'Delete user',
			action: (user: any) => alert(`Deleting user: ${user.name}`),
			class: 'text-red-600 hover:text-red-800',
			test: (user: any) => user.role !== 'Admin' // Hide delete for admins
		}
	} as any,
	selection: {
		key: 'id',
		selected: [],
		onSelect: (user: any, isSelectAll: boolean) => {
			console.log('Selection changed:', user);
			return true;
		}
	} as any,
	filters: {
		role: {
			initial: [
				{ value: '', name: 'All Roles' },
				{ value: 'Admin', name: 'Admin' },
				{ value: 'User', name: 'User' },
				{ value: 'Editor', name: 'Editor' }
			]
		},
		status: {
			initial: [
				{ value: '', name: 'All Status' },
				{ value: 'active', name: 'Active' },
				{ value: 'inactive', name: 'Inactive' }
			]
		}
	}
}}>
	{#snippet template(args)}
		<Table {...args}>
			{#snippet buttons()}
				<button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
					Add User
				</button>
				<button class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
					Export
				</button>
			{/snippet}
			
			{#snippet bottom()}
				<div class="p-4 bg-gray-50 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
					<p class="text-sm text-gray-600 dark:text-gray-400">
						💡 Tip: Use the search box to find users quickly, or apply filters to narrow down the results.
					</p>
				</div>
			{/snippet}
		</Table>
	{/snippet}
</Story>

<!-- Empty State -->
<Story name="Empty State" args={{
	data: async () => ({ total: 0, page: 1, pages: 0, limit: 10, data: [] }),
	headers: commonProps.headers,
	title: 'Empty Table',
	description: 'Table with no data to display',
	emptyMessage: 'No users found. Try adjusting your search or filters.'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Loading State -->
<Story name="Loading State" args={{
	data: async () => {
		await new Promise(resolve => setTimeout(resolve, 3000)); // Long delay to show loading
		return { total: 0, page: 1, pages: 0, limit: 10, data: [] };
	},
	headers: commonProps.headers,
	title: 'Loading Table',
	description: 'Table in loading state'
}}>
	{#snippet template(args)}
		<Table {...args} />
	{/snippet}
</Story>

<!-- Mobile Responsive -->
<Story name="Mobile Responsive" args={{
	...commonProps,
	title: 'Mobile Responsive',
	description: 'Table optimized for mobile devices',
	breakpoint: 'md'
}}>
	{#snippet template(args)}
		<div class="max-w-md mx-auto">
			<Table {...args} />
		</div>
	{/snippet}
</Story>