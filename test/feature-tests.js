/* eslint-disable func-names, prefer-arrow-callback*/

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

test.describe('App', function () {
  this.timeout(15000);

  test.beforeEach(function () {
    driver.get('http://localhost:3000');
  });

  test.it('title should render properly', function () {
    driver.findElement({ tagName: 'h1' }).then(function (title) {
      return title.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Idea Box');
    });
  });

  test.it('application should serve up two input fields on load', function () {
    driver.findElements({ tagName: 'input' }).then(function (select) {
      assert.equal(select.length, 2);
    });
  });

  test.it('value displayed in quality dropdown should be Swill by default', function () {
    driver.findElement(webdriver.By.css('#quality-field')).then(function (element) {
      return element.getAttribute('value');
    }).then(function (text) {
      assert.strictEqual(text, 'Swill');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback*/
