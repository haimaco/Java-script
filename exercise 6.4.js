// Exercise-3.3 function
function percentageOfWorld1(pop) {
    return (pop / 7900) * 100;
  }
  
  // Exercise-6.4:
  const populationPercentages = (arr) => {
    const percentages = [];
    for (let i = 0; i < arr.length; i++) {
      percentages.push(percentageOfWorld1(arr[i]).toPrecision(4));
    }
    return percentages;
  };
  
  const populations = [345, 145, 30,89];
  
  console.log(populationPercentages(populations));
