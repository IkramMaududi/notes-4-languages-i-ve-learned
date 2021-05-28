const path = require('path');


// File location
console.log(__filename);

// Directory name
console.log(__dirname);
console.log(path.dirname(__filename));

// Base file name
console.log(path.basename(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concentenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));