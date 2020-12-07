const FibonacciSum = (num) => {
  let f0 = 1;
  let f1 = 1;
  let sum = 0;
  let fibSeries = [f0, f1];
  // initial checking
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else if (num === 2) {
    return 2;
  } else if (num > 2) {
    while (sum < num) {
      sum = f0 + f1;
      f0 = f1;
      f1 = sum;
      if (sum % 2 && sum < num) {
        fibSeries = [...fibSeries, sum];
      }
    }
    console.log(fibSeries);
    return fibSeries.reduce((a, b) => a + b, 0);
  }
};

console.log("sum is ", FibonacciSum(1000));
