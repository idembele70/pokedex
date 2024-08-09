import { test, expect, Page, BrowserContext } from '@playwright/test';

test.describe("Your describe description goes here, starting with 'It should...'", async () => {

  let context: BrowserContext;
  let page: Page;
  // Set up 
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('');
    await expect(page).toHaveURL(/.*/)
  });

  // Clean up 
  test.afterAll(async () => {
    await context.close();
    await page.close();
  });

  test("Your sub test description goes here, starting with 'It should...'", async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveURL(/.*/)
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Pokedex/);
  });
});
