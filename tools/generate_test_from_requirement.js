#!/usr/bin/env node
/**
 * generate_test_from_requirement.js
 * Reads a requirement (.md) and outputs suggested Playwright test code.
 * Run: node tools/generate_test_from_requirement.js requirements/pathfinder-search-route.md
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseMdFrontmatter(md) {
  const match = md.match(/^---[\r\n]([\s\S]*?)[\r\n]---/);
  if (!match) return null;
  const fm = match[1].split('\n').reduce((acc, line) => {
    const [key, value] = line.split(':');
    if (key && value) acc[key.trim()] = value.trim();
    return acc;
  }, {});
  return fm;
}

function extractBody(md) {
  const body = md.replace(/^---[\s\S]*?---/m, '').trim();
  return body;
}

function generateTestSkeleton(fm, body) {
  const id = fm.id || 'UNK-' + Math.floor(Math.random() * 1000);
  const title = fm.title || 'Untitled';
  const featureId = id.toLowerCase();

  const testCode = `
// Suggested Playwright test for requirement ${id}: ${title}
// Feature ID: ${id}

import { test, expect } from "@playwright/test";

// Replace with relevant helper imports if any

const BASE_URL = "https://commute.my";

// Helper generated from acceptance criteria
async function searchRouteExpectations(page) {
  // Example structure: add your specific expectations from acceptance criteria
  await expect(page.getByRole("button", { name: "Search Route" })).toBeDisabled();
  // Fill origin and destination
  await page.getByPlaceholder("Origin").fill("KL SENTRAL");
  await page.locator("text=KL SENTRAL").first().click();
  await page.getByPlaceholder("Destination").fill("MASJID JAMEK");
  await page.locator("text=MASJID JAMEK").first().click();
  // Expect search button to be enabled
  await expect(page.getByRole("button", { name: "Search Route" })).toBeEnabled();
  // Click and expect navigation
  await page.getByRole("button", { name: "Search Route" }).click();
  await page.waitForURL(/\\/route\\//);
  await expect(page.getByText("Back To Search")).toBeVisible();
  await expect(page.getByText("Departure Time")).toBeVisible();
}

// Test case skeletons
// Adjust structure per describe blocks used by your project

test("${id} | ${title} – disabled when no input", async ({ page }) => {
  await page.goto(BASE_URL);
  await expect(page.getByRole("button", { name: "Search Route" })).toBeDisabled();
});

test("${id} | ${title} – enabled and navigates on search", async ({ page }) => {
  await page.goto(BASE_URL);
  await searchRouteExpectations(page);
});

// NOTES:
// - Refactor duplication with helpers in helpers/homepage.js
// - If selectors brittle, consider data-testid attributes
// - Adjust assertions to your site’s exact results view
`.trim();
  return testCode;
}

function main() {
  const [,, reqFile] = process.argv;
  if (!reqFile) {
    console.error("Usage: node generate_test_from_requirement.js requirements/myfile.md");
    process.exit(1);
  }
  const reqPath = path.resolve(__dirname, '..', reqFile);
  if (!fs.existsSync(reqPath)) {
    console.error(`Requirement file not found: ${reqPath}`);
    process.exit(1);
  }

  const content = fs.readFileSync(reqPath, 'utf8');
  const front = parseMdFrontmatter(content);
  const body = extractBody(content);

  if (!front || !front.id || !front.title) {
    console.error("Missing id/title in frontmatter. Example:\n---\nid: F-001\ntitle: Login flow\npriority: high\n---");
    process.exit(1);
  }

  const test = generateTestSkeleton(front, body);
  console.log(test);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main();
}