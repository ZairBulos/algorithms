const addition = (n: number) => {
  if (n === 1) {
    return 1;
  }

  return n + addition(n - 1);
};

console.log("Sum of the first 10 numbers = ", addition(10));
