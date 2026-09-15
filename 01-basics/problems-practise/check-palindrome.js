// Check whether a number is palindrome.

function checkPalindrome(n) {
  originalNumber = n;
  let reversed = 0;
  while (n>0) {
    let lastNumber = n%10;
    reversed = reversed*10 + lastNumber;
    n = Math.floor(n/10);
  }
  console.log(originalNumber==reversed);
}

checkPalindrome(129);