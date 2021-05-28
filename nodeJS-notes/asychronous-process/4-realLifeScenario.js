require('../src/db/mongoose');
const User = require('../src/models/user');


//1. Promise chaining method
User.findByIdAndUpdate('5f461f5ea8ca2ac290f8c7c5', {age: 3 })
 .then( user => {
 	console.log(user);
 	return User.countDocuments({age:0})
  } )
 .then( result => console.log(result) )
 .catch( e => console.log(e) );


//2. async await v.1
const doSth = async () => {
	const first = await User.findByIdAndUpdate('5f461f5ea8ca2ac290f8c7c5', {age: 3 });
	console.log(first);
	const second = await User.countDocuments({age:0});
	console.log(second);
};
doSth()
 .catch(e => console.log(e));


//3. async-await v.2
const updateAgeAndCount = async(id,age) => {
	const user = await User.findByIdAndUpdate(id, {age});
	const count = await User.countDocuments({age});
	return [user, count];
};
updateAgeAndCount('5f461f5ea8ca2ac290f8c7c5', 10)
  .then( ([user,count]) => (console.log(user, count)) )
  .catch( e => console.log(e) );


// 4. async-await v.3
const updateAgeAndCount = async(id,age) => {
	const user = await User.findByIdAndUpdate(id, {age});
	const count = await User.countDocuments({age});
	try {
		console.log(user, count);
	} catch(e) {
		console.log(e);
	};
};
updateAgeAndCount('5f461f5ea8ca2ac290f8c7c5', 10);

