// Write a function called areThereDuplicates
// which accepts a variable number of arguements
// and checks whether there are any duplicates among the arguments passed in
// you can solve this using the frequency counter pattern or the multiple pointers pattern
// example:
// function(1, 2, 3) // false
// function(1, 2, 2) // true
// function('a', 'b', 'c', 'd') // true


// Frequency Counter Solution 
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}

// Multiple Pointers Solution 
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

// areThereDuplicates One-Line

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set