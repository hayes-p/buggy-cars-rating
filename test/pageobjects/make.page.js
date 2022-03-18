const Page = require('./page');

class MakePage extends Page {
  /**
    * define selectors using getter methods for logging in
  */
  get viewMoreLink() {
    return $('table tbody tr:nth-child(3) td:nth-child(5) a');
  }

  /**
    * overwrite specific options to adapt it to Register page object
  */
  open() {
    return super.open('make/c4u1mqnarscc72is00e0');
  }
}

module.exports = new MakePage();