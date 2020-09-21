
const calculator = (reader) => {

  reader.question("Enter the first number\n> ", (firstNumber) => {

    reader.question("Choose your operation\n> ", (operation) => {

      reader.question("Enter the second number\n> ", (secondNumber) => {


        if ( operation === "+" ) {
          console.log(firstNumber + secondNumber);
        } else if ( operation === "-" ) {
          console.log(firstNumber - secondNumber);
        } else if ( operation === "*" ) {
          console.log(firstNumber * secondNumber);
        } else if ( operation === "/" ) {
          console.log(firstNumber / secondNumber);   
        } else { 
          console.log("MATHS ERROR");
          calculator(reader);
        }
      });
    });
  });
};
export {calculator};  