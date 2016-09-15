var express = require('express');
var app = express();
require('./dist/app.js');

app.use(express.static('dist'));

app.get('', function (req, res) {
  const content = global.getContentHtml();
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>webpack test</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="app.js"></script>
    </html>
  `);
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});