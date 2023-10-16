const arr = [2, 12, 15, 17, 27, 29, 45];

const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(arr, 27));
