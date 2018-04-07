//Refreshers from part 1
var person = "Pat";
let place = "Puerto Plata";
const food = "Nachos";

person = "Willie";
place = "St. Louis";

//console.log(`${person} loves to eat ${food} whenever she visits ${place}.`);
console.log("Whenever " + person.toUpperCase() + " is in " + place + " he eats pleny of " + food.toLowerCase() + ".");

//Using Replace
var car = "The car is red.";
var newCar = car.replace("red", "blue");
console.log(newCar);

var girl = "I am going on a date with JoAnna.";
var girl2 = girl.replace("JoAnna", "Glenny");
console.log(girl2);

let sport = "Basketball is my favorite sport.";
let sport2 = sport.replace("Basketball", "Football");
console.log(sport2);

//Using Includes
var colors = "The team colors are blue, gold and white.";
console.log(colors.includes("purple"));
console.log(colors.includes("blue"));

