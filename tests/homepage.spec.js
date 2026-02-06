import {test, expect} from '@playwright/test';
import {
    GeneralHomepage
} from '../helpers/homepage';

const BaseUrl ='https://commute.my/';

test.beforeEach( async ({page}) =>{
    await page.goto(BaseUrl);
});

test ('UI-001 | General Homepage',async ({page}) => {
    await GeneralHomepage(page);

});