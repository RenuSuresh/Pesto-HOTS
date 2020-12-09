function DropElement(arr, filterFunction) {
  return arr.filter(filterFunction);
}

const filterGreaterThanEqual = (n) => {
  return n >= 3;
};
const filterEqualToOne = (n) => {
  return n === 1;
};
const filterGreaterThanFive = (n) => {
  return n > 5;
};
const filterGreaterThanThree = (n) => {
  return n > 3;
};
const filterGreaterThanTwo = (n) => {
  return n > 2;
};

console.log(DropElement([1, 2, 3, 4], filterGreaterThanEqual));
console.log(DropElement([0, 1, 0, 1], filterEqualToOne));
console.log(DropElement([1, 2, 3, 4], filterGreaterThanFive));
console.log(DropElement([1, 2, 3, 7, 4], filterGreaterThanThree));
console.log(DropElement([1, 2, 3, 9, 2], filterGreaterThanTwo));
