function foo(a, b) {
  // Handle undefined and null values
  a = a === undefined ? 0 : a;
  a = a === null ? 0 : a;

  return a + b; 
}

console.log(foo(undefined, 2)); // 2
console.log(foo(null, 2)); // 2
console.log(foo(0, 2));      //2