const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKeys');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head: head,             
  tail: tail,             
  middle: middle,            
  assertEqual: assertEqual,     
  assertArrayEqual: assertArrayEqual,
  countLetters: countLetters,     
  countOnly: countOnly,       
  eqArrays: eqArrays,       
  eqObjects: eqObjects,      
  findKey: findKey,         
  findKeyByValue: findKeyByValue,  
  letterPositions: letterPositions,  
  map: map,             
  takeUntil: takeUntil,      
  without: without 
};
  