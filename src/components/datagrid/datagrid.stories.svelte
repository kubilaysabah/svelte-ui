<script module lang="ts">
    import { defineMeta } from '@storybook/addon-svelte-csf';
    import DataGrid from "./datagrid.svelte";
    import type { ColumnProps, RowProps } from "./types";

    interface User {
        name: string;
        email: string;
    }

    const columns: ColumnProps<User>[] = [
        {
            label: "Name",
            key: "name",
        },
        {
            label: "Email",
            key: "email",
        },
    ];

    const rows: RowProps<User>[] = [
        {
            data: {
                name: "John Doe",
                email: "john.doe@example.com",
            },
        },
        {
            data: {
                name: "Jane Doe",
                email: "jane.doe@example.com",
            },
        },
    ];

    const { Story } = defineMeta({
		component: DataGrid,
		title: 'Components/DataGrid',
		tags: ['autodocs'],
		argTypes: {
            columns: {
                control: 'object',
                description: 'Columns for the DataGrid',
            },
            rows: {
                control: 'object',
                description: 'Rows for the DataGrid',
            },
		}
	});
</script>

<Story name="Default" args={{ columns, rows }} />

<Story name="With Custom Classes" args={{ columns, rows, class: 'border rounded-lg p-4' }} />

<Story name="Empty State" args={{ columns, rows: [] }} />