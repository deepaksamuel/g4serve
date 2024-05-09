var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
  const child_process = require('child_process');
  child_process.execFile('./a.out', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data.toString());
});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



// https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30