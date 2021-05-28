const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();


// const logger = require('./middleware/logger');
// app.use is when we want to include middleware
// Init middleware
// app.use(logger);

// Handlebars Middleware
// set the engine to handlebars and use the module exphbs where we set the default layout to main.handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' })); 
// set the view engine to handlebars
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Homepage route
app.get('/', (req,res) => res.render('index', {
	title: 'Member App',
	members
}));

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes from other file
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));