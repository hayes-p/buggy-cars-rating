const Page = require('./page');

class ModelPage extends Page {
  /**
    * define selectors using getter methods for logging in
  */
  get commentField() {
    return $('#comment');
  }

  get voteBtn() {
    return $('//*[text() = "Vote!"]');
  }

  get authorName() {
    return $('table tbody tr:nth-child(1) td:nth-child(2)');
  }

  get commentsDisplayed() {
    return $('table tbody tr:nth-child(1) td:nth-child(3)');
  }

  get viewMoreLink() {
    return $('table tbody tr:nth-child(3) td:nth-child(7) a');
  }

  get cardText() {
    return $('.card-block .card-text');
  }

  get modelLink() {
    return $('//h2[text() = "Popular Model"]/following-sibling::a');
    // return $('//*[text() = "Popular Model"]/following-sibling::a');
  }

  async vote(comments) {
    await this.commentField.addValue(comments);
    await this.voteBtn.click();
  } 


  /**
   * overwrite specific options to adapt it to Register page object
 */
  open() {
    return super.open('make/c4u1mqnarscc72is00e0');
  }
}

module.exports = new ModelPage;