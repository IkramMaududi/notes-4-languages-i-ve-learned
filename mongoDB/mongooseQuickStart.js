const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});


// check whether we successfully connect to the database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
	// we are connected or sth
});


// Let's define our own mySchema and reference it to mongoose Schema
const mySchema = new mongoose.Schema(
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid');
			}
		}
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 7,
		validate(value) {
			if (value.toLowerCase().includes('password')) {
				throw new Error('Do not include a string of "password" in your password');
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be a positive number');
			}
		}
	}
);

// Compile our schema into a Model
const User = mongoose.model('User', mySchema);


// A model is a class with which we construct documents
const sb = new User({
	name: '   Kyubi ',
	email: ' MYEMAIL@MEAD.IO  ',
	password: ' jhgu6458796 '
});


// save the document to the database using save method
sb.save()
 .then( () => console.log('Success !', sb) )
 .catch( error => console.log('Error!', error ));



// Adding our own method: add a method to the schema and compile again the schema to a model
mySchema.methods.greet = function () {
	const greeting = this.name 
		? "The person's name is" + this.name 
		: "The person is nameless";
	console.log(greeting);
};
const User = mongoose.model('User', mySchema);

// call the method after creating a new instance based on our model
const fighter = new User({
	name: 'Akagami',
	email: ' yonko@shanks.xyz  '
	password: ' asdf1234 '
});
fighter.greeting();// "The person's name is Akagami"


// find a certain document(s) or all documents
myModel.find({})
myModel.find({name:/cool$/}, callback)