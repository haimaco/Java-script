const Color = (color) => {
    switch (color.toLowerCase()) {
      case "blue":
      case "purple":
      case "brown":
        return "Dark color";
      case "yellow":
      case "pink":
      case "orange":
        return "Light color";
      
      default:
        return "Unknown color";
    }
  };
  
  console.log(Color("blue"));
