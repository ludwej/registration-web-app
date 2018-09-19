let express = require('express')
let app = express()
// let flash = require('express-flash')
// const session = require('express-session')


// app.use(flash())

var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get("/", function(req, res){
  res.render("home");
});

let PORT = process.env.PORT || 3009;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});