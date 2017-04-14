import { NightlyReportsPage } from './app.po';

describe('nightly-reports App', () => {
  let page: NightlyReportsPage;

  beforeEach(() => {
    page = new NightlyReportsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
