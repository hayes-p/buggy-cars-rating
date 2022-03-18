const CommonPage = require('../pageobjects/common.page');

describe('My Loggin application', () => {
  it('should login with valid credentials', async () => {
    await browser.url('https://buggy.justtestit.org/');

    await CommonPage.login('DanDare', '@Abc123Def15');
  });
  
  it('should display logged in state', async () => {
    await CommonPage.profileGreeting.waitForDisplayed();

    await expect(CommonPage.profileGreeting).toHaveText('Hi, Noob');
  });
});
