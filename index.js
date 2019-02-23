const ora = require('ora');
const isObj = require('is-obj');
const fastRet = require('fastret');

const spinner = ora();


function FastRet(data) {
  if (!isObj(data)) {
    throw new Error('Invalid JSON');
  }

  this.data = data;
  this.results = [];
  this.requiredKeys = ['name', 'url', 'method', 'response']
}

// Execute the tests and store results
FastRet.prototype.execute = async function() {
  for (let i=0; i<this.data.length; i++) {
    const data = this.data[i];

    // Start spinner
    spinner.start([data.name]);

    // Calls the api and validates the response with expected response
    const isPassed = await fastRet(data);

    // Storing test results
    this.results.push({
      name: data.name,
      passed: isPassed
    });

    // Stop Spinner
    // Show tick or cross based on test result
    if (isPassed) {
      spinner.succeed([`${data.name} passed`]);
    } else {
      spinner.fail([`${data.name} failed`]);
    }
  }
};

FastRet.prototype.isValid = function() {
  if (!this.data) {
    return false;
  }

  for (let i=0; i<this.data.length; i++) {
    const keys = Object.keys(this.data[i]);
    for (let j=0; j<this.requiredKeys.length; j++) {
      //
    }
  }

  return true;
}


module.exports = FastRet;
