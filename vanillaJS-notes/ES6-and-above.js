/*
ARROW FUNCTION
When not to use it:
1. using 'this'
2.'when it includes arguments
3. when the function wants to be called before its line
 */
const myFunc = function() {
  const myVar = "value";
  return myVar;
};

const myFunction = () => {
  const myVar = "value";
  return myVar;
};


const ConArtist = (dfas,fdsa) => dfas**fdsa;
console.log(ConArtist(3,7));

const Yohoo = bdd => Mathpow(bdd,3);
console.log (Yohoo(2));



//Set Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous






/*Array destructuring*/
//1. Basic array destructuring

//before ES6
let introduction = ["Hello", "I" , "am", "Sarah"];
let greeting = introduction[0];
let pronoun = introduction[1];
let name = introduction[3]

//using ES6
let introduction = ["Hello", "I" , "am", "Sarah"];
let [greeting, pronoun] = introduction;
//or
let [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];
let [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];


//2. Using rest operator
let [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];
console.log(greeting);//"Hello"
console.log(intro);//["I", "am", "Sarah"]

//3. Destructuring assignments with functions
function getArray() {
  return ["Hello", "I" , "am", "Sarah"];
}
let [greeting,pronoun] = getArray();
console.log(greeting);//"Hello"
console.log(pronoun);//"I"

//4. Default values to avoid undefined
let [greeting = "hi",name = "Sarah"] = ["hello"];
console.log(greeting);//"Hello"
console.log(name);//"Sarah"

//5. swapping values
let a = 3;
let b = 6;
[a,b] = [b,a];
console.log(a);//6
console.log(b);//3




/*Object destructuring*/
//1. Extracting a property and multiple properties to variable
const {property} = Object;
const {prop1, prop2, ..., propN} = Object;

let Hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
let {name} = Hero;
console.log(name) // expected output: "Batman"

let {name, realName} = Hero;
console.log(name, realName) // expected output: 'Batman' 'Bruce Wayne'


//2. Default value
const {prop = defaultValue} = Object;

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
}
const { enemies } = hero;
console.log(enemies); //expected output: undefined

/*After destructuring the variable, enemies is undefined because the property
enemies doesn’t exist in the object hero .
you can set a default value if the property doesn’t exist in the
destructured object. 
*/
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { enemies = 'Joker' } = hero;
console.log(enemies); //expected output: "Joker"


//3. Alias
/* you can give assign another name for an object property */
const {prop: myProp} = Object;

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { realName: secretName } = hero;
console.log(secretName); // expected output: 'Bruce Wayne'


///4. Extracting deep property
const {prop: {deepProp} } = Object;

const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};
const { address: { city } } = hero;
console.log(city); //expected output: 'Gotham'


//5. Rest object after destructuring
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, ...realHero } = hero;
realHero; // expected output: { realName: 'Bruce Wayne' }


//6.Computer property name
let person = { 
  name: 'Sarah',
  country: 'Nigeria',
  job: 'Developer'
};
let prop = 'job';
let { [prop]: foo } = person;
console.log(foo); // expected output: " Developer"
/*
let { [prop]: foo } = person;
let { 'job': foo } = person;
it means we apply person.job to variable foo, so foo has the value of Developer 
*/




/*Modules: allow to import and export files*/
//to use module, use this code in html  /<script type="module" src="filename.js"> </script>/ 
//first write export from the source file you want to use
export {substract};
export default function add(x, y) {
  return x + y;
}

//import allows you to choose which parts of a file or module to load
import { add, subtract, printName as printUserName } from './math_functions.js';

//import * as : is used to import everything from the file choosen and create an object called myMathModule
import * as myMathModule from "./math_functions.js";





/*Promise is a constructor function, so you need to use the new keyword to create one.
*It takes a function, as its argument, with two parameters - resolve and reject.
*This promise has three states: pending, fulfilled, and rejected.
* pending happens if you do not add a way to complete the promise.
*resolve is used when you want your promise to succeed
*reject is used when you want it to fail. */

const makeServerRequest = new Promise((resolve, reject) => {

  let responseFromServer = false;
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
//this is executed when your promise gets fulfilled
makeServerRequest.then(result => {console.log(result);});
//this is executed when your promise gets rejected
makeServerRequest.catch(error=>{console.log(error);});





