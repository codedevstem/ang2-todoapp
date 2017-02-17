import { browser, element, by } from 'protractor';

export class TodoappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-root h1')).getText();
  }
}
