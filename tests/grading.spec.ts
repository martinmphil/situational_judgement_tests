import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'choice_A is best' }).click();
  await page.getByRole('button', { name: 'choice_D is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'choice_C is best' }).click();
  await page.getByRole('button', { name: 'choice_B is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'choice_D is best' }).click();
  await page.getByRole('button', { name: 'choice_A is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'choice_B is best' }).click();
  await page.getByRole('button', { name: 'choice_D is worst' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('main')).toContainText('You achieved Distinction.');
});