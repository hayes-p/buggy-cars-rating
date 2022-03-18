const Page = require('./page');

/**
 * sub page containing specific selectors and methods
 */
class ProfilePage extends Page {
  /**
    * define selectors using getter methods for logging in
  */
  get genderField() {
    return $('#gender');
  }

  get ageField() {
    return $('#age');
  }

  get addressField() {
    return $('#address');
  }

  get phoneField() {
    return $('#phone');
  }

  get hobbyField() {
    return $('#hobby');
  }

  get currentPasswordField() {
    return $('#currentPassword');
  }

  get newPasswordField() {
    return $('#newPassword');
  }

  get newConfirmPasswordField() {
    return $('#newPasswordConfirmation');
  }

  get saveBtn() {
    return $('button[type="submit"]');
  }

  get profileLink() {
    return $('ul li a[href="/profile"]');
  }

  async fillAdditionalInfo(gender, age, address, phone, hobby, currentPassword, newPassword) {
    await this.genderField.setValue(gender);
    await this.ageField.setValue(age);
    await this.addressField.setValue(address);
    await this.phoneField.setValue(phone);
    await this.hobbyField.selectByVisibleText(hobby);
    await this.currentPasswordField.setValue(currentPassword);
    await this.newPasswordField.setValue(newPassword);
    await this.newConfirmPasswordField.setValue(newPassword);
    await this.saveBtn.click();
  }

}

module.exports = new ProfilePage();