import { test, expect } from '@playwright/test';

test.describe('Button Component E2E', () => {
	test.beforeEach(async ({ page }) => {
		// Navigate to a test page with Button components
		await page.goto('/');
	});

	test('button renders and is clickable', async ({ page }) => {
		// Test that buttons exist and are clickable
		const button = page.locator('button').first();

		await expect(button).toBeVisible();
		await expect(button).toBeEnabled();

		// Test click functionality
		await button.click();
	});

	test('button respects disabled state', async ({ page }) => {
		// Test disabled button behavior
		const disabledButton = page.locator('button[disabled]');

		if ((await disabledButton.count()) > 0) {
			await expect(disabledButton).toBeVisible();
			await expect(disabledButton).toBeDisabled();
		}
	});

	test('button has proper focus behavior', async ({ page }) => {
		const button = page.locator('button').first();

		// Test keyboard navigation
		await button.focus();
		await expect(button).toBeFocused();

		// Test Enter key press
		await button.press('Enter');
	});

	test('button variants have different styles', async ({ page }) => {
		// Test that different button variants have different classes
		const buttons = page.locator('button');
		const count = await buttons.count();

		if (count > 1) {
			const firstButton = buttons.nth(0);
			const secondButton = buttons.nth(1);

			const firstClass = await firstButton.getAttribute('class');
			const secondClass = await secondButton.getAttribute('class');

			// They should have different classes (indicating different variants)
			expect(firstClass).not.toBe(secondClass);
		}
	});

	test('button is accessible', async ({ page }) => {
		// Test accessibility features
		const button = page.locator('button').first();

		// Button should have a role
		await expect(button).toHaveAttribute('role', 'button');

		// Button should be focusable
		await button.focus();
		await expect(button).toBeFocused();
	});
});
