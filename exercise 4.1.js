let numSiblings = parseInt(prompt("How many siblings do you have?"));

// with the === it still prints no siblings with input 1 because the input is read as a string '1' and comapres it to the number 1
if (numSiblings === 1) {
  console.log("1 Sibling!");
} else if (numSiblings > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}

// we need to use the === to make sure when comparing the input string that it is a type number and not just a value equality
