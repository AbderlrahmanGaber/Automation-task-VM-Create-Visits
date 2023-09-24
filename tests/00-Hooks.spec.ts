import { chromium, expect, test } from '@playwright/test';

import { loginPage } from './POM/login.page';

const BOUrl = 'http://Abdelrahman-ramadan:daboalex@dev-testing.andalusiagroup.net:5001/';
const MedUrl = 'http://Abdelrahman-ramadan:daboalex@dev-testing.andalusiagroup.net:6001/SercurityService/api/security/login/';

test("login",async ({page}) => {
    const browser=chromium.launch();
    const context=(await browser).newContext();
   //const page=(await context).newPage();
    const login = new loginPage(page);
  await login.Nav_to_Dotcare(MedUrl);
  await login.Nav_to_Dotcare(BOUrl);
  await login.login_to_DotCare('orban','123456');
  await page.waitForURL(/.*dashboard/);
  await expect(page).toHaveURL(/.*dashboard/);
  await page.context().storageState({path:'./LoginAuth.json'});
   
  
  });
