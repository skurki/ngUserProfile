import { UPMPage } from './app.po';

describe('upm App', () => {
  let page: UPMPage;

  beforeEach(() => {
    page = new UPMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to User Profile Managment!!');
  });
});
