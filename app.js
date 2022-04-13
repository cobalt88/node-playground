const express = require('express');
const app = express();

app.get('', (request, response) => {
  console.log('Hello World, from inside sample get endpoint app.get with no additional route information.');
  response.send('hello world');
})

const port = process.env.port || 3000; /* this I will have to come back to. option 1 is used for deployment, and if that does not exist or has not been set up yet then the default option is a manually assigned local port. that local port will likely be used throughout the development process until it is deployed. */

app.listen(port, () => {
  console.log(`listening on port ${port}`); /* this shows you what port you are listening to at any point in time in case you need to know. */
})

/*important note: so far everything up until now has managed to create a simple listen/response function on local port 3000.
if you were to open the browser and go to localhost:3000 you would see hello world displayed in the browser and "Hello World, from inside sample get endpoint app.get with no additional route information." displayed in your terminal. */