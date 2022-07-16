## What is happening?

- ajax function does a get request to an api endpoint
- the request is sent to the server but it takes some time to process the request and return a response
- but the code does not wait for the response to be returned
- the code continues to run while the request is being processed

- so when we try to console.log the response, it will be undefined / null

## How do we fix this?

The solution is to use a callback function to handle the response.

- the callback function is passed as an argument to the ajax function
- the callback function is called when the response is returned from the server
