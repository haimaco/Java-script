// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average

// 1
let grades = [89, 64, 96, 92, 88, 99, 73];
const maxGrade = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});
// console.log(maxGrade);

//Another way ->
const maxGrade2 = grades.reduce((max, currVal) => {
  return Math.max(max, currVal);
});
// console.log(maxGrade2);

// 2
let arr = [10, 20, 3, 30, 40, 50];
const isEven = arr.reduce((total, currentVal) => {
  if (total % 2 === 1) {
    return currentVal;
  }
  if (currentVal % 2 === 0) {
    return total + currentVal;
  }
  return total;
});
// console.log(isEven);

// 3
let arr2 = [10, 20, 30, 40, 50];
const avg = arr2.reduce((sum, currVal) => {
  if (arr2.indexOf(currVal) === arr2.length - 1) {
    return (sum + currVal) / arr2.length;
  }
  return sum + currVal;
});
console.log(avg);
