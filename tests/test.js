const expect = require('chai').expect;

const FastRet = require('../index');

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
    'name': 'POST API TEST',
    'url': 'https://jsonplaceholder.typicode.com/posts',
    'headers': {},
    'body': {
      'title': 'Test title',
      'body': 'Test post api body'
    },
    'method': 'POST',
    'skip_keys': ['id'],
    'response': {
      'title': 'Test title',
      'body': 'Test post api body'
    }
  }
];


describe('Generate Test Suite', () => {
  it('should generate the suite', async () => {
    const fastRetSuite = new FastRet(TEST_API);
    expect(fastRetSuite.data.length).to.greaterThan(0);
    expect(fastRetSuite.results.length).to.equal(0);
  });
  it('should execute the tests and store result', async () => {
    const fastRetSuite = new FastRet(TEST_API);
    await fastRetSuite.execute();
    expect(fastRetSuite.results.length).to.greaterThan(0);
    expect(fastRetSuite.results.length).to.equal(fastRetSuite.data.length);
  });
});
