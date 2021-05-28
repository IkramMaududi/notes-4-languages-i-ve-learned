// const personalInformation = {
//     firstName : 'Son',
//     lastName : 'Goku',
//     city : 'kirin',
//     state : 'NoWhere',
//     zipCode : 442213
// }

// const  {firstName: fn, lastName: ln} = personalInformation;

// console.log(`My name is ${fn} ${ln}`);

// function addressMaker (address){
//     const {city, state} = address;
//     const newAddress = {city, state, country: 'USA'};
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
// }

// addressMaker({city: 'Austin', state: 'Texas'});

// let interest = [1.05, 1.04, 1.03, 1.02];
// let base = 10000;

// for (let each of interest) {
//     base *= each;
// }
// console.log(base);


// const multiply = (a, b=1) => console.log(a*b);

// multiply(3,2);
// multiply(4);

// const setOfNumbers = {one: 1, two:2, three: 3, four: 4};
// const setOfSth = [1,2,3,4,5,6,7e2];
// let total = 0;
// // for (let x in  setOfNumbers) {
// //     total += x.value;
// // };
// // console.log(total);
// console.log(setOfSth.includes(-5));

// class Square {
//  constructor (spec){
//     this.height = spec;
//     this.width = spec;
//  };
// };

// let house = new Square (10);
// console.log(house);

// const person = {
//     firstName : 'Ikram',
//     lastName : 'Maududi',
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName (value) {
//         const bagian = value.split(' ');
//         this.firstName = bagian[0];
//         this.lastName = bagian [1];
//     }
// };
// person.fullName = 'Sam Thotman'

// console.log(person.firstName);

// function Bird(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// Bird.prototype.numleg = 2;
// let cardinal = new Bird('Berry', 'Red');
// console.log(cardinal.numlog, cardinal.name, cardinal.color);

// function Bird(name, color, size) {
//     this.name = name;
//     this.color = color;
//     this.size = size;
//  }
// Bird.prototype.numLegs=2;
// Bird.prototype.eat = function() {
//   console.log("nom nom nom");
// }
// let canary = new Bird('fighter', 'yellow', 'small');
// console.log(canary.numLegs);




// const _ = require('lodash');
// const numbers = [33, 44, 11, 5556, 67.4, 22];

// _.each(numbers, function(item, index){
//     console.log(item);
// });

const a = 'rgragas';
const b = 'rrags';

console.log(`
${a}
${b}`.trim()
    )

