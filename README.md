# @kubilaysabah/svelte-ui

Modern, accessible, and customizable UI component library for Svelte 5 applications. Built with TypeScript, Tailwind CSS, and designed for maximum flexibility and developer experience.

## 🚀 Features

- **Svelte 5 Ready**: Built with the latest Svelte 5 runes and modern patterns
- **TypeScript First**: Complete type safety with comprehensive TypeScript definitions and proper component constructors
- **Accessible**: WCAG compliant components with proper ARIA attributes and keyboard navigation
- **Customizable**: Built with Class Variance Authority (CVA) for flexible styling
- **Modern Styling**: Powered by Tailwind CSS with dark mode support
- **Robust Architecture**: Proper component wrapping for bits-ui primitives with full TypeScript support
- **Developer Experience**: Comprehensive documentation and Storybook stories

## 🚀 Installation

```bash
# npm
npm install @kubilaysabah/svelte-ui

# pnpm
pnpm add @kubilaysabah/svelte-ui

# yarn
yarn add @kubilaysabah/svelte-ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
# npm
npm install svelte tailwindcss

# pnpm
pnpm add svelte tailwindcss

# yarn
yarn add svelte tailwindcss
```

### TailwindCSS Setup

This library requires TailwindCSS v4 and does NOT include TailwindCSS in its bundle to avoid conflicts with your existing setup.

1. **Import the component styles** in your app:

```js
// In your main app file (e.g., app.js, main.js, or +layout.svelte)
import '@kubilaysabah/svelte-ui/styles.css';
```

2. **Configure TailwindCSS** to include the library's utility classes. Add this to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@kubilaysabah/svelte-ui/**/*.{js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'sui-background': 'var(--sui-background)',
        'sui-foreground': 'var(--sui-foreground)',
        'sui-card': 'var(--sui-card)',
        'sui-card-foreground': 'var(--sui-card-foreground)',
        'sui-popover': 'var(--sui-popover)',
        'sui-popover-foreground': 'var(--sui-popover-foreground)',
        'sui-primary': 'var(--sui-primary)',
        'sui-primary-foreground': 'var(--sui-primary-foreground)',
        'sui-secondary': 'var(--sui-secondary)',
        'sui-secondary-foreground': 'var(--sui-secondary-foreground)',
        'sui-muted': 'var(--sui-muted)',
        'sui-muted-foreground': 'var(--sui-muted-foreground)',
        'sui-accent': 'var(--sui-accent)',
        'sui-accent-foreground': 'var(--sui-accent-foreground)',
        'sui-destructive': 'var(--sui-destructive)',
        'sui-border': 'var(--sui-border)',
        'sui-input': 'var(--sui-input)',
        'sui-ring': 'var(--sui-ring)',
      },
      borderRadius: {
        'sui-sm': 'var(--sui-radius-sm)',
        'sui-md': 'var(--sui-radius-md)',
        'sui-lg': 'var(--sui-radius-lg)',
        'sui-xl': 'var(--sui-radius-xl)',
      }
    },
  },
  plugins: [],
}
```

**Why this approach?**
- ✅ No TailwindCSS conflicts with your existing setup
- ✅ Smaller bundle size - no duplicate TailwindCSS
- ✅ You maintain full control over your TailwindCSS configuration
- ✅ Components use scoped CSS variables that won't affect your app's styles

### 🎨 Style Architecture

The library uses **component-scoped CSS** to prevent conflicts with your application:

- **Scoped Variables**: All CSS variables use the `--sui-` prefix
- **Class Isolation**: Components automatically include the `.svelte-ui` class
- **No Global Pollution**: Only affects elements with the `.svelte-ui` class
- **TailwindCSS v4 Native**: Uses `@theme` directive for seamless integration

### Integration with Existing TailwindCSS

Perfect compatibility with your existing TailwindCSS setup:

```css
/* Your app.css */
@import "tailwindcss";

/* Your existing custom styles */
.my-app-button {
  @apply bg-blue-500 text-white; /* Your styles won't conflict */
}

/* Import component styles last */
@import "@kubilaysabah/svelte-ui/dist/app.css";
```

### Customizing the Theme

Override CSS variables to customize component appearance:

```css
:root {
  /* Customize light theme */
  --sui-primary: oklch(0.3 0.2 250); /* Custom blue */
  --sui-destructive: oklch(0.6 0.25 15); /* Custom red */
  --sui-border: oklch(0.9 0 0); /* Custom border */
  --sui-radius: 0.5rem; /* Custom border radius */
}

.dark {
  /* Customize dark theme */
  --sui-primary: oklch(0.7 0.2 250);
  --sui-destructive: oklch(0.7 0.2 15);
  --sui-border: oklch(0.2 0 0);
}
```

### Available CSS Variables

| Variable | Purpose | Default (Light) | Default (Dark) |
|----------|---------|----------------|----------------|
| `--sui-primary` | Primary brand color | `oklch(0.205 0 0)` | `oklch(0.922 0 0)` |
| `--sui-secondary` | Secondary background | `oklch(0.97 0 0)` | `oklch(0.269 0 0)` |
| `--sui-destructive` | Error/danger color | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |
| `--sui-background` | Main background | `oklch(1 0 0)` | `oklch(0.145 0 0)` |
| `--sui-foreground` | Main text color | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--sui-border` | Border color | `oklch(0.922 0 0)` | `oklch(1 0 0 / 10%)` |
| `--sui-input` | Input background | `oklch(0.922 0 0)` | `oklch(1 0 0 / 15%)` |
| `--sui-ring` | Focus ring color | `oklch(0.708 0 0)` | `oklch(0.556 0 0)` |
| `--sui-radius` | Base border radius | `0.625rem` | `0.625rem` |

## 🎯 Quick Start

```svelte
<script>
  import { Button, Card, Input, Label } from '@kubilaysabah/svelte-ui';
  
  let name = $state('');
</script>

<Card.Root class="w-96 p-6">
  <Card.Header>
    <Card.Title>Welcome</Card.Title>
    <Card.Description>Get started with svelte-ui</Card.Description>
  </Card.Header>
  
  <Card.Content class="space-y-4">
    <div class="space-y-2">
      <Label for="name">Your Name</Label>
      <Input id="name" bind:value={name} placeholder="Enter your name" />
    </div>
  </Card.Content>
  
  <Card.Footer>
    <Button onclick={() => alert(`Hello, ${name}!`)}>
      Say Hello
    </Button>
  </Card.Footer>
</Card.Root>
```

## 📚 Components

### Form Components

#### Button
Versatile button component with multiple variants and sizes.

```svelte
<script>
  import { Button } from '@kubilaysabah/svelte-ui';
</script>

<!-- Variants -->
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

<!-- Sizes -->
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>
```

#### Input
Text input component with various types and states.

```svelte
<script>
  import { Input, Label } from '@kubilaysabah/svelte-ui';
  
  let email = $state('');
  let password = $state('');
</script>

<div class="space-y-4">
  <div>
    <Label for="email">Email</Label>
    <Input id="email" type="email" bind:value={email} placeholder="Enter your email" />
  </div>
  
  <div>
    <Label for="password">Password</Label>
    <Input id="password" type="password" bind:value={password} placeholder="Enter your password" />
  </div>
</div>
```

#### Switch
Toggle switch component with multiple sizes.

```svelte
<script>
  import { Switch } from '@kubilaysabah/svelte-ui';
  
  let notifications = $state(true);
</script>

<div class="flex items-center space-x-2">
  <Switch 
    id="notifications" 
    bind:checked={notifications}
    size="medium"
  />
  <Label for="notifications">Enable notifications</Label>
</div>
```

#### Checkbox
Checkbox input with indeterminate state support.

```svelte
<script>
  import { Checkbox, Label } from '@kubilaysabah/svelte-ui';
  
  let agreed = $state(false);
</script>

<div class="flex items-center space-x-2">
  <Checkbox id="terms" bind:checked={agreed} />
  <Label for="terms">I agree to the terms and conditions</Label>
</div>
```

#### Radio Group
Radio button group for single selection.

```svelte
<script>
  import { RadioGroup, Label } from '@kubilaysabah/svelte-ui';
  
  let plan = $state('free');
</script>

<RadioGroup.Root bind:value={plan}>
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="free" id="free" />
    <Label for="free">Free Plan</Label>
  </div>
  
  <div class="flex items-center space-x-2">
    <RadioGroup.Item value="pro" id="pro" />
    <Label for="pro">Pro Plan</Label>
  </div>
</RadioGroup.Root>
```

### Layout Components

#### Card
Flexible card component for content organization.

```svelte
<script>
  import { Card, Button } from '@kubilaysabah/svelte-ui';
</script>

<Card.Root class="w-96">
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description goes here</Card.Description>
  </Card.Header>
  
  <Card.Content>
    <p>This is the main content of the card.</p>
  </Card.Content>
  
  <Card.Footer class="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save</Button>
  </Card.Footer>
</Card.Root>
```

#### Accordion
Collapsible content sections.

```svelte
<script>
  import { Accordion } from '@kubilaysabah/svelte-ui';
</script>

<Accordion.Root class="w-full">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
  
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It comes with default styles that match the other components.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

#### Tabs
Tab navigation component.

```svelte
<script>
  import { Tabs } from '@kubilaysabah/svelte-ui';
</script>

<Tabs.Root value="account" class="w-96">
  <Tabs.List class="grid w-full grid-cols-2">
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="account">
    <p>Make changes to your account here.</p>
  </Tabs.Content>
  
  <Tabs.Content value="password">
    <p>Change your password here.</p>
  </Tabs.Content>
</Tabs.Root>
```

### Data Display

#### Table
Advanced data table with sorting, pagination, and selection.

```svelte
<script>
  import { Table } from '@kubilaysabah/svelte-ui';
  
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];
  
  const columns = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Role', sortable: false },
  ];
</script>

<Table 
  {data} 
  {columns}
  searchable={true}
  selectable={true}
  pagination={true}
  pageSize={10}
/>
```

#### Badge
Status indicators and labels.

```svelte
<script>
  import { Badge } from '@kubilaysabah/svelte-ui';
</script>

<div class="flex gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>
```

#### Avatar
User profile images with fallback support.

```svelte
<script>
  import { Avatar } from '@kubilaysabah/svelte-ui';
</script>

<div class="flex gap-2">
  <Avatar.Root>
    <Avatar.Image src="https://github.com/kubilaysabah.png" alt="Profile" />
    <Avatar.Fallback>KS</Avatar.Fallback>
  </Avatar.Root>
</div>
```

### Navigation

#### Breadcrumb
Navigation hierarchy indicator.

```svelte
<script>
  import { Breadcrumb } from '@kubilaysabah/svelte-ui';
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
```

#### Pagination
Page navigation component.

```svelte
<script>
  import { Pagination } from '@kubilaysabah/svelte-ui';
  
  let currentPage = $state(1);
  const totalPages = 10;
</script>

<Pagination.Root bind:page={currentPage} count={totalPages} perPage={10}>
  <Pagination.Content>
    <Pagination.Item>
      <Pagination.PrevButton />
    </Pagination.Item>
    
    <Pagination.Item>
      <Pagination.Link page={1}>1</Pagination.Link>
    </Pagination.Item>
    
    <Pagination.Item>
      <Pagination.Ellipsis />
    </Pagination.Item>
    
    <Pagination.Item>
      <Pagination.NextButton />
    </Pagination.Item>
  </Pagination.Content>
</Pagination.Root>
```

### Overlay Components

#### Dialog
Modal dialog component with proper TypeScript support.

```svelte
<script>
  import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from '@kubilaysabah/svelte-ui';
  
  let open = $state(false);
</script>

<Dialog bind:open>
  <DialogTrigger asChild let:builder>
    <Button builders={[builder]}>Open Dialog</Button>
  </DialogTrigger>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description.
      </DialogDescription>
    </DialogHeader>
    
    <DialogFooter>
      <Button variant="outline" onclick={() => open = false}>Cancel</Button>
      <Button onclick={() => open = false}>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

#### Popover
Floating content panel with improved TypeScript integration.

```svelte
<script>
  import { Popover, PopoverTrigger, PopoverContent, Button } from '@kubilaysabah/svelte-ui';
</script>

<Popover>
  <PopoverTrigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Open Popover</Button>
  </PopoverTrigger>
  
  <PopoverContent>
    <div class="grid gap-4">
      <h4 class="font-medium leading-none">Dimensions</h4>
      <p class="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

#### HoverCard
Hover-triggered content panel.

```svelte
<script>
  import { HoverCard, HoverCardTrigger, HoverCardContent, Button } from '@kubilaysabah/svelte-ui';
</script>

<HoverCard>
  <HoverCardTrigger asChild let:builder>
    <Button builders={[builder]} variant="link">@kubilaysabah</Button>
  </HoverCardTrigger>
  
  <HoverCardContent>
    <div class="flex justify-between space-x-4">
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">@kubilaysabah</h4>
        <p class="text-sm">
          The React Framework – created and maintained by @vercel.
        </p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```

#### Tooltip
Hover-triggered information panel.

```svelte
<script>
  import { Tooltip, Button } from '@kubilaysabah/svelte-ui';
</script>

<Tooltip.Root>
  <Tooltip.Trigger asChild let:builder>
    <Button builders={[builder]} variant="outline">Hover me</Button>
  </Tooltip.Trigger>
  
  <Tooltip.Content>
    <p>This is a tooltip</p>
  </Tooltip.Content>
</Tooltip.Root>
```

### Date & Time

#### Calendar
Date selection component.

```svelte
<script>
  import { Calendar } from '@kubilaysabah/svelte-ui';
  import { CalendarDate } from '@internationalized/date';
  
  let value = $state(new CalendarDate(2024, 1, 1));
</script>

<Calendar bind:value />
```

#### Range Calendar
Date range selection component.

```svelte
<script>
  import { RangeCalendar } from '@kubilaysabah/svelte-ui';
  import { CalendarDate } from '@internationalized/date';
  
  let value = $state({
    start: new CalendarDate(2024, 1, 1),
    end: new CalendarDate(2024, 1, 7)
  });
</script>

<RangeCalendar bind:value />
```

### Feedback

#### Alert
Alert messages for important information.

```svelte
<script>
  import { Alert } from '@kubilaysabah/svelte-ui';
</script>

<Alert.Root>
  <Alert.Title>Heads up!</Alert.Title>
  <Alert.Description>
    You can add components to your app using the cli.
  </Alert.Description>
</Alert.Root>
```

#### Progress
Progress indicator component.

```svelte
<script>
  import { Progress } from '@kubilaysabah/svelte-ui';
  
  let value = $state(60);
</script>

<Progress {value} class="w-96" />
```

#### Skeleton
Loading placeholder component.

```svelte
<script>
  import { Skeleton } from '@kubilaysabah/svelte-ui';
</script>

<div class="flex items-center space-x-4">
  <Skeleton class="h-12 w-12 rounded-full" />
  <div class="space-y-2">
    <Skeleton class="h-4 w-[250px]" />
    <Skeleton class="h-4 w-[200px]" />
  </div>
</div>
```

## 🎨 Customization

### Theming

The components use CSS custom properties for theming. You can customize the appearance by overriding these variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  --radius: 0.5rem;
}
```

### Dark Mode

Enable dark mode by adding the `dark` class to your root element:

```html
<html class="dark">
  <!-- Your app -->
</html>
```

### Custom Variants

You can extend component variants using the `class` prop:

```svelte
<Button class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
  Gradient Button
</Button>
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Setup

```bash
# Clone the repository
git clone https://github.com/kubilaysabah/svelte-ui.git
cd svelte-ui

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm format` - Format code

### Building

```bash
pnpm build
```

This will create a `dist` folder with the compiled library.

## 📖 Documentation

Visit our [Storybook documentation](https://kubilaysabah.github.io/svelte-ui) for interactive examples and detailed component APIs.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Run tests: `pnpm test`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Svelte](https://svelte.dev/) - The amazing framework this library is built for
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - For accessibility and behavior patterns
- [shadcn/ui](https://ui.shadcn.com/) - For design inspiration

## 📊 Stats

![npm version](https://img.shields.io/npm/v/@kubilaysabah/svelte-ui)
![npm downloads](https://img.shields.io/npm/dm/@kubilaysabah/svelte-ui)
![GitHub stars](https://img.shields.io/github/stars/kubilaysabah/svelte-ui)
![GitHub license](https://img.shields.io/github/license/kubilaysabah/svelte-ui)

---

Made with ❤️ by [Kubilay Sabah](https://github.com/kubilaysabah)