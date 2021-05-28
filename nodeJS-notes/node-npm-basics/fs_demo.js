const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(
	path.join(__dirname, '/test1'), 
	{}, 
	err => {
		if (err) throw (err);
		console.log('Folder created..:');
	}
);

// Create and write to file
fs.writeFile(
	path.join(__dirname, '/test1', 'hellowwww.txt'), 
	'Hello World!', 
	err => {
		if (err) throw (err);
		console.log('File written to');

		// Append File
		fs.appendFile(
			path.join(__dirname, '/test1', 'hellowwww.txt'),
			'I love Node.JS',
			err => {
				if (err) throw err;
				console.log('File written to....');
			}
		);
	}
);

// Read File
fs.readFile(
	path.join(__dirname, '/test1', 'hellowwww.txt'), 
	'utf8',
	(err, data) => {
		if (err) throw (err);
		console.log(data);
	}
);

// Rename File
fs.rename(
	path.join(__dirname, '/test1', 'hellowwww.txt'), 
	path.join(__dirname, '/test1', 'hello2.txt'), 
	(err, data) => {
		if (err) throw (err);
		console.log('File renamed');
	}
);