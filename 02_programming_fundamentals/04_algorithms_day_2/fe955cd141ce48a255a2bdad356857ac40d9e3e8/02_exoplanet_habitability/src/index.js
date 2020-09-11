const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  if ((star.spectralClass === "M" || star.spectralClass === "K") && (planet.mass < 0.32 && 0.5 < planet.radius <= 2.5 )){
    return true;
  }
  else {
    return false ;
  }
  
  // Code the function here.
}
console.log();
// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
