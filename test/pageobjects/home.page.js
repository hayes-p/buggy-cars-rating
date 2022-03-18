const Page = require('./page');
// const CommonPage = require('./common.page');

/**
 * sub page containing specific selectors and methods for the Home page
 */
class HomePage extends Page {
  /**
    * define selectors using getter methods
  */
  get inputUsername() {
    return $('input[name="login"]');
  }

  get inputPassword() {
    return $('input[name="password"]');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get popularMakeDetails() {
    return $('//*[text() = "Popular Make"]/..//h3');
  }

  get popularModelDetails() {
    return $('//*[text() = "Popular Model"]/..//h3');
  }

  get overallRatingDetails() {
    return $('//*[text() = "Overall Rating"]/..//a');
  }

  /**
    * automation method to interact with the page
    * e.g. to login using username and password
  */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

}

module.exports = new HomePage();