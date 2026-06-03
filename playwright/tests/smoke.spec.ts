import { test, expect } from '@playwright/test'

const timestamp = Date.now()
const testEmail = `e2e+${timestamp}@example.com`
const password = 'Test1234'

test('GlobalBridge smoke flow: register, marketplace, post job, dashboard login', async ({ page }) => {
  await page.goto('/')
  await page.goto('/register')

  await expect(page.getByLabel('Email')).toBeVisible({ timeout: 15000 })
  await page.getByLabel('Email').fill(testEmail)
  await page.getByLabel('Password', { exact: true }).fill(password)
  await page.getByLabel('Confirm Password').fill(password)
  await page.getByRole('button', { name: 'Create account' }).click()

  await expect(page).toHaveURL(/.*dashboard/)
  await expect(page.getByRole('heading', { name: /Intelligence Dashboard/i })).toBeVisible()

  await page.goto('/marketplace')
  await expect(page.getByRole('heading', { name: /Marketplace/i })).toBeVisible()
  await expect(page.locator('article')).toHaveCount(6)

  await page.goto('/jobs')
  await expect(page.getByRole('heading', { name: /Jobs & Gigs/i })).toBeVisible()

  await page.getByLabel('Role title').fill('Rwanda Launch Partner')
  await page.getByLabel('Company').fill('GlobalBridge Rwanda')
  await page.getByLabel('Location').fill('Kigali')
  await page.getByLabel('Salary range').fill('$1,200 - $1,800')
  await page.getByLabel('Role type', { exact: true }).selectOption('Gig')
  await page.getByRole('button', { name: /Post job request/i }).click()

  await expect(page.getByText(/Your job request has been posted successfully./i)).toBeVisible()
  await expect(page.getByText(/Your recent job requests/i)).toBeVisible()

  await page.goto('/dashboard')
  await expect(page.getByText(/Your recent job requests/i)).toBeVisible()
  await expect(page.getByText(/Rwanda Launch Partner/i)).toBeVisible()

  await page.getByRole('button', { name: /Sign out/i }).click()
  await page.goto('/login')

  await page.getByLabel('Email').fill(testEmail)
  await page.getByLabel('Password').fill(password)
  await page.getByRole('button', { name: /Sign in/i }).click()

  await expect(page).toHaveURL(/.*dashboard/)
  await expect(page.getByText(/Your recent job requests/i)).toBeVisible()
})
