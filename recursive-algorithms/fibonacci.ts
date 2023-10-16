const fibonacci = (n: number) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const n = 10;
const fibonacciSequence: number[] = [];

for (let i = 0; i < n; i++) {
  fibonacciSequence.push(fibonacci(i));
}

console.log(fibonacciSequence.join(", "));
