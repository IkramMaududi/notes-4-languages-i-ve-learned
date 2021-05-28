/*Some ways to make array*/
const numbers = [1,2,3];
console.log(numbers);

// These 2 below is used to make dynamic array
const moreNumbers = Array(5,2);
const yetMoreNumbers = Array.of(1,2);

// create empty array of 5 elements
const ha = new Array(5);

// create array-like object
const listItems = document.querySelectorAll('li');
console.log(listItems)

// Array.from() : is to make real array from array-like object
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);





/* Array.pop(), Array.push(), Array.shift(), Array.unshift()*/
/*Remove an item from the end of an array & returns the removed item.*/
let cats = ['Bob', 'Willy', 'Mini'];
cats.pop(); // ['Bob', 'Willy']

/*Add items to the end of an array & returns the new array length.*/
let cats1= ['Bob'];
cats1.push('Willy'); // ['Bob', 'Willy']
cats1.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

// shift all items to the left, meaning that removing the very beginning of the array 
let cats = ['Bob', 'Willy', 'Mini'];
cats.shift(); // ['Willy', 'Mini']

// unshift all the item (to the right), meaning that it adds an item to the beginning of an array 
let cats = ['Bob'];
cats.unshift('Willy'); // ['Willy', 'Bob']
cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']






/*for...of & for...in*/
// for...of : creates a loop iterating over ITERABLE OBJECTS
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
/*Expected output:
'a'
'b'
'c'
*/


// for...in : iterates over all ENUMERABLE PROPERTIES of an OBJECT that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// expected output:
// "a: 1"
// "b: 2"
// "c: 3"






Array.forEach() 
// it does sth for each item in the array; it is similar to for..of loops, with the advent of having the ability to access index
const prices = [19.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjPrice = [];

for (const item of prices) {
  taxAdjPrice.push(item * (1+tax));
}; 
// the 'above' is similar to the 'below'
prices.forEach( (item, id, fullArr) => {
  const result = { 
    index: id, 
    taxAdjPrice: item* (1+tax)
  };
});


Array.map():
/* map has the job of
1. taking in an array
2. running a function of some form on every item in that array
3. that function returns a new transformed element for each item in that array
*/
const prices = [19.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedjPrice = prices.map( (price,id, someArr) => {
    const result = { 
      index: id, 
      taxAdjPrice: item* (1+tax)
    };
    return result;
} );





Array.filter():
/*It takes an array, check each whether it meets some kind of condition to see if it's true of falls
If it is true, it's going to put the item back into the array. If it falls, it's not gonna put the item back into the array.
It makes new array
*/
const inst = [1, 2, 3];
const evens = inst.filter(function (item){
    return item % 2 === 0;
});
console.log(evens);//[2]



Array.reduce() /*stands for*/  array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 /* it reduces an array to a simpler number
-total          Required. The initialValue, or the previously returned value of the function
-currentValue   Required. The value of the current element
-currentIndex   Optional. The array index of the current element
-arr            Optional. The array object the current element belongs to
-initialValue   Optional. A value to be passed to the function as the initial value
 */

 const setAA = [1 ,2 ,3]
 const sum = setAA.reduce( (preValue, curValue) => preValue +curValue, 0 );  
 console.log(sum)//6

//this is similar to
let suuum = 0;
for (let n of setAA) {
  suuum += n;
}
console.log(suuum);//6



Array.some()
/*check if any item in the array meets the condition, it's gonna be true; if no item in the array meets the condition, it's gonna be false
  */
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function(item){
    return item < 0;
});
console.log(hasNegativeNumbers);//true



Array.every();
/* check if all item in the array meets the condition. If it meets the condition it's gonna be true, otherwise, it's gonna be false
*/
const allPositivieNumbers = [1,2,3].every(function (item){
    return item > 0;
});
console.log(allPositivieNumbers);//false







// Sorting
Array.sort();
// It takes comparison function and if the function is of negative(-) value, a is going to be placed before b. If it is of positive(+), b is going to be placed before a. UPPERCASE is going to placed before lowercase
const a = ['dom', 'apple', 'bottle'];
const sorted = a.sort();
console.log(sorted);//['apple', 'bottle', 'dom']


//Sort numbers in an array in ascending order:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

//Sort numbers in an array in descending order:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});


//This is using a comparison function
const people = [
    {
        name: "Dom",
        age: 55
    },
    {
        name: "Sophie",
        age: 96
    },
    {
        name: "Mark",
        age: 27
    }
];
const sortedByAgeIncreasingOrder = people.sort(function(a,b){
    return a.age-b.age;
});
console.log(sortedByAgeIncreasingOrder);
/* This is the result
[ { name: "Mark", age: 27 },
  { name: "Dom", age: 55 },
  { name: "Sophie", age: 96 } ];*/

const sortedByAgeDecreasingOrder = people.sort(function(a,b){
    return b.age-a.age;
});
console.log(sortedByAgeDecreasingOrder);
/* This is the result
[ { name: "Sophie", age: 96 }
  { name: "Dom", age: 55 },
  { name: "Mark", age: 27 } ];*/

Array.reverse();
/*arr.reverse: used to reverse the order of the elements in an array*/
let sentence = 'house of the rising sun';
let a = sentence.split('');
let b = a.reverse()//["n", "u", "s", " ", "g", "n", "i", "s", "i", "r", " ", "e", "h", "t", " ", "f", "o", " ", "e", "s", "u", "o", "h"]







/* Spliting and joinning */
String.split()
/* used to convert string to array, the function is where we want the split to happen*/
let sentence = "Hello my name is John Doe";

let words = sentence.split(" ");
console.log(words);//[ 'Hello', 'my', 'name', 'is', 'John', 'Doe']

let words1 = sentence.split(" ").sort();
console.log(words1);//[ 'Doe', 'Hello', , 'John', 'is', 'my', 'name' ]
// The capital is put before lowercase when using .sort()

let chars = sentence.split(" name ");
console.log(chars);//['Hello my', 'is John Doe'];


String.concat(); 
//it is used to join 2 or more strings
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));


Array.join();
/* used to convert array to string, and the function is want we want to put in between the joined words*/
let oneWord: words1.join("");
console.log(oneWord);//DoeHelloJohnismyname






Array.splice();
//splice is used for removing, inserting, replacing data
const hobbies = ['watching movies', 'sports', 'coding'];

hobbies.splice(1, 1, 'reading'); // remove 1 element starting from index 1 and replace with reading
console.log(hobbies); // ['watchin movies', 'reading', 'coding']

hobbies.splice(2, 0, 'cooking'); //add cooking at the index 2 and it doesn't remove any element
console.log(hobbies); // ['watching movies', 'reading', 'cooking', 'coding']

hobbies.splice(1, 2, 'hiking', 'traveling'); //remove 2 elements starting from index 1 and replacing them with hiking and traveling
console.log(hobbies); // ['watching movies', 'hiking', 'traveling', 'coding']

hobbies.splice(1); //remove all element starting from  index 1;
console.log(hoobies); // ['watching movies']


Array.slice();
// slice to copy array without affecting it again
const testResult = [1, 3.5, -7, 4.11, 91];
const storedResult = testResult.slice();

testResult.push(5.1);
console.log(storedResult, testResult); // testResult will be added by 5.1, but storedResult won't

//selecting element with slice using negative index at start and end
const savedResult = testResult.slice(-3,-1);

// select from the 2nd element to last element
const newResult = testResult.slice(2) 








/* Three Dots(...)- Spread operator vs Rest operator*/

/* Spread Operator*/
/*allows 
  1. an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or 
  2. an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

Syntax
  1.FUNCTION CALLS: myFunction(...iterableObj);

  2. ARRAY LITERALS OR STRINGS:  [...iterableObj, '4', 'five', 6];

  3. OBJECT LITERALS (NEW IN ECMASCRIPT 2018):   let objClone = { ...obj };
*/
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));// expected output: 6
console.log(sum.apply(null, numbers));// expected output: 6



/*Rest Operator*/
/* 
It allows us to represent an indefinite number of arguments as an array
There are 3 main differences between rest parameters and the arguments object:
  1. rest parameters are only the ones that haven't been given a separate name (i.e. formally defined in function expression), while the arguments object contains all arguments passed to the function
  2. the arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can be applied on it directly
  3. the arguments object has additional functionality specific to itself (like the callee property).
*/
function myFun(a, b, ...manyMoreArgs) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`manyMoreArgs: ${manyMoreArgs}`);
  console.log(manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")
/*Expected output:
"a: one"
"b: two"
"manyMoreArgs: three,four,five,six"
["three", "four", "five", "six"]
*/









// find the index of a primitive value in an array
Array.indexOf(); // find the first index of a search item
Array.lastIndexOf(); // find the last index of a search item


Array.find()
/*.find reference value (object) inside an array, it will return undefined if it can't be found*/
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}];
const found = objects.find(function (item){
    return item.id === 'b';
});
console.log(found);// Object {id: "b"}



/*.findIndex(): goes through every item in the array and checks it against a condition and if it's true, it's gonna return the index of that item. If it doesn't find the item, it will return -1 */
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}, {id: 'd'}];
const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
});
console.log(foundIndex);//1


/* .includes() */
// includes() method determines whether an array or a string includes a certain value among its entries, returning true or false as appropriate.
String.prototype.includes() // str.includes(searchString[, position])
Array.prototype.includes() // arr.includes(valueToFind[, fromIndex])
