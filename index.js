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