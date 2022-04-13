const val = [1, 7, 3, 0, -5, 7, 3, 9];

for (number in val) {
  console.log(`Element ${++number} is: ${val[--number]}`);
}

const arrayMulti = (val) => {
  let multi = 1;
  for (number in val) {
    multi *= val[number];
  }
  return multi;
};

const arraySum = (val) => {
  let sum = 0;
  for (number in val) {
    sum += val[number];
  }
  return sum;
};

const arrayLength = (val) => {
  let size = 0;
  for (number in val) {
    size++;
  }
  return size;
};

console.log(`Array multiplication is: ${arrayMulti(val)}`);
console.log(`Array sum is: ${arraySum(val)}`);
console.log(`Array length is: ${arrayLength(val)}`);

