// 1. Sort the array of numbers from descending to ascending 
// order
// 2. Sort the array of numbers from ascending to decending 
// order.

const numbers = [1, -5, 666, 2, 400, 11];

console.log(numbers.sort((a,b) => a - b));

console.log(numbers.sort((a,b) => b - a));
