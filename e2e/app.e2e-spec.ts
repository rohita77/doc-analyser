import { MlImageClassifierPage } from './app.po';

describe('ml-image-classifier App', function() {
  let page: MlImageClassifierPage;

  beforeEach(() => {
    page = new MlImageClassifierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
