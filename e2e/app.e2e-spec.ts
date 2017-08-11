import { NgFutbolPage } from './app.po';

describe('ng-futbol App', () => {
  let page: NgFutbolPage;

  beforeEach(() => {
    page = new NgFutbolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
