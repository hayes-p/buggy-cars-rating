const RegisterPage = require('../pageobjects/register.page');
const CommonPage = require('../pageobjects/common.page');

describe('My Registration', () => {
  it('should register with valid credentials', async () => {
    await RegisterPage.open();

    await RegisterPage.register('DanDare', 'Dan', 'Dare', '@Abc123Def15');

    await RegisterPage.alertSuccess.waitForDisplayed();
    
    await expect(RegisterPage.alertSuccess).toHaveTextContaining('Registration is successful');
  });

  it('should link to social media site', async () => {
    const facebookLink = await CommonPage.facebookLink;
    const twitterLink = await CommonPage.twitterLink;

    await expect(facebookLink).toHaveLinkContaining('https://www.facebook.com');
    await expect(twitterLink).toHaveLinkContaining('https://www.twitter.com');
  });

  it('should validate buggy rating logo is clickable', async () => {
    const buggyRatingLogo = await CommonPage.buggyRatingLogo;
    await expect(buggyRatingLogo).toHaveLinkContaining('/');
  });

});