describe('click around nonAngular', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });

    it('access 737', function () {
        browser.get('http://cs.gmu.edu/~offutt/');
        browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('737'))));
        element(by.linkText('737')).click();
        browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('Schedule'))));
        element(by.linkText('Schedule')).click();
        browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('Schedule'))));
    });
});