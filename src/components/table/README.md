# Table Component

A comprehensive, responsive data table component built with Svelte 5, TypeScript, and Tailwind CSS. Features pagination, filtering, search, selection, and customizable actions.

## Features

- **🎯 Type-Safe**: Full TypeScript support with comprehensive type definitions
- **📱 Responsive**: Mobile-first design with configurable breakpoints
- **🔍 Search & Filter**: Built-in search and dynamic filtering capabilities
- **✅ Selection**: Single and multi-select functionality with callbacks
- **⚡ Actions**: Customizable row actions with conditional visibility
- **📄 Pagination**: Built-in pagination with customizable page sizes
- **🎨 Themeable**: Multiple variants and sizes with Tailwind CSS
- **♿ Accessible**: Full keyboard navigation and screen reader support
- **🔄 Async Data**: Support for async data fetching with loading states

## Installation

```bash
npm install @your-org/svelte-ui
```

## Basic Usage

```svelte
<script lang="ts">
  import { Table } from '@your-org/svelte-ui';
  
  interface User {
    id: number;
    name: string;
    email: string;
    role: string;
  }
  
  async function fetchUsers(page: number, limit: number, query: Record<string, any>) {
    const response = await fetch(`/api/users?page=${page}&limit=${limit}`);
    return response.json();
  }
  
  const headers = {
    id: 'ID',
    name: 'Name', 
    email: 'Email',
    role: 'Role'
  };
</script>

<Table 
  {headers}
  data={fetchUsers}
  title="Users"
  search={['name', 'email']}
/>
```

## Advanced Usage

```svelte
<script lang="ts">
  import { Table } from '@your-org/svelte-ui';
  
  const headers = {
    id: 'ID',
    name: 'Full Name',
    email: 'Email Address',
    'department:name': 'Department', // Nested property access
    status: 'Status'
  };
  
  const actions = {
    edit: {
      tooltip: 'Edit user',
      action: (user) => editUser(user.id),
      test: (user) => user.role !== 'admin' // Conditional visibility
    },
    delete: {
      tooltip: 'Delete user',
      action: (user) => deleteUser(user.id),
      class: 'text-red-600 hover:text-red-800'
    }
  };
  
  const filters = {
    role: {
      initial: [{ value: '', name: 'All Roles' }],
      fetch: async () => {
        const response = await fetch('/api/roles');
        return response.json();
      }
    }
  };
  
  const selection = {
    key: 'id',
    selected: [],
    onSelect: (user, isSelectAll) => {
      console.log('Selection changed:', user);
      return true; // Allow selection
    }
  };
</script>

<Table 
  {headers}
  {actions}
  {filters}
  {selection}
  data={fetchUsers}
  title="User Management"
  subtitle="Manage system users"
  description="View, edit, and manage all users in the system"
  search={['name', 'email']}
  size="medium"
  variant="striped"
  breakpoint="lg"
>
  {#snippet buttons()}
    <button class="btn btn-primary">Add User</button>
  {/snippet}
  
  {#snippet bottom()}
    <div class="p-4 bg-gray-50">
      <p class="text-sm text-gray-600">Additional information</p>
    </div>
  {/snippet}
</Table>
```

## Props

### Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headers` | `TableHeaders` | **Required** | Column configuration object |
| `data` | `TableDataFetcher` | **Required** | Async function to fetch table data |
| `title` | `string` | `''` | Table title |
| `subtitle` | `string` | `''` | Table subtitle |
| `description` | `string` | `''` | Table description |

### Styling Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Table size variant |
| `variant` | `'default' \| 'striped' \| 'bordered'` | `'default'` | Visual style variant |
| `breakpoint` | `TableBreakpoint` | `'6xl'` | Responsive breakpoint for mobile layout |
| `class` | `string` | `''` | Additional CSS classes |

### Feature Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `search` | `string[]` | `[]` | Array of searchable field names |
| `searchValue` | `string` | `''` | Initial search value |
| `searchOuter` | `boolean` | `false` | Use external search control |
| `actions` | `Record<string, TableAction>` | `{}` | Row actions configuration |
| `filters` | `Record<string, TableFilter>` | `{}` | Column filters configuration |
| `selection` | `TableSelection` | `undefined` | Selection configuration |
| `emptyMessage` | `string` | `'No data found'` | Message shown when no data |

### Pagination Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `page` | `number` | `1` | Initial page number |
| `limit` | `number` | `10` | Items per page |

## Types

### TableHeaders

```typescript
type TableHeaders = Record<string, string | TableHeader>;

interface TableHeader {
  name: string;
  access: string | string[];
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}
```

### TableAction

```typescript
interface TableAction<T = any> {
  key: string;
  tooltip?: string;
  icon?: any;
  class?: string;
  action: (item: T) => void | Promise<void>;
  test?: (item: T) => boolean | Promise<boolean>;
}
```

### TableFilter

```typescript
interface TableFilter {
  key: string;
  initial?: FilterOption[];
  fetch?: () => Promise<FilterOption[]>;
  selected?: number;
}

interface FilterOption {
  value: string | number;
  name: string;
  short?: string;
  column?: string;
}
```

### TableSelection

```typescript
interface TableSelection<T = any> {
  key: string;
  selected: (string | number)[];
  onSelect?: (item: T, isSelectAll: boolean) => boolean;
}
```

### TableDataFetcher

```typescript
interface TableDataFetcher<T = any> {
  (page: number, limit: number, query: Record<string, any>): Promise<TableDataResponse<T>>;
}

interface TableDataResponse<T = any> {
  total: number;
  page: number;
  pages: number;
  limit: number;
  data: T[];
}
```

### Additional Types

```typescript
interface TableStoryArgs<T = Record<string, unknown>> extends Partial<TableProps<T>> {
  storyTitle?: string;
  storyDescription?: string;
}

interface TableConfig {
  pageSizeOptions?: number[];
  searchDebounceMs?: number;
  loadingTimeoutMs?: number;
  defaultEmptyMessage?: string;
  defaultErrorMessage?: string;
}

interface TableTheme {
  primary?: string;
  secondary?: string;
  success?: string;
  warning?: string;
  error?: string;
  borderRadius?: string;
  fontFamily?: string;
}

interface ThemedTableProps<T = Record<string, unknown>> extends TableProps<T> {
  theme?: TableTheme;
  cssVariables?: Record<string, string>;
}
```

## Slots

### buttons

Content to display in the header buttons area.

```svelte
{#snippet buttons()}
  <button class="btn btn-primary">Add New</button>
  <button class="btn btn-secondary">Export</button>
{/snippet}
```

### bottom

Content to display at the bottom of the table.

```svelte
{#snippet bottom()}
  <div class="p-4 bg-gray-50">
    <p class="text-sm text-gray-600">Additional table information</p>
  </div>
{/snippet}
```

## Methods

### refresh()

Manually refresh the table data and reset selection.

```svelte
<script>
  let tableRef;
  
  function handleRefresh() {
    tableRef.refresh();
  }
</script>

<Table bind:this={tableRef} {headers} {data} />
<button onclick={handleRefresh}>Refresh</button>
```

## Styling

The component uses Tailwind CSS classes and CSS custom properties for theming. You can customize the appearance by:

### CSS Classes

```css
/* Custom table styles */
.table-small { @apply text-sm; }
.table-medium { @apply text-base; }
.table-large { @apply text-lg; }

.table-striped tbody tr:nth-child(even) {
  @apply bg-gray-50 dark:bg-gray-700;
}

.table-bordered {
  @apply border border-gray-200 dark:border-gray-700;
}
```

### Responsive Breakpoints

The table automatically switches to a mobile-friendly layout at the specified breakpoint:

- `xs`: 475px
- `sm`: 640px  
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px
- `3xl`: 1600px
- `4xl`: 1800px
- `5xl`: 2000px
- `6xl`: 2200px
- `7xl`: 2400px

## Accessibility

The table component follows WAI-ARIA guidelines:

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Logical tab order and focus indicators
- **High Contrast**: Supports high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion`

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Navigate between interactive elements |
| `Enter`/`Space` | Activate buttons and checkboxes |
| `Escape` | Close open dropdowns |
| `Arrow Keys` | Navigate within dropdowns |

## Storybook Stories

The component includes comprehensive Storybook stories showcasing all features:

- **Default**: Basic table with user data
- **With Actions**: Table with edit, delete, and view actions
- **With Selection**: Multi-select functionality
- **With Filters**: Role and status filtering
- **Striped**: Alternating row colors
- **Bordered**: Table with cell borders
- **Small/Large Size**: Different size variants
- **Complete Example**: Full-featured table with all capabilities
- **Empty State**: Table with no data
- **Loading State**: Table in loading state
- **Mobile Responsive**: Optimized for mobile devices

## Examples

### Basic Data Table

```svelte
<Table 
  headers={{ id: 'ID', name: 'Name', email: 'Email' }}
  data={fetchUsers}
/>
```

### With Search and Filters

```svelte
<Table 
  headers={{ name: 'Name', role: 'Role', status: 'Status' }}
  data={fetchUsers}
  search={['name', 'email']}
  filters={{
    role: {
      initial: [{ value: '', name: 'All Roles' }],
      fetch: fetchRoles
    }
  }}
/>
```

### With Actions and Selection

```svelte
<Table 
  headers={{ name: 'Name', email: 'Email' }}
  data={fetchUsers}
  actions={{
    edit: { action: editUser, tooltip: 'Edit' },
    delete: { action: deleteUser, tooltip: 'Delete' }
  }}
  selection={{ key: 'id', selected: [] }}
/>
```

## Best Practices

1. **Performance**: Use pagination for large datasets
2. **Loading States**: Always handle loading and error states
3. **Accessibility**: Provide meaningful tooltips and labels
4. **Responsive**: Test on different screen sizes
5. **Type Safety**: Use TypeScript interfaces for your data
6. **Error Handling**: Implement proper error boundaries
7. **Caching**: Consider implementing data caching for better UX

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

See [CONTRIBUTING.md](../../../CONTRIBUTING.md) for guidelines on contributing to this component.

## License

MIT License - see [LICENSE](../../../LICENSE) for details.
