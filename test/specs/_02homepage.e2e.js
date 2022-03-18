const HomePage = require("../pageobjects/home.page");
const CommonPage = require("../pageobjects/common.page");

describe('My homepage', () => {
  it('should validate populare models ', async () => {
    await browser.url('https://buggy.justtestit.org/overall');

    await $("table").waitForDisplayed();

    const actualPopularMake = await $("table tr:nth-child(1) td:nth-child(2) a").getText();
    const actualPopularModel = await $("table tr:nth-child(1) td:nth-child(3) a").getText();
    const actualPopularVotes = await $("table tr:nth-child(1) td:nth-child(5)").getText();
    const actualPopularDetails = `${actualPopularMake} ${actualPopularModel} (${actualPopularVotes} votes)`;

    await browser.url('https://buggy.justtestit.org/');

    await HomePage.popularModelDetails.waitForDisplayed();
    const popularModelDetails = await (await HomePage.popularModelDetails).getText();

    await expect(popularModelDetails.replace('\n', ' ')).toEqual(actualPopularDetails);
  });


  it('should link to social media site', async () => {
    const facebookLink = await CommonPage.facebookLink;
    const twitterLink = await CommonPage.twitterLink;

    await expect(facebookLink).toHaveHref('https://www.facebook.com');
    await expect(twitterLink).toHaveHref('https://www.twitter.com');
  });

  it('should validate overall rating is clickable', async () => {
    const overallRatingsImgLink = await HomePage.overallRatingDetails;
    await expect(overallRatingsImgLink).toHaveLinkContaining('/overall');
    await expect(overallRatingsImgLink).toBeClickable();
  });

  it('should click on the overall rating link and verify the new url', async () => {
    const overallRatingsImgLink = await HomePage.overallRatingDetails;
    await overallRatingsImgLink.click();
    await expect(browser).toHaveUrl('https://buggy.justtestit.org/overall');
  });

  it('should login with valid credentials', async () => {
    await browser.url('https://buggy.justtestit.org/');
    await CommonPage.login('DanDare', '@Abc123Def15');
    await CommonPage.profileGreeting.waitForDisplayed();

    await expect(CommonPage.profileGreeting).toHaveText('Hi, Noob');
  });
  it('should logout', async () => {
    await CommonPage.logout();
    await CommonPage.inputUsername.waitForDisplayed();

    await expect(CommonPage.inputUsername).toBeClickable();
  });
  
  it('should display copyright with current year', async () => {
    const year = new Date().getFullYear();
    await expect(CommonPage.copyright).toHaveTextContaining(year);
  });

});
