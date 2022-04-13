const numofletters = (val) => {
    const count = [];
    for (let i = 0; i < val.length; i++) {
      count.push(val[i].length);
    }
    return count;
  };
  
  console.log(numofletters(["boo", "doooo", "hoo", "ro"]));

  
