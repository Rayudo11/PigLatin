'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
const { stringify } = require('querystring');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// We must indicate that we are looking for vowels in our input//
const vowels = ['a','e','i','o','u'];
let newWord = '';
let ending = 'yay';
let ending2 = 'ay';
//We create the part of the function for when the first letter in the string is a vowel//
const pigLatin = (str) => {
  if (vowels.includes(str[0])){
  let lowerC = newWord.toLowerCase();
  return  lowerC + ending
  }
  // now we create the part of the function where if the word starts with a consonant; save the consonants and find the first vowel//
  else{
   let consonants='';
   for(let i = 0; i < str.length; i++){
     if (vowels.includes(str[i])){
      break;
      }
     consonants += str[i];
    }
   return str.substring(consonants.length) + consonants + ending2;
  }

}

pigLatin('Climb')



  // Your code here


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
