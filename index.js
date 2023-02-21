// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    return str.replace(/[A-Z]/g, 
    (letter)=>{
      let asciiValue=letter.charCodeAt(0) + 13
  
      if(asciiValue > 90){
        asciiValue=asciiValue % 90 +64;
      }
      console.log(asciiValue)
      return String.fromCharCode(asciiValue);
    });
  }
  
  console.log(rot13("SERR CVMMN!"));

// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

  function telephoneCheck(str) {
    // const re=/^(1 |1-)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{4}$)/g
    const re=/^(1 |1)*(\d{3}|\(\d{3}\))[ -]{0,1}(\d{3})[ -]{0,1}(\d{4}$)/g;
    return re.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("1 (555) 555-5555"));