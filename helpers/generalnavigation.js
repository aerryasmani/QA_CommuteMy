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
    const DonateLink = page.locator('a[href="/donate"]:has(svg.lucide-heart)');    
    await expect(DonateLink).toBeVisible();
    await DonateLink.click();
}

export async function ValidateDonatePage (page) {

    await expect(page.getByRole('heading', { name: 'Donate' })).toBeVisible();
    await expect(page.getByText('Love using this public transport journey planner?')).toBeVisible(); 
        
    const GithubSponsor = page.locator('a:has(svg.lucide-github):has-text("GitHub Sponsor")');
    await expect(GithubSponsor).toBeVisible();

    const KofiSponsor = page.locator('a[href="https://ko-fi.com/zackptr"]:has(svg.lucide-coffee)');
    await expect(KofiSponsor).toBeVisible();

    const Ethereum = page.locator('p:has(svg.lucide-wallet):has-text("Ethereum")');
    await expect(Ethereum).toBeVisible();
}

export async function NavAboutPage (page) {
    const AboutLink = page.locator('a[href="/about"]:has(svg.lucide-info)');
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

export async function trademark(page) {

    const MalaysianText = page.locator('p:has-text("🇲🇾"):has-text("Built by Malaysian, for Malaysians")');
    await expect(MalaysianText).toBeVisible();
    
}