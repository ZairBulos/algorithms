const factorial = (n: number) => {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("Factorial of 5 = ", factorial(5));
