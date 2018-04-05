// Declaring Variables and Constants


//Declaring Variables. There are 3 wats to declare variables in JS and doing an alert.

/*
//Doing an alert
alert("Welcome to learning JS with Saab!");

//Standard JS
var drink = "apple juice";
console.log(drink);

//ES6 is not supported in some older browsers
let myFood = "pasta";
console.log(myFood);

//Using const to declare a variable means it can't be reassigned
const myStreet = "Grand";
console.log(myStreet);

//Math can even be done
let number = 3 * 6;
console.log(number);

var subtraction = 46 - 8;
console.log(subtraction);

const add = 76 + 14;
console.log(add);

//Using string concatenation in js
console.log("I love drinking " + drink + " with my " + myFood + " on " + myStreet + ".");

//This is a more modern way of doing concatenation using ES6.
let restaurant = "Burger King";
console.log(`I could use a combo meal right now from ${restaurant}!`);

let name = "Chuck Wagner";

const age = 46;

var profession = "web developer";

console.log(`${name} the ${profession} just turned ${age}.`);
*/


/*
//Assignment: Use concatenation 5 times with each three ways to right variables
let name = "Boba Fett";
let series = "Star Wars";
console.log(`${name} from ${series} is a bad dude!`);

let person = "Han Solo";
let career = "bounty hunter";
console.log(`The ${career} ${name} is always hunting ${person}.`);

let number = 12 - 6;
let food = "eggs";
console.log(`If I have a half dozen ${food}, then I have only ${number} left.`);

let woman = "Gayle";
let weight = 20;
console.log(`${woman} is ${weight} pounds overweight.`);

console.log(`${woman} is a huge ${series} fan!`);

var place = "Puerto Plata";
var emotion = "love";
console.log("I just " + emotion + " " + place + "!");

var group = "Funkadelic";
var music = "funk and rock";
console.log(group + " used to play some great " + music + " music back in the day!");

var animal = "dogs";
var animalTwo = "Cats";
console.log(animalTwo + " are cool but " + animal + " are the best!");

var hero = "The Hulk";
var villian = "Thanos";
console.log("Unfortunately " + hero + " can not beat " + villian + " alone.");

var movie = "Avengers: Infinity War";
var type = "fantasy";
console.log("The " + type + " super hero movie " + movie + ", is most likely going to be the highest grossing movie of 2018.");


const planet = "Jupiter";
const object = "moons";
console.log(`The planet ${planet} officially has 27 ${object}.`);

const musicOne = "Michael Jackson";
const musicTwo = "Prince";
console.log(`When I was growing up ${musicTwo} and ${musicOne} were my favorite recording artists!`);

const fruit = "Grapes";
const veggie = "rice";
console.log(`${fruit} are my favorite fruit and ${veggie} is my favorite veggie.`);

const player = "Steph Curry";
const team = "The Golden State Warriors";
console.log(`${player} of ${team} is my favorite NBA player.`);

const lady = "Glenny";
const staus = "married";
const guy = "Mike";
console.log(`My friend ${lady} is ${staus} to a nice man named ${guy}.`);
*/

//Using toLowerCase
var place = "Saint Louis";
console.log(place.toLowerCase());

let boxer = "Roy Jones"
console.log(boxer.toLowerCase() + " was a great fighter!");

//Assignment. Do toLowerCase 8 times.

var city = "New York";
console.log(city.toLowerCase());

var team = "New York Mets";
console.log(team.toLowerCase());

console.log(city.toLowerCase() + " is the home of the baseball " + team.toLowerCase() + ".");

let season1 = "Fall";
console.log(season1.toLowerCase());

let season2 = "Spring";
console.log(season2.toLowerCase());

console.log(season2.toLowerCase() + " and " + season1.toLowerCase() + " are my favorite times of the year.");

var girl = "Paola";
var guy = "Julio";
console.log(guy.toLowerCase() + " and " + girl.toLowerCase() + " are in love!");

const person = "Pops";
const food1 = "Chicken";
const food2 = "Pig Feet";
console.log(person.toLowerCase() + " says he likes " + food1.toLowerCase() + " and " + food2.toLowerCase() + ".");

//Using toUpperCase. Assignment: Do toUppercase 5 times
var pet = "Benji";
var place = "mama's house";
console.log(pet.toUpperCase() + " realy stinks up my " + place.toUpperCase() + ".");

let town1 = "Puerto Plata";
let town2 = "St. Louis";
console.log("Right now " + town1.toUpperCase() + " is nice and sunny. On the other hand " + town2.toUpperCase() + " is cold and rainy today.");

const dessert1 = "German Chocolate Cake";
const dessert2 = "Cherry Pie";
const dessert3 = "Ice Cream";
console.log("Mama said that we can either have " + dessert1.toUpperCase() + " or " + dessert2.toUpperCase() + " with " + dessert3.toUpperCase() + " for dessert.");

var movie1 = "Blade";
var movie2 = "Avengers 1";
var movie3 = "Spider-Man 2";
movie1 = "Blade 2";
console.log("Some of my favorite hero movies are " + movie1.toUpperCase() + "," + movie2.toUpperCase() + ", and " + movie3.toUpperCase() + ".");

let team1 = "Cardinals";
let team2 = "Rams";
team2 = "Golden State Warriors";
console.log("I enjoy watching the " + team1.toUpperCase() + " and the " + team2.toUpperCase() + " play.");


//Assignment: Do 5 toLower and Upper combined
var man = "Joe";
var size = "Peon";
console.log("That " + man.toUpperCase() + " really thinks he is important. In reality he is a " + size.toLowerCase() + ".");

let flavor1 = "Chocolate Shake";
let flaver2 = "Vanilla Shake";
flaver2 = "Strawberry Shake";
console.log("Right now I am in the mood for a " + flavor1.toUpperCase() + " but I will also take a " + flaver2.toLowerCase() + ".");

const villian = "Thanos of Titan";
const villian2 = "Emperor Palpatine";
console.log("Who is a more rotten individual? " + villian2.toLowerCase() + " or " + villian.toUpperCase() + "?");

var girl1 = "Sue";
var girl2 = "Sue's";
var item = "Socks";
console.log("Who sews " + girl2.toUpperCase() + " " + item.toLowerCase() + "? " + girl1.toUpperCase() + " sews " + girl2.toUpperCase() + " " + item.toLowerCase() + ".");

let thing = "Spaceship";
let planet = "Mars";
console.log("If I had a " + thing.toLowerCase() + " I would fly to " + planet.toUpperCase() + ".");

const eat = "chicken";
const eat2 = "pork and beans";
console.log("Tonight I am in the mood for fried " + eat.toUpperCase() + " and " + eat2.toLowerCase() + ".");


//Reviewing what you have learned

//1. Write out a variable using var let and const
var day =  "Thursday";
console.log("Today is " + day + ".");

let boy = "Chris";
console.log(`Everybody hates ${boy}!`);

const youngLady = "Paola";
console.log(`${youngLady} is studying to become a doctor someday.`);

//Concatenate all variables into one sentence.
console.log(`${boy} and ${youngLady} are going out ${day} for pizza.`);

let something = "big dreams";

var view = "The Black Panther";
view = "The Infinity War";

//Use toLowerCase
console.log(boy.toLowerCase() + " just turned 18.");

//Use toUpperCase
console.log("That " + youngLady.toLocaleUpperCase() + " has " + something.toUpperCase() + " of being rich someday.");

//Use upper and lower. Also change a variable.
console.log(youngLady.toUpperCase() + " and " + boy.toLowerCase() + " are going to see " + view.toUpperCase() + " at the movies next " + day + ".");


















































