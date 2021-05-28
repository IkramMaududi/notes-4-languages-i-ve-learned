const request = require('request');
const urlWeather = 'some_api_address';

request({url: urlWeather, json:true}, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('response:', response);
});
