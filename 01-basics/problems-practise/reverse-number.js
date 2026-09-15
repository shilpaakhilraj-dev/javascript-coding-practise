// Reverse a number.

function reverseNumber(n) {
  // with string conversion 
  // let str = n.toString();
  // console.log(str.split("").reverse().join(""));

  // without string conversion
  let reversed = 0;

  while (n > 0) {
    let digit = n%10;
    reversed = reversed*10 + digit;
    n = Math.floor(n / 10);
  }
  
  console.log(reversed)
}

reverseNumber(12000);