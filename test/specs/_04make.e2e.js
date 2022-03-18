const MakePage = require("../pageobjects/make.page");
const CommonPage = require('../pageobjects/common.page');

describe('Select buggy car make', () => {
  it('should validate view more link is clickable', async () => {
    await MakePage.open();
    const viewMoreLink = await MakePage.viewMoreLink;
    await expect(viewMoreLink).toHaveLinkContaining('/model/');
    await expect(viewMoreLink).toBeClickable();
  });

  it('should validate buggy rating logo is valid', async () => {
    const buggyRatingLogo = await CommonPage.buggyRatingLogo;
    await expect(buggyRatingLogo).toHaveLink('https://buggy.justtestit.org/');
  });

  it('should link to social media site', async () => {
    const facebookLink = await CommonPage.facebookLink;
    const twitterLink = await CommonPage.twitterLink;

    await expect(facebookLink).toHaveHref('https://www.facebook.com');
    await expect(twitterLink).toHaveHref('https://www.twitter.com');
  });

  it('should click on the view more link and verify the new url', async () => {
    const viewMoreLink = await MakePage.viewMoreLink;
    await viewMoreLink.click();
    await expect(browser).toHaveUrl('https://buggy.justtestit.org/model/c4u1mqnarscc72is00e0%7Cc4u1mqnarscc72is00fg');
  });
});
