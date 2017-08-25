import { TahotPage } from './app.po';

describe('tahot App', () => {
  let page: TahotPage;

  beforeEach(() => {
    page = new TahotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
