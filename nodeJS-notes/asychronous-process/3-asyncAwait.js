/*
const doJob = async() => {
	throw new Error('something went wrong!');
	return 'Your name';
};

doJob()
 .then( result => console.log('result: ',result) )
 .catch( e => console.log('e: ',e) );
 */
 
const add = (a,b) => {
	return new Promise( (resolve,reject) => {
		setTimeout( () => {
			if (a<0 || b<0) {
				return reject('Numbers must be non-negative!')
			};
			resolve(a+b);
		}, 2000)
	} )
};

const doWork = async () => {
	const sum1 = await add(1,-99);
	const sum2 = await add(sum1, 8);
	const sum3 = await add(sum2, 11);
	return sum3;
};


doWork()
 .then( result => console.log('result: ',result) )
 .catch( e => console.log('e: ',e) );
