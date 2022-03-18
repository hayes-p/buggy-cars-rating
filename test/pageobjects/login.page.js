const Page = require('./page');

/**
 * sub page containing specific selectors and methods
 */
class LoginPage extends Page {
  /**
    * define selectors using getter methods for logging in
  */
  get inputUsername() {
    return $('input[name="login"]');
  }

  get inputPassword() {
    return $('input[name="password"]');
  }

  get btnSubmit() {
    return $('.btn-success[type="submit"]');
  }

  get profileLink() {
    return $('ul li a[href="/profile"]');
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

module.exports = new LoginPage();