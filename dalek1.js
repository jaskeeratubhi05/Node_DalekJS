module.exports = {
'Page title is correct': function (test) {
  test
    .open('http://google.com')
    .assert.title().is('Google', 'It has title')
	.type('#lst-ib', 'selenium')
	.submit('#lst-ib')
	.click('#rso > div > div > div:nth-child(1) > div > div > h3 > a')
	.assert.title().is('Selenium - Web Browser Automation', 'It has title')
	.done();
}
};