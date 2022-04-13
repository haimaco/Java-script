
let obj = {
    firstname: "Hsim",
    lastname: "Acoca",
  };
  const objArr = new Array(100).fill(obj, 0, 100);
  const numArr = Array.from({ length: 100 }, (_, i) => i + 1);
  const valuesArr = [];
  for (key in obj) {
    valuesArr.push(obj[key]);
  }
  const objFromArray = Object.assign({}, valuesArr);
  console.log(Array.isArray(numArr));
  // coppy that wont effect the original
  const arrayCopyWontEffect = [...objArr];
  // coppy that will effect the original
  const arrayCopyWillEffect = numArr;
