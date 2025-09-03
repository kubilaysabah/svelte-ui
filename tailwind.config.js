/** @type {import('tailwindcss').Config} */
export default {
  content: [],
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
