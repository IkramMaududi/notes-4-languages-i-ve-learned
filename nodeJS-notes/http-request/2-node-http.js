const http = require('http');
const url = 'some_api_address';

const request = http.request( 
	url, 
	response => {
	    let data = '';
	    response.on( 'data', chunk => data += chunk.toString() );
	    response.on( 'end', () => console.log(JSON.parse(data)) );
	} 
);
request.on( 'error', error => console.log('An error', error) );
request.end();
