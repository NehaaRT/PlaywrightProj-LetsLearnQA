import { test, expect } from '@playwright/test';

test('TableDemo', async ({ page }) => {

    
  await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');

  await page.waitForTimeout(4000);

  const allColumns = page.locator('thead tr th');
  const columnCount = await allColumns.count();
  console.log('Total number of columns: ' + columnCount);

  expect(columnCount).toBe(4);

  await page.locator('tbody tr')
  const rowCount = await page.locator('tbody tr').count();
  console.log('Total number of rows: ' + rowCount);

  expect(rowCount).toBe(10);

  
  await page.waitForTimeout(4000);
});

