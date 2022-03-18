const ModelPage = require('../pageobjects/model.page');
const CommonPage = require('../pageobjects/common.page');
const { vote } = require('../pageobjects/model.page');

describe('Select buggy car make', () => {
  it('should validate model page is clickable', async () => {
    await browser.url('https://buggy.justtestit.org');
    const popularModel = await ModelPage.modelLink;
    await expect(popularModel).toBeClickable();
  });

  it('should be able to login', async () => {
    await CommonPage.login('DanDare', '@Abc123Def15');
    await expect(CommonPage.profileGreeting).toHaveText('Hi, Noob');
  });


  it('should validate view more link is clickable', async () => {
    await browser.url('https://buggy.justtestit.org/overall');
    const viewMoreLink = await ModelPage.viewMoreLink;
    await expect(viewMoreLink).toHaveLinkContaining('/model/');
    await expect(viewMoreLink).toBeClickable();
    await viewMoreLink.click();
  });

  it('fill in and submit vote', async () => {
    
    if (await ModelPage.commentField.isDisplayedInViewport()) {
      await ModelPage.vote('<strong>Testing Testing</strong>');

      await ModelPage.cardText.waitForDisplayed();
      const cardText = await ModelPage.cardText;

      await expect(cardText).toHaveTextContaining('Thank you for your vote!');
    }
    
  });

  it('Should display author and comments', async () => {
    const author = await ModelPage.authorName;
    const comment = await ModelPage.commentsDisplayed;

    await expect(author).toHaveText('Noob Saibot');
    await expect(comment).toHaveText('<strong>Testing Testing</strong>');
  });

  it('should validate buggy rating logo link is valid', async () => {
    const buggyRatingLogo = await CommonPage.buggyRatingLogo;
    await expect(buggyRatingLogo).toHaveLinkContaining('/');
    await expect(buggyRatingLogo).toBeClickable();
  });

});
