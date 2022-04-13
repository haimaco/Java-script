const passwordValidation = (password) => {
    if (password.length > 7) {
      console.log("Strong");
    } else {
      console.log("Weak");
    }
  };
  
  const passwordValidationTernary = (password) => {
    password.length > 7 ? console.log("Strong") : console.log("Weak");
  };
  
  const passwordValidationAnd = (password) => {
    console.log(
      (password.length > 7 && "Strong") || (password.length <= 7 && "Weak")
    );
  };
  
  const passwordValidationAdvanced = (password) => {
    password.length > 7
      ? /[A-Z]/.test(password)
        ? console.log("Very Strong")
        : console.log("Strong")
      : console.log("Weak");
  };
  
  passwordValidation("abcd123");
  
  passwordValidationTernary("c7it");
  
  passwordValidationAnd("qase2345f");
  
  passwordValidationAdvanced("123er4d");
