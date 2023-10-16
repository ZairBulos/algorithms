const power = (a: number, n: number) => {
  if (n === 0) {
    return 1;
  }

  return a * power(a, n - 1);
};

console.log("2^5 = ", power(2, 5));
