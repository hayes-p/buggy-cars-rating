const Page = require('./page');

/**
 * sub page containing specific selectors and methods for the Register page
 */
class RegisterPage extends Page {
  /**
    * define selectors using getter methods
  */
  get inputUsername() {
    return $('#username');
  }

  get inputFirstName() {
    return $('#firstName');
  }

  get inputLastName() {
    return $('#lastName');
  }

  get inputPassword() {
    return $('#password');
  }

  get inputConfirmPassword() {
    return $('#confirmPassword');
  }

  get btnSubmit() {
    return $('.btn-default[type="submit"]');
  }

  get btnRegister() {
    return $('.btn-success-outline[href="/register"]');
  }

  get alertSuccess() {
    return $('.alert-success');
  }

  get alertDanger() {
    return $('.alert-danger');
  }

  /**
    * a method to encapsule automation code to interact with the page
    * e.g. to login using username and password
  */
  async register(username, firstName, lastName, password) {
    await this.inputUsername.setValue(username);
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
    * overwrite specific options to adapt it to Register page object
  */
  open() {
    return super.open('register');
  }
}

module.exports = new RegisterPage();
