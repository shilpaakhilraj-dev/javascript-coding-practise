// Find the sum of numbers from 1 to 100.

function sum(startValue, endValue) {
  let total = 0;
  for (let i = startValue; i <= endValue; i++) {
    total = total + i;
  }
  return total;
}

console.log(sum(1, 100));