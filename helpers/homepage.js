import {test,expect} from '@playwright/test';

const PageTitle ="Commute"
const PageMetaTag ="A project aims to make public transportation in the Klang Valley more accessible to everyone, including tourists."

export async function GeneralHomepage (page) {
    await expect (page).toHaveTitle(PageTitle);

    const MetaDescription = await page.getAttribute('meta[description]', 'description');
    expect (MetaDescription).toBe(PageMetaTag);
}

export async function CommuteLogo (page) {
    const Logo = page.locator('img[src="logo.svg"]')
 
    await expect(Logo).toBeVisible();
    await expect(Logo).toHaveCount(1);
    await expect(Logo).toHaveAttribute('src', 'logo.svg');

}

export async function HeroTextContent (page) {
    await expect(page.getByText('Commute')).toBeVisible();
    await expect(page.getByText('Making Klang Valley public transport easier for everyone – locals & tourists alike.')).toBeVisible();
}

export async function Pathfinder (page) {
    await expect(page.getByText('Plan Your Journey')).toBeVisible();
    await expect(page.getByText('Find the best route across RapidKL lines.')).toBeVisible();

    const originField = page.getByPlaceholder('Origin');
    await expect(originField).toBeVisible();
    await expect(originField).toHaveAttribute('placeholder', 'Origin');

    const destinationField = page.getByPlaceholder('Destination');
    await expect(destinationField).toBeVisible();
    await expect(destinationField).toHaveAttribute('placeholder', 'Destination');

    const swapButton = page.getByRole('button', { name: 'Swap origin and destination' });
    await expect(swapButton).toBeVisible();
}


