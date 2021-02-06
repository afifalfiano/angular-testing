import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  async getInputText(): Promise<string> {
    return element(by.css('input#username')).getAttribute('value');
  }

  async getInputPassword(): Promise<string> {
    return element(by.css('input#password')).getAttribute('value');
  }


}
