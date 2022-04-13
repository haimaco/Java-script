const obj1 = { name: "first" },
  obj2 = { name: "second" },
  obj3 = { name: "third" };

const map = new Map();

map.set(obj1, 456);
map.set(obj2, 457);
map.set(obj3, 458);

for (let key of map) {
  console.log(`Name is: ${key[0].name}, ID is: ${key[1]}`);
}
