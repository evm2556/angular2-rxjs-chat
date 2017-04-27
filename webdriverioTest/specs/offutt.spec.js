describe('Offutt class pages', function () {
    it('should return home', function () {
        browser.url('http://cs.gmu.edu/~offutt/');
        let classes = ['=737', '=205', '=301']
        let checkClass = function (myClass) {
            browser.click(myClass);
            //browser.pause(1000);
            browser.click('=My Home Page');
            //browser.pause(1000);
            var title = browser.getTitle();
            let classRef = myClass + ": "
            expect(classRef + title).toBe(classRef + 'Jeff Offutt home page');
        }
        classes.forEach(checkClass);
        browser.pause(2000);
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
    });

    it('should have schedules', function () {
        browser.url('http://cs.gmu.edu/~offutt/');
        let classes = ['=737', '=205', '=301']
        let checkClass = function (myClass) {
            //browser.pause(1000);
            browser.click(myClass);
            //browser.pause(1000);
            browser.click('=Schedule');
            //browser.pause(1000);
            browser.url('http://cs.gmu.edu/~offutt/');
        }
        classes.forEach(checkClass);
        browser.pause(2000);
    });
});