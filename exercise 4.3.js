
const average = (a, b, c) => (a + b + c) / 3;{

// 1st team win situation
let  mikeTeam = average(116, 94, 123);
let  johnTeam = average(89, 120, 103);
 

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}\n`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}\n`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}\n`);
}

// 2nd team win situation

mikeTeam = average(55, 123, 89);
johnTeam = average(89, 146, 118);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}\n`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}\n`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}\n`);
}

// draw situation
johnTeam = averagePoints(86, 117, 112);
mikeTeam = averagePoints(109, 145, 61);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}`);
}

};

