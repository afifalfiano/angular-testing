import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Frontend Testing');
  });

  it('should fill username and password', async () => {
    element(by.id('username')).sendKeys('afif');
    element(by.id('password')).sendKeys('12345');
    expect(await page.getInputText()).toBe('afif');
    expect(await page.getInputPassword()).toBe('12345');
  });



});
