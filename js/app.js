var express = require('express');
const cors = require('cors') 
  
var app = express();

app.use(cors());
app.use(express.json());

let corsOptions = { 
  origin : ['http://127.0.0.1:5500'], 
} 
// app.options('*', cors()) ;
app.use(cors(corsOptions)); 



app.use(function(req, res, next) {
  console.log("use received");
  // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.send("");
  console.log(req.body);
  next();
});


app.post('/', function (req, res) {
  console.log("post received");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  console.log(req.body);

  const child_process = require('child_process');
  child_process.execFile('./a.out', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  res.send({g4output: 'running' });
  console.log(data.toString());
});
});

app.options('/', function (req, res) {
  console.log('options');

});


app.listen(3000,'127.0.0.1', function () {
  console.log('Example app listening on port 3000!');
});



// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30