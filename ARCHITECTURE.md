# Project Architecture

This document outlines the new architecture and structure of the Svelte UI Component Library.

## Directory Structure

```
src/lib/
├── components/          # Component modules
│   ├── button/         # Button component
│   │   ├── Button.svelte
│   │   ├── index.ts    # Barrel export
│   │   └── README.md   # Component documentation
│   ├── checkbox/       # Checkbox component
│   ├── dropdown/       # Dropdown component
│   ├── input/          # Input component
│   ├── select/         # Select component
│   ├── textarea/       # Textarea component
│   └── index.ts        # Components barrel export
├── types/              # Type definitions
│   ├── components/     # Component-specific types
│   │   ├── button.ts
│   │   ├── checkbox.ts
│   │   ├── dropdown.ts
│   │   ├── input.ts
│   │   ├── select.ts
│   │   ├── textarea.ts
│   │   └── index.ts    # Types barrel export
│   ├── components.ts   # Shared component types
│   └── index.ts        # Main types export
├── utils/              # Utility functions
│   ├── variants/       # Component variants
│   │   ├── button.ts
│   │   ├── checkbox.ts
│   │   ├── dropdown.ts
│   │   ├── input.ts
│   │   ├── select.ts
│   │   ├── textarea.ts
│   │   └── index.ts
│   ├── cn.ts          # className utility
│   ├── theme.ts       # Theme utilities
│   └── index.ts       # Utils barrel export
└── index.ts           # Main library export

tests/
├── unit/              # Unit tests
│   └── components/    # Component unit tests
│       ├── button.test.ts
│       ├── checkbox.test.ts
│       ├── dropdown.test.ts
│       ├── input.test.ts
│       ├── select.test.ts
│       └── textarea.test.ts
└── e2e/               # End-to-end tests
    ├── button.test.ts
    ├── dropdown.test.ts
    └── ...

src/stories/           # Storybook stories
└── components/        # Component stories
    ├── Button.stories.ts
    ├── Checkbox.stories.ts
    └── ...
```

## Key Improvements

### 1. **Component-Centric Organization**
- Each component has its own directory
- Self-contained with component file, types, variants, and documentation
- Clear barrel exports for easy importing

### 2. **Improved Type Safety**
- Component-specific types in dedicated files
- Better IntelliSense and autocompletion
- Cleaner separation of concerns

### 3. **Better Test Organization**
- Unit tests separated from components
- E2E tests in dedicated directory
- Easier to run specific test suites

### 4. **Enhanced Developer Experience**
- Each component has its own README
- Clear import paths
- Consistent file naming (PascalCase for components)

### 5. **Scalability**
- Easy to add new components
- Modular structure supports growth
- Clean separation of concerns

## Usage Examples

### Importing Components
```typescript
// Import specific component
import { Button } from '@kubilaysabah/svelte-ui';

// Import multiple components
import { Button, Input, Checkbox } from '@kubilaysabah/svelte-ui';

// Import with types
import { Button, type ButtonProps } from '@kubilaysabah/svelte-ui';
```

### Importing Types Only
```typescript
import type { ButtonProps, InputProps } from '@kubilaysabah/svelte-ui';
```

### Importing Variants
```typescript
import { buttonVariants, inputVariants } from '@kubilaysabah/svelte-ui';
```

## Component Development Guidelines

### 1. **File Structure for New Components**
```
src/lib/components/my-component/
├── MyComponent.svelte     # Main component file
├── index.ts              # Barrel export
└── README.md             # Component documentation
```

### 2. **Barrel Export Pattern**
```typescript
// src/lib/components/my-component/index.ts
export { default as MyComponent } from './MyComponent.svelte';
export type * from '../../types/components/my-component.js';
export * from '../../utils/variants/my-component.js';
```

### 3. **Test Structure**
- Unit tests: `tests/unit/components/my-component.test.ts`
- E2E tests: `tests/e2e/my-component.test.ts`
- Story files: `src/stories/components/MyComponent.stories.ts`

### 4. **Type Definitions**
- Component types: `src/lib/types/components/my-component.ts`
- Variants: `src/lib/utils/variants/my-component.ts`

## Migration Notes

### Breaking Changes
- Import paths have changed due to new structure
- Component names are now PascalCase (e.g., `Button` instead of `button`)

### Migration Guide
```typescript
// Before
import Button from '@kubilaysabah/svelte-ui/button';

// After
import { Button } from '@kubilaysabah/svelte-ui';
```

## Benefits

1. **Better Code Organization**: Easier to find and maintain code
2. **Improved DX**: Better autocompletion and IntelliSense
3. **Scalability**: Easy to add new components without clutter
4. **Testing**: Clear separation of test types and better organization
5. **Documentation**: Each component has its own documentation
6. **Consistency**: Standardized patterns across all components
