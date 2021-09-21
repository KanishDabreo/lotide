const assertObjectsEqual = require('../assertObjectsEqual');

//test code
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })