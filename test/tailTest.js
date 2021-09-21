// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); //  3 elements!


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['is', 'lighthouse', 'labs'] for ['This', 'is', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['This', 'is', 'lighthouse', 'labs']), ['is', 'lighthouse', 'labs']); 
  });
});