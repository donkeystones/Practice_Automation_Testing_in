import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/');
    await page.getByLabel('Consent', { exact: true }).click();
})
test('Home page with three sliders only', async ({ page }) => {
  await page.getByRole('img', { name: 'Shop Selenium Books' }).click();
  await page.locator('body').press('ArrowRight');
  await expect(page.getByRole('img', { name: 'HTML', exact: true })).toBeVisible();
  await page.getByRole('img', { name: 'HTML', exact: true }).click();
  await page.locator('body').press('ArrowRight');
  await expect(page.getByRole('img', { name: 'JavaScript', exact: true })).toBeVisible();
  await page.getByRole('img', { name: 'JavaScript', exact: true }).click();
  await page.locator('body').press('ArrowRight');
  await expect(page.getByRole('img', { name: 'Shop Selenium Books' })).toBeVisible();
});

test('Home page with three arrivals only', async ({ page }) => {
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
    let div_count = await page.locator('.products').count();
    expect(div_count).toEqual(3);
});

test('Home page - images in arrivals should navigate to product page - Selenium Ruby Product - Check title and price', async ({ page }) => {
    await page.getByRole('link', { name: 'Selenium Ruby Selenium Ruby ₹' }).click();
    await expect(page.locator('h1')).toContainText('Selenium Ruby');
    await expect(page.locator('#product-160')).toContainText('₹500.00');
  });

  test('Home page - images in arrivals should navigate to product page - Selenium Ruby Product - Check Description', async ({ page }) => {
    await page.getByRole('link', { name: 'Selenium Ruby Selenium Ruby ₹' }).click();
    await expect(page.getByText('The Selenium WebDriver').first()).toBeVisible();
});

  test('Home page - images in arrivals should navigate to product page - Thinking in HTML Product - Check title and price', async ({ page }) => {
    await page.getByRole('link', { name: 'Sale! Thinking in HTML' }).click();
    await expect(page.locator('h1')).toContainText('Thinking in HTML');
    await expect(page.locator('#product-163')).toContainText('₹400.00');
});

test('Home page - images in arrivals should navigate to product page - Thinking in HTML Product - Check Description', async ({ page }) => {
    await page.getByRole('link', { name: 'Sale! Thinking in HTML' }).click();
    await expect(page.getByText('This book provides you with').first()).toBeVisible();
});

  test('Home page - images in arrivals should navigate to product page - Mastering Javascript Product - Check title and price', async ({ page }) => {
    await page.getByRole('link', { name: 'Mastering JavaScript' }).click();
    await expect(page.locator('h1')).toContainText('Mastering JavaScript');
    await expect(page.locator('#product-165')).toContainText('₹350.00');
  });

  test('Home page - images in arrivals should navigate to product page - Mastering Javascript Product - Check Description', async ({ page }) => {
    await page.getByRole('link', { name: 'Mastering JavaScript' }).click();
    await expect(page.getByText('It would seem that everything').first()).toBeVisible();
});