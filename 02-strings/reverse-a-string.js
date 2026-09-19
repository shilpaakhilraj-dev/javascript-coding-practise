// 1. with inbuilt function
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('SHILPA'))

// 2. without inbuilt function
function reverseStringWithoutInbuilt(str) {
  let res = '';
  for(let i = str.length - 1; i >= 0; i--) {
    res+=str[i];
  }
  console.log(res)
  return res;
}

reverseStringWithoutInbuilt('SHILPA')