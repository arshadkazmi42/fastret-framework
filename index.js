const ora = require('ora');
const isObj = require('is-obj');
const fastRet = require('fastret');
const jkValidate = require('json-key-validate');

const spinner = ora();

const REQUIRED_KEYS = ['name', 'url', 'method', 'response'];


function FastRet(data) {
  if (!isObj(data)) {
    throw new Error('Invalid JSON');
  }

  // Validates if data has required parameters
  if (!this.isValid(data)) {
    throw new Error('Required Parameters Missing');
  }

  this.data = data;
  this.results = [];
}

// Execute the tests and store results
FastRet.prototype.execute = async function() {
  for (let i=0; i<this.data.length; i++) {
    const data = this.data[i];

    // Start spinner
    spinner.start([data.name]);

    // Calls the api and validates the response with expected response
    let isPassed = false;
    let errorMessage = '';
    try {
      isPassed = await fastRet(data);
    } catch (err) {
      isPassed = false;
      errorMessage = err.message;
    }

    // Storing test results
    this.results.push({
      name: data.name,
      passed: isPassed,
      errorMessage: errorMessage
    });

    // Stop Spinner
    // Show tick or cross based on test result
    if (isPassed) {
      spinner.succeed([`Passed: ${data.name}`]);
    } else {
      spinner.fail([`Failed: ${data.name} => (${errorMessage})`]);
    }
  }
};

// Validates if input test api structure contains all required parameters
FastRet.prototype.isValid = function(data) {
  if (!data) {
    return false;
  }

  for (let i=0; i<data.length; i++) {
    if (!jkValidate(data[i], REQUIRED_KEYS)) {
      return false;
    }
  }

  return true;
};


module.exports = FastRet;
