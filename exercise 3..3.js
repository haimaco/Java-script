//function decleration
function percentageOfWorld1(pop) {
  return (pop / 7900) * 100;
}

// function expression
const percentageOfWorld2 = (pop) => (pop / 7900) * 100;

let percentjapan = percentageOfWorld1(1345),
  percentitaly = percentageOfWorld1(1374),
  percenteurope = percentageOfWorld1(6678);

  let percentjapan2 = percentageOfWorld2(1345),
  percentitaly2 = percentageOfWorld2(1374),
  percenteurope2 = percentageOfWorld2(6678);

console.log("using the function decleration:");
console.log(
  `China has ${percentjapan.toPrecision(4)}% of the world's population`
);
console.log(
  `India has ${percentitaly.toPrecision(4)}% of the world's population`
);
console.log(`USA has ${percenteurope.toPrecision(4)}% of the world's population`);

console.log("\nusing the function expression:");
console.log(
  `China has ${percentjapan2.toPrecision(4)}% of the world's population`
);
console.log(
  `India has ${percentitaly2.toPrecision(4)}% of the world's population`
);
console.log(`USA has ${percenteurope2.toPrecision(4)}% of the world's population`);
