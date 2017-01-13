import { AngularHamburgPage } from './app.po';

describe('angular-hamburg App', function() {
  let page: AngularHamburgPage;

  beforeEach(() => {
    page = new AngularHamburgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
