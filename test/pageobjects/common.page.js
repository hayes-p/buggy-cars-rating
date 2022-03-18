const Page = require('./page');

/**
 * sub page containing specific selectors and methods
 */
class CommonPage extends Page {
  /**
    * define selectors using getter methods for home link
  */
  get homeLink() {
    return $('a.navbar-brand');
  }

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

  get profileGreeting() {
    return $('ul li:first-child span');
  }

  get logoutLink() {
    return $('//a[text() = "Logout"]');
  }

  get facebookLink() {
    return $('a[title="Facebook"]');
  }

  get twitterLink() {
    return $('a[title="Twitter"]');
  }

  get copyright() {
    return $('footer p');
  }

  get alertSuccess() {
    return $('.alert-success');
  }

  get buggyRatingLogo() {
    return $('.navbar-brand');
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

  async logout() {
    await this.logoutLink.click();
  }

  async equalsIgnoreOrder(a, b) {
    if(a.length != b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for(const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if(aCount !== bCount) return false;
    }
  }


  /**
    * automation method to interact with the page
    * e.g. to login using username and password
  */

}

module.exports = new CommonPage();