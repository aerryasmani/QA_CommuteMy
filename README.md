# QA_CommuteMy

Automated E2E tests for [Commute.my](https://commute.my/) — making Klang Valley public transport easier for everyone, including locals and tourists.

## Prerequisites

- **Node.js** (LTS). The project uses `lts/*` in CI.

## Getting started

```bash
git clone https://github.com/aerryasmani/QA_CommuteMy.git
cd QA_CommuteMy
npm ci
npx playwright install
```

On Linux you may need system dependencies: `npx playwright install --with-deps`.

## Running tests

Tests run against **https://commute.my/**.

| Command | Description |
|--------|-------------|
| `npx playwright test` | Run all tests |
| `npx playwright test --ui` | Run with Playwright UI |
| `npx playwright test --project=chromium` | Run in Chromium only |
| `npx playwright test --headed` | Run in headed mode |
| `npx playwright test --debug` | Run in debug mode |

## Test report

After a run, open the HTML report:

```bash
npx playwright show-report
```

Report output is written to `playwright-report/`.

## Browsers

Tests are configured for:

- **Chromium** (Desktop Chrome)
- **Firefox** (Desktop Firefox)
- **WebKit** (Desktop Safari)

## CI (GitHub Actions)

Playwright tests run on GitHub Actions on push and pull requests to `main` and `master`. The **playwright-report** artifact is uploaded (retention 30 days) so you can inspect failures.

## Project structure

| Path | Description |
|------|-------------|
| `tests/` | Test specs (e.g. `homepage.spec.js`) |
| `helpers/` | Reusable helpers: `homepage.js` (pathfinder, lines, hero, logo), `general navigation.js` (Settings, Donate, About, footer) |
| `playwright.config.js` | Playwright config (testDir, browsers, reporter, CI retries) |
| `.github/workflows/` | CI workflow for Playwright |

## Test coverage summary

- **Page load**: Title, meta description, logo, main heading.
- **Pathfinder**: Section visibility, origin/destination fields, swap button, Search Route (enabled after station selection), beta text and GitHub issues link.
- **Browse lines**: Visibility and navigation for LRT Ampang, LRT Sri Petaling, LRT Kelana Jaya, MR Monorail KL, MRT Kajang, MRT Putrajaya.
- **Navigation**: Settings, Donate, About pages and footer (“Built by Malaysian, for Malaysians”).

## Test cases

| ID | Test name | Area |
|----|-----------|------|
| 001 | Page Load - Title and Meta Tags | Page Load Elements |
| 002 | Page Load - Logo Display | Page Load Elements |
| 003 | Page Load - Main Heading Display | Page Load Elements |
| 004 | Path Finder Section is present | Pathfinder Section |
| 005 | Path Finder field is present and functional | Pathfinder Section |
| 006 | Path Finder swap button button is present and visible | Pathfinder Section |
| 007 | Search Route button is present and working | Pathfinder Section |
| 008 | Bottom text and github issue link is present | Pathfinder Section |
| 009 | Browse Line Section is present and visible | Browse Line Section |
| 010 | Validate the functionality of lines button | Browse Line Section |
| 011 | Verify Setting Page | General Navigation |
| 012 | Verify Donate Page | General Navigation |
| 013 | Verify About Page | General Navigation |
| 014 | Footer Page | General Navigation |

**What each group covers:**

- **001–003**: Page title “Commute”, meta description, logo (`logo.svg`), hero text and tagline.
- **004–008**: “Plan Your Journey” section, origin/destination placeholders, swap button, Search Route disabled until stations selected; search KL Sentral → Masjid Jamek and “Back To Search”; beta text and GitHub repository/issues link.
- **009–010**: All six line buttons visible; LRT Kelana Jaya → `/line/KJ`, LRT Ampang → `/line/AG`.
- **011–014**: Settings page (heading, version), Donate page (GitHub Sponsor, Ko-fi, Ethereum), About page (heading, motivation, repo link), footer trademark.

## Repository and issues

- **Repository**: [github.com/aerryasmani/QA_CommuteMy](https://github.com/aerryasmani/QA_CommuteMy)
- **Issues**: [github.com/aerryasmani/QA_CommuteMy/issues](https://github.com/aerryasmani/QA_CommuteMy/issues)
- **Application under test**: [commute.my](https://commute.my/)

## License

ISC
