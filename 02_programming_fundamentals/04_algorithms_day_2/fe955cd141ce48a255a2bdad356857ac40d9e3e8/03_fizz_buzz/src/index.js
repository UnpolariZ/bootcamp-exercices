function fizzBuzz(list) {
  let newArray = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      newArray.push("Fizz");
    } else if (list[i] % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(list[i]);
    }
  }
  return newArray;
}
module.exports = fizzBuzz;
