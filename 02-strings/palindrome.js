function checkPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  if (str===reversedStr) {
    return true;
  }
  return false;
}

console.log(checkPalindrome('MALAYALAM'))