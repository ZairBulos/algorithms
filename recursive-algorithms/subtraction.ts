const subtraction = (a: number, b: number) => {
  if (a > b) {
    return 1 + subtraction(a - 1, b);
  } else if (a < b) {
    return -1 + subtraction(a, b - 1);
  } else {
    return 0;
  }
  
};

console.log("Subtraction of 10 - 5 = ", subtraction(10, 5));
