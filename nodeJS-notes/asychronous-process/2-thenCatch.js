// Promise
const doWorkPromise = new Promise( 
	(resolve,reject) => {
		setTimeout( () => { /*resolve([7,4,1]);*/ reject('Things went wrong'); }, 2000 ); 
	}
);
doWorkPromise
 .then( result =>  console.log('Success!', result) )
 .catch( error =>  console.log('Error!', error)  );



// promise chaining
const add = (a,b) => {
	return new Promise( (resolve,reject) => {
		setTimeout( () => {
			resolve(a+b)
		}, 2000)
	} )
};

// version 1
add(1,2)
 .then( sum => {
 	console.log(sum);
 	add(sum,4)
 	 .then( sum2 => console.log(sum2) )
 	 .catch( e => console.log(e) );
 } )
 .catch( e => console.log(e) )

// version 2
add(1,4)
 .then( sum1 => {
	console.log(sum1);
	return add(sum1,5)
 } )
 .then( sum2 => console.log(sum2) )
 .catch( e => console.log(e) );
