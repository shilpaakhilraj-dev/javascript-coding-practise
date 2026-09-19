function maxTwoNumbers(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    if (a > b) {
      return a + ' is greater';
    } else {
      return b + ' is greater';
    }
  }
  return 'Please provide valid numbers';
}

console.log(maxTwoNumbers(0, 3))