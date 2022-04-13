const people = ["Greg", "Mary", "Devon", "James"];
for (firstName in people) {
  console.log(`Person ${parseInt(firstName) + 1} name: ${people[firstName]}`);
}

people.shift();
people.pop();
people.unshift("Matt");
people.push("Haim");

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    console.log("Found Mary.. Stopping");
    break;
  }
}

const Copy = people.slice(2);
console.log(`new sliced array without Mary or Matt: [${Copy}]`);
console.log(`Mary is located at index: ${people.indexOf("Mary")}`);
console.log(`Foo is located at index: ${people.indexOf("Foo")}`);

people.splice(0, 4, "Greg", "Mary", "Devon", "James");
people.splice(2, 1);
people.splice(2, 0, "kate", "william");
console.log(people);

let withJoe = people.concat(["joe"]);
console.log(withJoe);
