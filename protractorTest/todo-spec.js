describe('click around angularjs', function () {
  it('should navigate to CVS', function () {
    browser.get('https://angularjs.org');
    element(by.xpath('.//*[.="Learn"]')).click();
    browser.sleep(5000);
    element(by.xpath('.//*[.="Case Studies"]')).click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toEqual("https://www.madewithangular.com/");
    browser.sleep(5000);
    console.warn(browser.findElement(by.className('card')));
    browser.sleep(5000);
    element(by.linkText('Learn')).click();
    /*
    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var    = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
    */
    browser.sleep(5000)
  });
});