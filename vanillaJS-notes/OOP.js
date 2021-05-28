/* constructor: 
	- is function that is used to construct new objects. The new operator is used to create new instances based off a constructor function
	- a special method javascript automatically calls when we create a new instance of that class
	- it can accepts parameters
	- it is where we define initial properties of the object
*/

/* Prototype
- Every object in JavaScript has an internal property called [[Prototype]]



- It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.*/

/* prototype chain
-When you attempt to access a property or method of an object, 
	1.it will first search on the object itself, 
	2.and then it will search the object’s [[Prototype]],
	3. and then the prototype of the linked object, 
	4. and continue searching until the end of the prototype chain : Object.prototype
-All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.
*/