let a = [20, 65, 11, 70, 35, 23];
console.log(findLargest(a));
function findLargest(arr) {
  let largestNumber = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}
