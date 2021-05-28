/* Object.hasOwnProperty() */
//it is a method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1')); // expected output: true
console.log(object1.hasOwnProperty('toString'));// expected output: false
console.log(object1.hasOwnProperty('hasOwnProperty'));// expected output: false

o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne');   // returns true
o.propTwo = undefined;  
o.hasOwnProperty('propTwo');   // returns true



/* prop in object */
// in operator returns true if the specified property is in the specified object or its prototype chain.
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);// expected output: true
delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}
console.log(car.make);// expected output: "Suzuki"


var fantasyLit = {
    tolkien: "The Lord of the Rings",
    lewis: "The Chronicles of Narnia"
};
console.log("tolkien" in fantasyLit);// Outputs: true
console.log("asimov" in fantasyLit);// Outputs: false
console.log("constructor" in fantasyLit);// Outputs: true


function litList () {};
litList.prototype.addToList = function (author, work) {
    this[author] = work;
};
var fantasyLit = new litList();
fantasyLit.addToList("tolkien", "The Lord of the Rings");
console.log("tolkien" in fantasyLit);// Outputs: true
console.log("asimov" in fantasyLit);// Outputs: false
console.log("addToList" in fantasyLit);// Outputs: true





/* delete operator */
// delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};
console.log(Employee.firstname);// expected output: "John"
delete Employee.firstname;
console.log(Employee.firstname);// expected output: undefined



/* try...catch*/
/*
-try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.

-The try statement consists of a try-block, which contains one or more statements. {} must always be used, even for single statements. At least one catch-block, or a finally-block, must be present. 

-This gives us three forms for the try statement:
	try...catch
	try...finally
	try...catch...finally

-A catch-block contains statements that specify what to do if an exception is thrown in the try-block. If any statement within the try-block (or in a function called from within the try-block) throws an exception, control is immediately shifted to the catch-block. If no exception is thrown in the try-block, the catch-block is skipped.

-The finally-block will always execute after the try-block and catch-block(s) have finished executing. It always executes, regardless of whether an exception was thrown or caught.
*/
  try {
    nonExistentFunction();
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  };

/* throw */
// throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.
  function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    }
  }; 
  try {
    getRectArea(3, 'A');
  } catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
  };




/*getter and setter*/
/*It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them*/
/* get syntax binds an object property to a function that will be called when that property is looked up.
*/
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log[this.log.length - 1];
  }
};
console.log(obj.latest);// expected output: "c"

/*set syntax binds an object property to a function to be called when there is an attempt to set that property.*/
language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
};
language.current = 'EN';
language.current = 'FA';
console.log(language.log); // expected output: Array ["EN", "FA"]
