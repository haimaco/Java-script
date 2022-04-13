//* 1.
const obj = {};
const map = new Map();
let iterations = 1000000;

console.time("iterate for object");
for (let i = 0; i < iterations; i++) {
  obj[i] = `object ${i}`;
}
console.timeEnd("iterate for object");

console.time("iterate for map");
for (let i = 0; i < iterations; i++) {
  map.set(i, `object ${i}`);
}
console.timeEnd("iterate for map");

//* 2.
console.time("find item for object");
obj[50000];
console.timeEnd("find item for object");

console.time("find item for map");
map.get(50000);
console.timeEnd("find item for map");

// * 3.
//! maps are faster for adding a single entry !
console.time("adding item for object");
obj.newItem = "new";
console.timeEnd("adding item for object");

console.time("adding item for map");
map.set("newItem", "new");
console.timeEnd("adding item for map");

//* 4.
//! maps are also faster for deleting a single entry !
console.time("deleting item for object");
delete obj[100000];
console.timeEnd("deleting item for object");

console.time("deleting item for map");
map.delete("100000");
console.timeEnd("deleting item for map");
