let array = [3, 13, 12, 7, 78, 43];
let stringArray = [5, "first element", 9, "another string", 22, "last element"];
let str = "This is a string to use in numbers 4-7";
//seif 1:
const doubleValues = (arr) => {
  return arr.map((ele) => ele * 2);
};

console.log(doubleValues(array));

//seif 2:
const onlyEvenValues = (arr) => {
  const res = [];
  arr.forEach((ele) => {
    if (ele % 2 === 0) {
      res.push(ele);
    }
  });
  return res;
};

console.log(onlyEvenValues(array));

//seif 3:
const showFirstAndLast = (arr) => {
  const res = [];
  arr.forEach((ele, idx) => {
    
    if ((idx === 0 || idx === arr.length - 1) && typeof ele === "string") {
      res.push(ele);
    }
  });
  return res;
};

console.log(showFirstAndLast(stringArray));

//seif 4:
const vowelCount = (str) => {
  const res = {};
  const arr = str.toLowerCase().split("");
  let vowels = "aeiou";
  arr.forEach((letter) => {
    if (vowels.indexOf(letter) !== -1) {
      if (res[letter]) {
        res[letter] += 1;
      } else {
        res[letter] = 1;
      }
    }
  });
  return res;
};

console.log(vowelCount(str));

//seif  5:
const capitalize = (str) => {
  const arr = str.split(" ");
  str = arr.map((word) => word.toUpperCase()).join(" ");
  return str;
};

console.log(capitalize(str));

//seif 6:
const shiftLetters = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = str.toLowerCase().split("");
  str = arr
    .map((letter) => {
      if (alphabet.indexOf(letter) !== -1) {
        if (alphabet.indexOf(letter) === 25) {
          return alphabet[0];
        } else {
          return alphabet[alphabet.indexOf(letter) + 1];
        }
      } else {
        return letter;
      }
    })
    .join("");
  return str;
};

console.log(shiftLetters(str));

//seif 7:
const swapCase = (str) => {
  const arr = str.split(" "),
    res = [];
  arr.forEach((word, idx) => {
    if (idx % 2) {
      res.push(capitalize(word));
    } else {
      res.push(word);
    }
  });
  return res.join(" ");
};

console.log(swapCase(str));
