const express = require('express');
const app = express();
const port = 3000;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
app.post('/', (request, response) => {
	response.type('xml');
});
app.listen(port, () => {
	console.log('Example app listening at http://localhost: ${port}');
});
