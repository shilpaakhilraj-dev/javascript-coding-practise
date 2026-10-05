// SOLUTION 1
let arr = [1, 2, 3, 4, 5, 1, 2];
console.log(method1(arr));
console.log(method2(arr));
console.log(method3(arr));

function method1(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) !== index;
  });
}

// SOLUTION 2
function method2(arr) {
  let duplicates = [];
  let seen = [];

  for (let item of arr) {
    if (seen.includes(item)) {
      duplicates.push(item);
    } else {
      seen.push(item);
    }
  }
  return { duplicates, seen };
}

// SOLUTION 3
function method3(arr) {
    return arr.reduce((acc, current) => {
        if (acc.seen.includes(current)) {
            acc.duplicates.push(current);
        } else {
            acc.seen.push(current);
        }
        return acc;
    }, { duplicates: [], seen: [] });
}
