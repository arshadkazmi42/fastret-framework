# fastret-framework

[![Build Status](https://travis-ci.com/arshadkazmi42/fastret-framework.svg?branch=master)](https://travis-ci.com/arshadkazmi42/fastret-framework)

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
// Output
// ✔ Passed: GET API TEST
// ✖ Failed: GET API WRONG TEST

```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/fastret-framework/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
