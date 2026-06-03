import { test, expect } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const axePath = resolve(__dirname, '../../node_modules/axe-core/axe.min.js')

test('Landing page should meet WCAG 2.1 accessibility standards', async ({ page }) => {
  await page.goto('/')
  const axeSource = readFileSync(axePath, 'utf8')
  await page.addScriptTag({ content: axeSource })

  const axeResults = await page.evaluate(async () => {
    // @ts-ignore
    return await window.axe.run({
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    })
  })

  expect(axeResults.violations).toEqual([])
})
