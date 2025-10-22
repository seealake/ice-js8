function powerRecursive(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * powerRecursive(base, exp - 1);
  }
}

/*
  Implement a NON-recursive version of the above function
*/

function power(base, exp) {
  // your code here
  // not "return base ** exp;"
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
