const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const comparaison = (val1, val2) => {
  const result = [];
  for (let i = val1.length - 1; i >= 0; i--) {
    for (let j = val2.length - 1; j >= 0; j--) {
      if (val1[i] === val2[j]) {
        result.push(val1[i]);
        break;
      }
    }
  }
  if (result.length === 0) {
    return false;
  }
  return result;
};

console.log(comparaison(food, food1));
