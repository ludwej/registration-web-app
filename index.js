let express = require('express')
let app = express()
let flash = require('express-flash')
const session = require('express-session')
let registrationFunction = require('./Registration')



const pg = require('pg')
const Pool = pg.Pool

let useSSL = false
let local = process.env.LOCAL || false
if (process.env.DATABASE_URL && !local) {
  useSSL = true
}
// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-admin:code321@localhost:5432/registration'

const pool = new Pool({
  connectionString,
  ssl: useSSL
})

let regF = registrationFunction(pool)

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

app.use(session({
  secret: '<add a secret string here>',
  resave: false,
  saveUninitialized: true
}))

app.use(flash())



app.get("/", async function (req, res, next) {
  try {
    let register = await regF.Towns();
    res.render("home", {
      register
    });
  } catch (error) {
    next(error)
  }
});

app.get("/towns", async function (req, res, next) {
  try {


    let reg = req.body.Town;

    let register = await regF.filter(reg)
    console.log(regi);
    

    res.redirect("/towns", {
      register
    });
  } catch (error) {
    next(error)
  }
});

app.post("/insertReg", async function (req, res, next) {

  const name = req.body.Input
  await regF.regNum(name)


  res.redirect("/")

});

app.post("/towns", async function (req, res, next) {
  try {
    let reg = req.body.Town

    let register = await regF.filter(reg)

      if(reg === 'all'){
        await regF.Towns()
      }
    res.render("home", {
      register
    });
  } catch (error) {
    next(error)
  }
});

app.get('/reset', async function (req, res) {
  await pool.query('delete  from  registrationNumbers');
  res.redirect('/');
});



let PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});