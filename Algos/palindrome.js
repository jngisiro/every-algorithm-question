// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
};

function palindrome(str) {
  const revString = str.split('').reverse().join('');

  return str === revString;
};


module.exports = palindrome;


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every