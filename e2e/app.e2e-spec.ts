import { Ang2RxjsChatPage } from './app.po';

describe('ang-2-rxjs-chat App', function() {
  let page: Ang2RxjsChatPage;

  beforeEach(() => {
    page = new Ang2RxjsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
