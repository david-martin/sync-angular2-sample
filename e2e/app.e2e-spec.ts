import { SyncAngular2SamplePage } from './app.po';

describe('sync-angular2-sample App', function() {
  let page: SyncAngular2SamplePage;

  beforeEach(() => {
    page = new SyncAngular2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
