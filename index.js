const express = require('express');
const app = express();
var cons = require('consolidate');
const path = require('path');

app.use('/', express.static('public'));
// app.use('/', express.static('public/css'));
// app.use('/', express.static('public/js'));

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/' ,(req, res)=>{
  res.render("index.html");
  console.log('successfully render the index.html')
})

app.listen(process.env.PORT || 3003, function () {
	console.log("listen to port 3003");
});