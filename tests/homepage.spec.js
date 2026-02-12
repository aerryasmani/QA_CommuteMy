import {test, expect} from '@playwright/test';
import {
    GeneralHomepage,
    CommuteLogo,
    HeroTextContent,
    PathfinderUI,
    PathfinderInput,
    PathfinderSwapButton,
    PathfinderSearchButton,
    PathfinderBottomPart,
    LinesButton,
    LinesButtonFunction
} from '../helpers/homepage';
import {
    NavSettingPage,
    ValidateSettingPage,
    NavDonatePage,
    ValidateDonatePage,
    VerifyAboutPage,
    NavAboutPage,
    trademark
} from '../helpers/general navigation';

const BaseUrl ='https://commute.my/';

test.beforeEach( async ({page}) =>{
    await page.goto(BaseUrl);
});


test.describe('Homepage',()=>{

    test.describe('Page Load Elements',()=>{

        test ('001 | Page Load - Title and Meta Tags',async ({page}) => {
            await GeneralHomepage(page);
        });

        test ('002 | Page Load - Logo Display',async ({page}) => {
            await CommuteLogo(page);
        });

        test ('003 | Page Load - Main Heading Display',async ({page}) => {
            await HeroTextContent(page);
            console.log("This works!");
        });

    });

    test.describe('Pathfinder Section',()=>{

        test ('004 | Path Finder Section is present',async ({page}) => {
            await PathfinderUI(page);
            await PathfinderSwapButton(page);
        });

        test ('005 | Path Finder field is present and functional',async ({page}) => {
            await PathfinderInput(page);
        });

        test ('006 | Path Finder swap button button is present and visible',async ({page}) => {
            await PathfinderInput(page);
            await PathfinderSwapButton(page);
        });

        test ('007 | Search Route button is present and working',async ({page}) => {
            await PathfinderInput(page);
            await PathfinderSearchButton(page);
        });

        test ('008 | Bottom text and github issue link is present',async ({page}) => {
            await PathfinderBottomPart(page);
            await GeneralHomepage(page);
        });

    });
    
    test.describe('Browse Line Section',()=>{

        test ('009 | Browse Line Section is present and visible',async ({page}) => {
            await LinesButton(page);
        });

        test ('010 | Validate the functionality of lines button',async ({page}) => {
            await LinesButtonFunction(page);
        });

    });

    test.describe('General Navigation',()=>{

        test ('011 | Verify Setting Page',async ({page}) => {
            await NavSettingPage(page);
            await ValidateSettingPage(page);
        });

        test ('012 | Verify Donate Page',async ({page}) => {
            await NavDonatePage(page);
            await ValidateDonatePage(page);
        });

        test ('013 | Verify About Page',async ({page}) => {
            await NavAboutPage(page);
            await VerifyAboutPage(page);
        });

        test ('014 | Footer Page',async ({page}) => {
            await trademark(page);
        });

    });

})
