const dividtoseven = (n) => {
    let result = "";
  
    for (let i = 1; i <= n; i += 1) {
      if (i % 7 === 0 && (i + "").includes("7")) {
        result += " BOOM-BOOM";
      } else if (i % 7 === 0) {
        result += "BOOM";
      } else {
        result += i;
      }
      if (i < n) {
        result += ",";
      }
    }
    console.log(result);
  };
  
  dividtoseven(27);
