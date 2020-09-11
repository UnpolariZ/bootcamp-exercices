function range(chiffre1, chiffre2) { 
  // Code the function here.
  const array = [chiffre1];

  let numeroUno = chiffre1;
  let numeroDeux = chiffre2;
  
  if (numeroUno < numeroDeux) {
    while (numeroUno < numeroDeux){
      array.push(numeroUno + 1);
      console.log("plop");
      numeroUno = numeroUno +1 ;
    }
  } else if (numeroUno > numeroDeux) {
    while (numeroUno >  numeroDeux){ 
      console.log("hola");
      array.push(numeroUno - 1);
      numeroUno = numeroUno -1;
    }
  }
  return array;
}
const ascArray = range(1, 4);
const descArray = range(4, 1);
// Do not remove last lines, it is for tests
module.exports = range;
console.log(descArray);