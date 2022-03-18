const Page = require('./page');

class OverallPage extends Page {
  /**
   * define selectors using getter methods
 */
  get images() {
    return $$('.cars img-thumbnail');
  }

  get pageCount() {
    return $('.row div.pull-xs-right');
  }

  /**
    * overwrite specific options to adapt it to Register page object
  */
  open() {
    return super.open('overall');
  }
}

module.exports = new OverallPage();