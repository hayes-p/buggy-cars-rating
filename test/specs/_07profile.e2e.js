const ProfilePage = require('../pageobjects/profile.page');
const CommonPage = require('../pageobjects/common.page');

describe('My Profile', () => {
  it('should fill additional info', async () => {
    await ProfilePage.open('');

    await CommonPage.login('DanDare', '@Abc123Def15');

    await ProfilePage.profileLink.click();
    
    await ProfilePage.fillAdditionalInfo('Male', '32', `Sherlock Holmes 221B Baker Street`, '027665544', 'Reading', '@Abc123Def4', '@Abc123Def5');

    await expect(CommonPage.alertSuccess).toHaveText('The profile has been saved successful');
  });

  it('should display homepage on logout', async () => {
    await CommonPage.logout();
    await CommonPage.inputUsername.waitForDisplayed();

    await expect(browser).toHaveUrl('https://buggy.justtestit.org/');
  });

});
