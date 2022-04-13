
const   steps = (N) => {
    let final = "'";
    for (let i = 1; i <= N; i++) {
      final += "#";
      for (let j = N - i; j > 0; j--) {
        final += " ";
      }
      console.log(final + "'");
      final = final.replaceAll(" ", "");
    }
  };
  steps(3);
  console.log();
  
  
