const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/' ,(req, res)=>{
  res.render("index");
  console.log('successfully render the index.ejs')
})

app.listen(process.env.PORT || 3003, function () {
	console.log("listen to port 3003");
});