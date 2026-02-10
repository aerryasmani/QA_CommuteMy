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

export async function PathfinderUI (page) {
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

    const searchRouteButton = page.locator('button', { hasText: 'Search Route',});

    console.log('Button count:', await searchRouteButton.count());
    console.log('Button text:', await searchRouteButton.innerText());
    console.log('Is disabled:', await searchRouteButton.isDisabled());
    console.log('Disabled attribute:', await searchRouteButton.getAttribute('disabled'));

    await expect(searchRouteButton).toBeDisabled();

}

export async function PathfinderInput (page){

    const originField = page.getByPlaceholder('Origin');
    const destinationField = page.getByPlaceholder('Destination');

    await originField.fill ('KL Sentral')
    await destinationField.fill ('Masjid Jamek')

    await originField.clear();
    await expect(originField).toHaveValue('');

    await destinationField.clear();
    await expect(destinationField).toHaveValue('');
}

export async function PathfinderSwapButton (page){
    
    const originField = page.getByPlaceholder('Origin');
    const destinationField = page.getByPlaceholder('Destination');
    const swapButton = page.getByRole('button', { name: 'Swap origin and destination' });
    
    await originField.fill ('KL Sentral')
    await destinationField.fill ('Masjid Jamek')

    for (let i = 0; i < 3; i++) {
        await swapButton.click();
  
        if (i % 2 === 0) {
        // After odd clicks (1st, 3rd, etc.)
        await expect(originField).toHaveValue('Masjid Jamek');
        await expect(destinationField).toHaveValue('KL Sentral');
        } 
        else {
        await expect(originField).toHaveValue('KL Sentral');
        await expect(destinationField).toHaveValue('Masjid Jamek');
         }
    }
}

export async function PathfinderSearchButton (page){
const searchRouteButton = page.locator('button', { hasText: 'Search Route' });

const originField = page.getByPlaceholder('Origin');
const destinationField = page.getByPlaceholder('Destination');

// ---- ORIGIN ----
await originField.fill('KL Sentral');

const originOption = page.locator('text=KL Sentral').first();
await expect(originOption).toBeVisible();
await originOption.click();

// ---- DESTINATION ----
await destinationField.fill('Masjid Jamek');

const destinationOption = page.locator('text=MASJID JAMEK').first();
await expect(destinationOption).toBeVisible();
await destinationOption.click();

// ---- ASSERT & CLICK ----
await expect(searchRouteButton).toBeEnabled();
await searchRouteButton.click();

}


