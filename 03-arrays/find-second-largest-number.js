let a = [20, 75, 11, 70, 35, 23];
console.log(findSecondLargest(a))
function findSecondLargest(arr) {
  let largestNumber = 0;
  let secondLargestNumber = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber && arr[i] != largestNumber) {
      secondLargestNumber = arr[i];
    }
  }
  return secondLargestNumber;
}