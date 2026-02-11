import {test,expect} from '@playwright/test';

export async function NavSettingPage (page) {
    const settingsLink = page.locator('a[href="/settings"]:has(svg.lucide-cog)');
    await expect(settingsLink).toBeVisible();
    await settingsLink.click();
}

export async function ValidateSettingPage (page) {
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();
    await expect(page.getByText('commute-my/frontend v0.0.1-beta')).toBeVisible(); 
}

export async function NavDonatePage (page) {
    const DonateLink = page.locator('a[href="/donate"]:has(svg.lucide-cog)');
    await expect(DonateLink).toBeVisible();
    await DonateLink.click();
}

export async function ValidateDonatePage (page) {

    const donateText = `Love using this public transport journey planner? Support our work to keep it running smoothly and growing! Your contributions directly fund maintenance, new features, and up-to-date transit information. Every donation, regardless of size, helps sustain this open-source project and improves public transportation accessibility for all users. Thanks for considering a contribution!`;
    await expect(page.getByRole('heading', { name: 'Donate' })).toBeVisible();
    await expect(donateText).toBeVisible(); 
    
    const GithubSponsor = page.locator('a:has(svg.lucide-github):has-text("GitHub Sponsor")');
    await expect(GithubSponsor).toBeVisible();

    const KofiSponsor = page.locator('a:has(svg.lucide-github):has-text("Ko-fi")');
    await expect(KofiSponsor).toBeVisible();

    const Ethereum = page.locator('a:has(svg.lucide-github):has-text("Ethereum")');
    await expect(Ethereum).toBeVisible();
}

export async function NavAboutPage (page) {
    const AboutLink = page.locator('a[href="/about"]:has(svg.lucide-cog)');
    await expect(AboutLink).toBeVisible();
    await AboutLink.click();
    
}

export async function VerifyAboutPage (page) {
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
    await page.getByText('Making Klang Valley public transport easier for everyone – locals & tourists alike.');
    await page.getByRole('heading', { name: 'The Best Way to Plan Your Trip' });
    await page.getByRole('heading', { name: 'Motivation', level: 2 });
    await page.locator('a[href="https://github.com/zackptr/commute-my"]');    
}

export async function footer (page) {

    
}