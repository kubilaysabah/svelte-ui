# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-08-14

### Added

- 🎉 Initial release of @kubilaysabah/svelte-ui
- ✨ Button component with 6 variants (default, destructive, outline, secondary, ghost, link)
- 📏 Button component with 4 sizes (default, sm, lg, icon)
- 🎨 TailwindCSS 4 integration with modern styling
- 🔒 Full TypeScript support with strict type checking
- ♿ Accessibility features with ARIA compliance
- 🧪 Comprehensive testing with Vitest (unit) and Playwright (E2E)
- 📚 Storybook integration for component documentation
- 🛠 Class Variance Authority (CVA) for variant management
- 🎯 Utility functions (cn, buttonVariants)
- 📦 NPM package ready with proper exports
- 🔥 Svelte 5 runes syntax support
- 🎨 TailwindCSS utilities integration (clsx, tailwind-merge)
- 🎬 Animation support with tw-animate-css
- 🖼 Lucide icons integration
- 📖 Comprehensive documentation and usage guide

### Features

#### Button Component

- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default (40px), sm (36px), lg (44px), icon (40px square)
- **Props**: variant, size, disabled, type, class, onclick
- **TypeScript**: Full type safety with ButtonVariant and ButtonSize types
- **Accessibility**: ARIA compliant with proper role and focus management
- **Events**: Native button events support

#### Development Tools

- **Build System**: Vite-powered build with SvelteKit packaging
- **Testing**: 11 unit tests + 6 E2E tests (100% passing)
- **Code Quality**: ESLint + Prettier + TypeScript strict mode
- **Documentation**: Storybook stories + README + usage examples

#### Package Details

- **Bundle Size**: 5.2 kB compressed, 13.7 kB unpacked
- **Dependencies**: Zero runtime dependencies (only peerDeps: svelte ^5.0.0)
- **Exports**: Proper ESM exports with TypeScript declarations
- **Compatibility**: Svelte 5+ and SvelteKit projects

### Technical Specifications

- **Svelte**: 5.0.0+ (runes syntax)
- **TypeScript**: 5.0.0+ (strict mode)
- **TailwindCSS**: 4.0.0+
- **Node**: 18.0.0+
- **Package Manager**: pnpm (recommended)

### Breaking Changes

None - Initial release

### Migration Guide

None - Initial release

---

## Development Standards

This project follows strict development standards:

- ✅ TypeScript strict mode
- ✅ 100% test coverage goal
- ✅ Accessibility compliance (WCAG 2.1 AA)
- ✅ Modern Svelte 5 syntax
- ✅ Performance optimization
- ✅ Semantic versioning
