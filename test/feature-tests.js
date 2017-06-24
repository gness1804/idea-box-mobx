/* eslint-disable func-names, prefer-arrow-callback*/

const assert = require('assert');
const webdriver = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');
const fakeIdeas = require('./helpers/fakeIdeas');

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

test.describe('App', function () {
  this.timeout(15000);

  test.beforeEach(function () {
    driver.get('http://localhost:3000');
  });

  function enterIdea(num) {
    if (!num) {
      /* eslint-disable no-console */
      console.log('Error in test: needs number arg for enterIdea.');
      return;
    }
    if (num > 3 || num < 0) {
      console.log('Error in test: you must enter in a whole number between 1 and 3.');
      /* eslint-enable no-console */
    }
    for (let i = 0; i < num; i++) {
      const name = driver.findElement({ id: 'name-input' });
      const body = driver.findElement({ id: 'body-input' });
      const button = driver.findElement({ id: 'main-button' });
      name.sendKeys(fakeIdeas[i].name);
      body.sendKeys(fakeIdeas[i].body);
      button.click();
    }
  }

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

  test.it('App should tell user that there are no ideas yet on load (through message string)', function () {
    driver.findElement({ className: 'no-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'No ideas yet. Please enter one in now.');
    });
  });

  test.it('App should tell user that there are no ideas yet on load (through total ideas on page)', function () {
    driver.findElement({ className: 'total-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Total ideas on page: 0');
    });
  });

  test.it('Clicking submit with insufficient data should not enter an idea onto the page', function () {
    const name = driver.findElement({ id: 'name-input' });
    const button = driver.findElement({ id: 'main-button' });
    name.sendKeys(fakeIdeas[0].name);
    button.click();
    driver.findElement({ id: 'error-mssg' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Error: you must enter in a name and a body. Please try again.');
    });
    driver.findElement({ className: 'total-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Total ideas on page: 0');
    });
    driver.findElement({ className: 'no-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'No ideas yet. Please enter one in now.');
    });
  });

  test.it('Entering in an idea should display appropriate data', function () {
    enterIdea(1);
    driver.findElement({ className: 'idea-name' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Bake a cake', 'The name should appear correctly.');
    });
    driver.findElement({ className: 'idea-description' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Description: Go to the store, get the items, then go home and bake the cake.', 'The body should appear correctly.');
    });
    driver.findElement({ className: 'total-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Total ideas on page: 1', 'The total ideas on page message has updated to reflect one idea being added.');
    });
    driver.findElement({ className: 'delete-idea-button' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Delete Idea');
    });
    driver.findElement({ className: 'upvote-idea-button' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Upvote');
    });
    driver.findElement({ className: 'downvote-idea-button' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Downvote');
    });
  });

  test.it('Delete button should work', function () {
    enterIdea(1);
    const button = driver.findElement({ className: 'delete-idea-button' });
    button.click();
    driver.findElement({ className: 'total-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Total ideas on page: 0');
    });
    driver.findElement({ className: 'no-ideas-message' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'No ideas yet. Please enter one in now.');
    });
  });

  test.it('Upvote button should work', function () {
    enterIdea(1);
    const button = driver.findElement({ className: 'upvote-idea-button' });
    button.click();
    driver.findElement({ className: 'quality-description' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Quality: Plausible');
    });
  });

  test.it('Downvote button should work', function () {
    enterIdea(1);
    const buttonUp = driver.findElement({ className: 'upvote-idea-button' });
    buttonUp.click();
    const buttonDown = driver.findElement({ className: 'downvote-idea-button' });
    buttonDown.click();
    driver.findElement({ className: 'quality-description' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Quality: Swill');
    });
  });

  test.it('Entering in two ideas should produce two ideas on the page', function () {
    enterIdea(2);
    driver.findElements({ className: 'idea-name' }).then(function (name) {
      assert.strictEqual(name.length, 2);
    });
  });

  test.it('should sort ideas correctly by date added', function () {
    enterIdea(3);
    const button = driver.findElement({ className: 'sort-by-id-button' });
    button.click();
    driver.findElement({ className: 'idea-name' }).then(function (element) {
      return element.getText();
    }).then(function (text) {
      assert.strictEqual(text, 'Build a jigsaw puzzle');
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback*/
