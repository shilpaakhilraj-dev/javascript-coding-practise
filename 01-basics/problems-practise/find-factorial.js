function findFactorial(num) {
  let res = 1;
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  do {
    res=res*num;
    num--;
  } while (num > 0)
  console.log(res);
  return res;
}

findFactorial(10)