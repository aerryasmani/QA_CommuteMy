import {test, expect} from '@playwright/test';
import {
    GeneralHomepage
} from '../helpers/homepage';

const BaseUrl ='https://commute.my/';

test.beforeEach( async ({page}) =>{
    await page.goto(BaseUrl);
});


test.describe('Homepage',()=>{

    test.describe('Page Load Elements',()=>{

        test ('Homepage - 001 | Page Load - Title and Meta Tags',async ({page}) => {
            await GeneralHomepage(page);
        });

        test ('Homepage - 002 | Page Load - Logo Display',async ({page}) => {
  
        });

        test ('Homepage - 003 | Page Load - Main Heading Display',async ({page}) => {
    
        });

        test ('Homepage - 004 | Page Load - Tagline Display',async ({page}) => {
    
        });

    });

    test.describe('Pathfinder Section',()=>{

        test ('005 | Path Finder Section is present',async ({page}) => {
        
        });

        test ('006 | Path Finder field is present and functional',async ({page}) => {
   
        });

        test ('007 | Path Finder Search Route button is present and visible',async ({page}) => {
   
        });

    });
    
    test.describe('Browse Line Section',()=>{

        test ('008 | Browse Line Section is present and visible',async ({page}) => {
   
        });

        test ('009 | Browse Line button is present and visible',async ({page}) => {
 
        });

    });

    test.describe('Footer Section',()=>{

        test ('010 | Footer section is present and visible',async ({page}) => {
  
        });
    
    });

})
