# fastret-framework
[![Build](https://img.shields.io/travis/com/arshadkazmi42/fastret-framework.svg)](https://travis-ci.com/arshadkazmi42/fastret-framework/)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/fastret-framework.svg)](https://github.com/arshadkazmi42/fastret-framework)
[![LICENSE](https://img.shields.io/npm/l/fastret-framework.svg)](https://github.com/arshadkazmi42/fastret-framework/blob/master/LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/fastret-framework.svg)](https://www.npmjs.com/package/fastret-framework)
[![NPM Version](https://img.shields.io/npm/v/fastret-framework.svg)](https://www.npmjs.com/package/fastret-framework)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/fastret-framework.svg)](https://github.com/arshadkazmi42/fastret-framework/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/fastret-framework.svg)](https://github.com/arshadkazmi42/fastret-framework/commits/master)


Fastest rest api test suite builder

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install fastret-framework --save
```

## Usage

```javascript
const FastRet = require('fastret-framework');

const TEST_API = [
  {
    'name': 'GET API TEST',
    'url': 'https://jsonplaceholder.typicode.com/todos/1',
    'headers': {},
    'body': {},
    'method': 'GET',
    'skip_keys': ['title'],
    'response': {
      'userId': 1,
      'id': 1,
      'title': 'delectus aut aute',
      'completed': false
    }
  },
  {
    'name': 'GET API WRONG TEST',
    'url': 'https://jsonplaceholder.typicode.com/todos/2',
    'headers': {},
    'body': {},
    'method': 'GET',
    'skip_keys': ['title'],
    'response': {
      'userId': 1,
      'id': 1,
      'title': 'delectus aut aute',
      'completed': false
    }
  }
];

const fastRetSuite = new FastRet(TEST_API);

// Executes all the tests
fastRetSuite.execute();

// Output
// ✔ Passed: GET API TEST
// ✖ Failed: GET API WRONG TEST

```

## API

#### `execute()`

Executes all the tests, shows test results in console. Also stores all the test results in `results`

#### `isValid()`

Validates if the input json contains all the required parameters

#### `this.data`

Contains the complete input test json

#### `this.results`

Contains all the tests results of `execute()` api

###### Data Structure
```javascript
{
  "name": "NAME_OF_THE_API",
  "isPassed": "PASSED_STATUS",
  "errorMessage": "ERROR_MESSAGE" // if api failed with some error message
}
```

> This gets updated once execute api is completed.

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/fastret-framework/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a><a href="https://github.com/atjustbeinghumaid"><img src="https://github.com/atjustbeinghumaid.png" width="30" /></a>
