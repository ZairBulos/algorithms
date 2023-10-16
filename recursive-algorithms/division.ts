const division = (a: number, b: number) => {
  if (a < b) {
    return 0;
  }

  return 1 + division(a - b, b);
}

console.log("6/3 = ", division(6, 3));
