import { test, expect } from '@playwright/test';

test.describe('Form Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display all form components', async ({ page }) => {
    // Check that all main sections are visible
    await expect(page.getByText('Form Components Demo')).toBeVisible();
    await expect(page.getByText('Input Component')).toBeVisible();
    await expect(page.getByText('Checkbox Component')).toBeVisible();
    await expect(page.getByText('Select Component')).toBeVisible();
    await expect(page.getByText('Textarea Component')).toBeVisible();
  });

  test('should interact with input components', async ({ page }) => {
    // Test input interaction
    const defaultInput = page.locator('input[placeholder="Default input"]');
    await defaultInput.fill('Hello World');
    await expect(defaultInput).toHaveValue('Hello World');

    // Check if value is reflected in the demo values section
    await expect(page.getByText('Hello World')).toBeVisible();
  });

  test('should interact with checkbox components', async ({ page }) => {
    // Test checkbox interaction - use more specific selector
    const defaultCheckbox = page.locator('input[type="checkbox"]').first();
    await defaultCheckbox.check();
    await expect(defaultCheckbox).toBeChecked();

    // Check if value is reflected in the demo values section
    await expect(page.getByText('true')).toBeVisible();
  });

  test('should interact with select components', async ({ page }) => {
    // Test select interaction
    const defaultSelect = page.locator('select').first();
    await defaultSelect.selectOption('option1');
    await expect(defaultSelect).toHaveValue('option1');

    // Check if value is reflected in the demo values section
    await expect(page.getByText('option1')).toBeVisible();
  });

  test('should interact with textarea components', async ({ page }) => {
    // Test textarea interaction
    const defaultTextarea = page.locator('textarea[placeholder="Default textarea"]');
    await defaultTextarea.fill('This is a test message');
    await expect(defaultTextarea).toHaveValue('This is a test message');

    // Check if value is reflected in the demo values section
    await expect(page.getByText('This is a test message')).toBeVisible();
  });

  test('should validate input error states', async ({ page }) => {
    // Check error input styling
    const errorInput = page.locator('input[placeholder="Error input"]');
    await expect(errorInput).toBeVisible();
    
    // Check for error text - use first() to avoid multiple matches
    await expect(page.getByText('This field is required').first()).toBeVisible();
  });

  test('should handle disabled states', async ({ page }) => {
    // Check disabled input
    const disabledInput = page.locator('input[placeholder="Disabled input"]');
    await expect(disabledInput).toBeDisabled();

    // Check disabled checkbox - use more specific selector
    const disabledCheckbox = page.locator('input[type="checkbox"][disabled]');
    await expect(disabledCheckbox).toBeDisabled();

    // Check disabled select
    const disabledSelect = page.locator('select[disabled]');
    await expect(disabledSelect).toBeDisabled();

    // Check disabled textarea
    const disabledTextarea = page.locator('textarea[placeholder="Disabled textarea"]');
    await expect(disabledTextarea).toBeDisabled();
  });

  test('should display button components', async ({ page }) => {
    // Check button variants - use first() to avoid multiple matches
    await expect(page.getByRole('button', { name: 'Default' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Destructive' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Outline' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Secondary' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Ghost' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Link' }).first()).toBeVisible();

    // Check button sizes
    await expect(page.getByRole('button', { name: 'Small' }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: 'Large' }).first()).toBeVisible();
  });

  test('should handle theme toggle', async ({ page }) => {
    // Find theme toggle button
    const themeToggle = page.locator('button:has-text("☀️"), button:has-text("🌙")');
    await expect(themeToggle).toBeVisible();

    // Click theme toggle
    await themeToggle.click();

    // Check if theme changed (this might change the icon)
    await expect(themeToggle).toBeVisible();
  });

  test('should validate accessibility features', async ({ page }) => {
    // Check that inputs have proper labels
    const inputLabels = page.locator('label');
    await expect(inputLabels.first()).toBeVisible();

    // Check that form controls have proper ARIA attributes
    const inputs = page.locator('input, select, textarea');
    const firstInput = inputs.first();
    await expect(firstInput).toHaveAttribute('id');
  });

  test('should handle multiple selection in select', async ({ page }) => {
    // Test multiple select
    const multipleSelect = page.locator('select[multiple]').first();
    await expect(multipleSelect).toBeVisible();
    await expect(multipleSelect).toHaveAttribute('multiple');
  });

  test('should validate textarea resize options', async ({ page }) => {
    // Check different resize options
    const noResizeTextarea = page.locator('textarea[placeholder="No resize"]');
    await expect(noResizeTextarea).toBeVisible();

    const verticalResizeTextarea = page.locator('textarea[placeholder="Vertical resize only"]');
    await expect(verticalResizeTextarea).toBeVisible();
  });
});
