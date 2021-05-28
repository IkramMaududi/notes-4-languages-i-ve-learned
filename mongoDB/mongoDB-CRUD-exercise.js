const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const id = new ObjectID();

MongoClient.connect(
	connectionURL, 
	{ useNewUrlParser: true, useUnifiedTopology: true }, 
	(error, client) => {
		if (error) {return console.log('Unable to connect to database!'); }
		
		// create a specific new database
		const db = client.db(databaseName);

		 
		// Create
		db.collection('users').insertOne(
			{ _id: id, name: 'Gon', age: 12}, // we don't have to give id manually, because mongoDB gives id automatically
			(error, result) => {
				if (error) {return console.log('Unable to insert user');};
				console.log(result.ops);
			}
		);
		db.collection('task').insertMany(
			[
				{
					description: 'working out',
					completed: false
				}, {
					description: 'laundry',
					completed: true
				}, {
					description: 'lawn mowing',
					completed: true
				}
			],
			(error, result) => {
				if (error) {return console.log('Unable to insert user'); }
				console.log(result.ops); 
			}
		);

		 

		// Read
		db.collection('users')
		.findOne( {_id: new ObjectID("5f3d33983e83d33d7bcac6b0") }, //we use this syntax, since id is stored in binary data
			(error, result) => {
				if (error) {return console.log('Unable to fetch')};
				console.log(result);
			}
		);
		
		// the return value of find is a cursor, so we must use another method to show the data 
		// cursor.toArray() returns an array of documents & cursor.count() returns the number of documents 
		db.collection('tasks')
		.find({ completed: false }).toArray((error, result) => {
			if (error) {return console.log('Unable to fetch')};
			console.log(result);
		});
		db.collection('tasks')
		.find({ completed: false }).count((error, result) => {
			if (error) {return console.log('Unable to fetch')};
			console.log(result);
		});	
		
		
		
		// Update
		// $set and $inc are update operators - $set is to set the value of a field in a document & $inc is to increment the value of a field by the specified amount
		db.collection('users')
		.updateOne( { _id: new ObjectID("5f3c00908a24e279c457d837") }, { $set: {name: 'Max'} } )
		.then( result => console.log(result) )
		.catch( error => console.log(error) );

		db.collection('users')
		.updateOne( { _id: new ObjectID("5f3c00908a24e279c457d837") }, { $inc: {age: 2} } )
		.then( result => console.log(result) )
		.catch( error => console.log(error) );

		db.collection('tasks')
		.updateMany( { completed: true }, { $set: { completed: false } } ) 
		.then( result => console.log(result) )
		.catch( error => console.log(error) );

		 

		//Delete
		db.collection('tasks').deleteOne({ description: 'laundry' })
		.then( result => console.log(result) )
		.catch( error => console.log(error) );

		db.collection('users').deleteMany({ age: 29 })
		.then( result => console.log(result) )
		.catch( error => console.log(error) );
	}
);
