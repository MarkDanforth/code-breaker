import { MastermindPage } from './app.po';

describe('mastermind App', () => {
  let page: MastermindPage;

  beforeEach(() => {
    page = new MastermindPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
