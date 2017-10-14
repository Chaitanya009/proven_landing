var express = require('express'),
  https = require('https'),
 app = express();
var path = require('path');
app.set('port', process.env.PORT || 9000);
app.use(express.static(path.join(__dirname, '')));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
module.exports = app;