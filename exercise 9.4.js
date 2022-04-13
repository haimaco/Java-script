
const stepS = (N) => {
    let result = new Array(n).fill("'");
    for (let i = N; i > 0; i--) {
      for (let j = 0; j < N; j++) {
        if (i + j >= N) {
          result[j] += "#";
        } else {
          result[j] += " ";
        }
      }
    }
    return result.join("'\n") + "'";
  };
  
  console.log(stepS(3));
