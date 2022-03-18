const Page = require('../pageobjects/page');
const OverallPage = require('../pageobjects/overall.page');
const CommonPage = require('../pageobjects/common.page');

describe('Overall Ratings Page', () => {
  it('should have no broken images', async () => {
    await OverallPage.open();
    
    await OverallPage.pageCount.waitForDisplayed();
    const pageCount = await (await OverallPage.pageCount.getText()).trim();
    const totalPages = await parseInt(pageCount.substring(14, 15));
    
    const forwardBtn = await $('.form-control + a.btn');

    const forLoop = async () => {
        await $('.img-thumbnail').waitForDisplayed();
        let invalidImages = 0;
        let images = await $$('.img-thumbnail');

        for (let j=0; j<images.length; j++) {
          let imgHeight1 = await images[j].getSize('height');
          if (imgHeight1 === 34) {
            invalidImages++;
          }
        }
      await expect(invalidImages).toEqual(0);
    }

    for (let i = 0; i < totalPages; i++) {
      
      await forwardBtn.waitForClickable();
      await browser.pause(1000);
      await forLoop();
      await forwardBtn.click();
    }

  });

  it('should link to social media site', async () => {
    const facebookLink = await CommonPage.facebookLink;
    const twitterLink = await CommonPage.twitterLink;

    await expect(facebookLink).toHaveHref('https://www.facebook.com');
    await expect(twitterLink).toHaveHref('https://www.twitter.com');
  });

  it('should validate buggy rating logo is clickable', async () => {
    const buggyRatingLogo = await CommonPage.buggyRatingLogo;
    await expect(buggyRatingLogo).toHaveLinkContaining('/');
  });

  it('should click on the overall rating link and verify the new url', async () => {
    const buggyRatingLogo = await CommonPage.buggyRatingLogo;
    await buggyRatingLogo.click();
    await expect(browser).toHaveUrl('https://buggy.justtestit.org/');
  });
});