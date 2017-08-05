import { Ang4clientPage } from './app.po';

describe('ang4client App', () => {
  let page: Ang4clientPage;

  beforeEach(() => {
    page = new Ang4clientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
