function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  }
  if (typeof x === 'string' || Array.isArray(x)) {
    return x.length; // Access length only if x is a string or an array
  } else {
    return -1; // Or throw an error, or handle it appropriately
  }
}

console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1
console.log(foo(5)); // Output: -1
console.log(foo("hello")); // Output: 5