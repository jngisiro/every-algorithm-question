// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// Recursion Tips
// Figure out the bare minimum pieces of information to reprsent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do the work. Call your function again, making sure the arguments have changed in some fashio

// If (row === n) then we have hit the end of our problem
// If the 'stair' has a (length === n) then we are the end of the row
// If the length of the stair string is less than equal or equal to the row we are working on
// we add a '#', otherwise add a space



// Iterative Solution
// From 0 to n (iterate through rows)
// Create an emptry string, 'stair'
// From 0 to n (iterate through columns)
// IF the current column is equal to or less than the current row
// Add a '#' to 'stair'
// ELSE
// Add a space to 'stair'
// console.log stair

/* function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
} */


