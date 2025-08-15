import { test, expect } from '@playwright/test';

test.describe('Dropdown Component', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('should display dropdown component', async ({ page }) => {
		// Check that dropdown section is visible
		await expect(page.getByText('Dropdown Component')).toBeVisible();
		
		// Check that basic dropdown exists
		const basicDropdown = page.locator('[data-testid="dropdown-basic"]');
		await expect(basicDropdown).toBeVisible();
	});

	test('should show dropdown trigger with placeholder', async ({ page }) => {
		// Find the basic dropdown trigger
		const trigger = page.locator('[data-testid="dropdown-basic"] button');
		await expect(trigger).toBeVisible();
		await expect(trigger).toContainText('Select Action...');
	});

	test('should open and close dropdown on click', async ({ page }) => {
		// Find the basic dropdown trigger
		const trigger = page.locator('[data-testid="dropdown-basic"] button');
		
		// Initially, dropdown should be closed
		await expect(page.locator('[role="menu"]')).not.toBeVisible();
		
		// Click to open
		await trigger.click();
		await expect(page.locator('[role="menu"]')).toBeVisible();
		
		// Click outside to close
		await page.locator('body').click({ position: { x: 10, y: 10 } });
		await expect(page.locator('[role="menu"]')).not.toBeVisible();
	});

	test('should close dropdown with Escape key', async ({ page }) => {
		// Find the basic dropdown trigger
		const trigger = page.locator('[data-testid="dropdown-basic"] button');
		
		// Open dropdown
		await trigger.click();
		await expect(page.locator('[role="menu"]')).toBeVisible();
		
		// Press Escape to close
		await page.keyboard.press('Escape');
		await expect(page.locator('[role="menu"]')).not.toBeVisible();
	});

	test('should select item from dropdown', async ({ page }) => {
		// Find the basic dropdown trigger
		const trigger = page.locator('[data-testid="dropdown-basic"] button');
		
		// Open dropdown
		await trigger.click();
		await expect(page.locator('[role="menu"]')).toBeVisible();
		
		// Click on first menu item
		const firstItem = page.locator('[role="menu"] [role="menuitem"]').first();
		await firstItem.click();
		
		// Dropdown should close
		await expect(page.locator('[role="menu"]')).not.toBeVisible();
		
		// Trigger should no longer show placeholder
		await expect(trigger).not.toContainText('Select Action...');
	});

	test('should handle disabled dropdown', async ({ page }) => {
		// Find the disabled dropdown trigger
		const trigger = page.locator('[data-testid="dropdown-disabled"] button');
		
		// Should be disabled
		await expect(trigger).toBeDisabled();
		
		// Should not open when clicked
		await trigger.click({ force: true });
		await expect(page.locator('[role="menu"]')).not.toBeVisible();
	});

	test('should display different variants', async ({ page }) => {
		// Check outline variant
		const outlineDropdown = page.locator('[data-testid="dropdown-outline"]');
		await expect(outlineDropdown).toBeVisible();
		
		// Check ghost variant
		const ghostDropdown = page.locator('[data-testid="dropdown-ghost"]');
		await expect(ghostDropdown).toBeVisible();
		
		// Check destructive variant
		const destructiveDropdown = page.locator('[data-testid="dropdown-destructive"]');
		await expect(destructiveDropdown).toBeVisible();
	});

	test('should display different sizes', async ({ page }) => {
		// Check small size
		const smallDropdown = page.locator('[data-testid="dropdown-small"]');
		await expect(smallDropdown).toBeVisible();
		
		// Check large size
		const largeDropdown = page.locator('[data-testid="dropdown-large"]');
		await expect(largeDropdown).toBeVisible();
	});

	test('should display icons and shortcuts in dropdown with icons', async ({ page }) => {
		// Find the dropdown with icons trigger
		const trigger = page.locator('[data-testid="dropdown-with-icons"] button');
		
		// Open dropdown
		await trigger.click();
		await expect(page.locator('[role="menu"]')).toBeVisible();
		
		// Check for icons in menu items
		const menuItems = page.locator('[role="menu"] [role="menuitem"]');
		await expect(menuItems.first()).toContainText('📄');
		await expect(menuItems.first()).toContainText('⌘N');
	});

	test('should show separators in dropdown with separators', async ({ page }) => {
		// Find the dropdown with separators trigger
		const trigger = page.locator('[data-testid="dropdown-with-separators"] button');
		
		// Open dropdown
		await trigger.click();
		await expect(page.locator('[role="menu"]')).toBeVisible();
		
		// Check for separators (they should be visible as separator elements)
		const separators = page.locator('[role="menu"] [role="separator"]');
		await expect(separators.first()).toBeVisible();
	});

	test('should show pre-selected value', async ({ page }) => {
		// Find the dropdown with pre-selected value
		const trigger = page.locator('[data-testid="dropdown-with-value"] button');
		
		// Should show pre-selected value
		await expect(trigger).toContainText('Second Option');
	});
});
