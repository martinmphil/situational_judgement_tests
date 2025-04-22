import { test, expect } from '@playwright/test';

test('disabled submit', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
});

test('enabled choice buttons', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('button', { name: 'choice_A is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_A is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is worst' })).toBeEnabled();
});

test('toggling disabled attribute for choice buttons', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'choice_A is best' }).click();
  await expect(page.getByRole('button', { name: 'choice_A is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is best' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_C is best' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_D is best' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_A is worst' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_B is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
  await page.getByRole('button', { name: 'choice_A is best' }).click();
  await expect(page.getByRole('button', { name: 'choice_A is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_A is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
  await page.getByRole('button', { name: 'choice_B is worst' }).click();
  await expect(page.getByRole('button', { name: 'choice_A is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is best' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_C is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_A is worst' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_B is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is worst' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'choice_D is worst' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
  await page.getByRole('button', { name: 'choice_B is worst' }).click();
  await expect(page.getByRole('button', { name: 'choice_A is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is best' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_A is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_B is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_C is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'choice_D is worst' })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
});

