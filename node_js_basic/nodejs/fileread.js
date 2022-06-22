const fs = require('fs'); // Require FileSystem Module
 fs.readFile('sample.txt', 'utf8', function(err, data) {
   // data: file contents
   // utf8: convert file character form.
   console.log(data);// original print result is decimer number
 });
