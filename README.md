Demostration of a server, which recieves a POST request from  client (with CORS enabled) and runs a CPP program on the server and returns the answer in JSON format:

```{g4output: 'running' }```

To run it, follow the instructions



```cd js```  
```g++ main.cpp```  
```npm init```  
```npm install express --save```  
```node app.js```


Your client should have a javascript function like the following. In case the request was successful, the client should receive 
```{g4output: 'running' }```

and print
```{g4output: 'running' }``` on the console.

Your client can be on another server!

A sample client is in ```client.html```. Open it using your five server.


Example Fetch on client side:

```
async function postData(url = "", data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                  method: "POST", // *GET, POST, PUT, DELETE, etc.
                  mode: "cors", // no-cors, *cors, same-origin
                  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: "same-origin", // include, *same-origin, omit
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: "follow", // manual, *follow, error
                  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                  body: JSON.stringify(data), // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
              }
              
              postData("http://127.0.0.1:3000/", { answer: 42 }).then((data) => {
                console.log(data); // JSON data parsed by `data.json()` call
              });
```

You can use this to run a cpp programme on your server, get the results and push it to your client!
