import {test,expect} from '@playwright/test';

const PageTitle ="Commute"
const PageMetaTag ="A project aims to make public transportation in the Klang Valley more accessible to everyone, including tourists."

export async function GeneralHomepage (page) {
    await expect (page).toHaveTitle(PageTitle);

    const MetaDescription = await page.getAttribute('meta[description]', 'description');
    expect (MetaDescription).toBe(PageMetaTag);
}