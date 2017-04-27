module.exports = {
    'Demo test Google': function (browser) {
        browser
            .url('http://cs.gmu.edu/~offutt/index.html')
            .waitForElementVisible('img[alt*="Jeff\'s picture"]', 1000)
            .click('img[alt*="Jeff\'s picture"]')
            .waitForElementVisible('img[alt*="1997"]', 1000)
            .click('img[alt*="1997"]')
            .pause(1000)
            .end();
    }
};