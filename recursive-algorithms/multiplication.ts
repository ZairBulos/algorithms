const multiplication = (a: number, b: number) => {
  if (b === 1) {
    return a;
  } 

  return a + multiplication(a, b - 1);
};

console.log("2*5 = ", multiplication(2, 5));
