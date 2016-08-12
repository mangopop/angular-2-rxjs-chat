<<<<<<< HEAD
import { Ang2RxjsChatPage } from './app.po';

describe('ang-2-rxjs-chat App', function() {
  let page: Ang2RxjsChatPage;

  beforeEach(() => {
    page = new Ang2RxjsChatPage();
=======
import { RxjsChatPage } from './app.po';

describe('rxjs-chat App', function() {
  let page: RxjsChatPage;

  beforeEach(() => {
    page = new RxjsChatPage();
>>>>>>> 581ceded1e08f21faca9ed4a287a1444d1c716a1
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
