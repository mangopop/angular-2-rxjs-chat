<<<<<<< HEAD
export class Ang2RxjsChatPage {
=======
export class RxjsChatPage {
>>>>>>> 581ceded1e08f21faca9ed4a287a1444d1c716a1
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
