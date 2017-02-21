import { TodoMeanAppPage } from './app.po';

describe('todo-mean-app App', function() {
  let page: TodoMeanAppPage;

  beforeEach(() => {
    page = new TodoMeanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
