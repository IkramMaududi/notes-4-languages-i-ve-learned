/* callback
**doWorkCallback function receive a certain 'callback' function as parameter
**run the 'callback' function  with 2 arguments inside a setTimeout function. 
**The 'callback' function hasn't been defined, it's to be defined when the doWorkCallback is called
*/
const doWorkCallback = (callback) => {
	setTimeout( () => { callback('This is my error!', undefined) }, 2000 )
};

// now the doWorkCallback function is called and the callback function is now defined 
doWorkCallback( 
	(error, result) => {
		if (error) return console.log(error); 
		console.log(result);
	} 
);