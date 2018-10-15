module.exports = function(pool){

let registration = require('../Registration')
let regF = registration(pool)


async function homeRoute (req, res, next) {
    try {
      let register = await regF.Towns();
      res.render("home", {
        register
      });
    } catch (error) {
      next(error)
    }
  }

async function insert (req, res, next) {

    const reg = req.body.Input
    let message =  await regF.regNum(reg)
    req.flash('invalid', message )
    req.flash('success', message )
  
    res.redirect("/")
  
  }
  async function townsRoute (req, res, next) {
    try {
  
  
      let reg = req.body.Town;
  
      let register = await regF.filter(reg)
      
      
  
      res.redirect("/towns", {
        register
      });
    } catch (error) {
      next(error)
    }
  }

  async function postTown (req, res, next) {
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
  }

  async function reset(req, res) {
    await pool.query('delete  from  registrationNumbers');
    res.redirect('/')}



return{
    insert,
    homeRoute,
    townsRoute,
    reset,
    postTown
}



}