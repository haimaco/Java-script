const countryToLiveIn = (language, isIsland, population, country) => {
    language === "french"
      ? !isIsland
        ? population < 50
          ? console.log(`You should live in ${country}`)
          : console.log(`${country} does not meet your criteria`)
        : console.log(`${country} does not meet your criteria`)
      : console.log(`${country} does not meet your criteria`);
  };
  
  countryToLiveIn("french", false, 38, "Paris");
