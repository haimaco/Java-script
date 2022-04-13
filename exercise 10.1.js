 //methoda chel amartse :
  //! 1)
  const consoleLog = (string) => {
    console.log(string);
  };
  
  const isString = (str, callback) => {
    if (typeof str === 'string') {
      callback(str);
    }
  };
  
  // isString('Hola', consoleLog);
  
  //! 2)
  const dash = (str) => {
    //   return str.replaceAll(' ', '-');
    return str.split(' ').join('-');
  };
  
  const firstWordUpperCase = (str, callback) => {
    const firstWordUpper = str.split(' '); // ['Hola', 'amigos']
    firstWordUpper[0] = firstWordUpper[0].toUpperCase();
    return callback(firstWordUpper.join(' '));
  };
  
  // console.log(firstWordUpperCase('Hola amigos', dash));
  
  //! 3)
   console.log(
     firstWordUpperCase('Hola amigos', (str) => str.replaceAll(' ', '$'))
   );
  
  //! 4)
  const chooseCity = (arg1) => {
    if (arg1 > 20000) {
      return 'Suitable city';
    } else {
      return 'Not suitable city';
    }
  };
  
  //! high order ↓
  const sum2Cities = (city1, city2, callback) => {
    return callback(city1 + city2);
  };
  
  console.log(sum2Cities(1000, 20000, chooseCity));
  
