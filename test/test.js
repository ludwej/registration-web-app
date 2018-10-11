let assert = require('assert')
let Registration = require('../Registration')


const pg = require('pg')
const Pool = pg.Pool

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-admin:code321@localhost:5432/registration'

const pool = new Pool({
  connectionString
})
let reg = Registration(pool)




beforeEach(async function () {
  // clean the tables before each test run
  await pool.query('delete from registrationNumbers;')
})


describe('Registrations', async function () {
  it('should RETURN registration starts with CA for Cape Town', async function () {
  
    let reg = Registration(pool)
   await reg.regNum('CA 1223, CA 12223', 'CA')
  //  await reg.regNum('ca 1254, ca 2468', 'ca')

   returnCpt = await reg.filter('CA')

   assert.deepEqual(returnCpt,  [ { registrationno: "CA 1223, CA 12223" } ]); 
  });

  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })


  it('should RETURN registration starts with CJ for Paarl', async function () {
  
    let reg = Registration(pool)
    await reg.regNum('CJ 1223, CJ 12223', 'CJ')
  //  await reg.regNum('ca 1254, ca 2468', 'ca')

   returnPaarl = await reg.filter('CJ')

   assert.deepEqual(returnPaarl,  [ { registrationno: "CJ 1223, CJ 12223" } ]); 
  });
  
  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })

  

  it('should RETURN registration starts with CAW for George', async function () {
  
    let reg = Registration(pool)
   await reg.regNum('CAW 246, CAW 123','CAW')
  

   returnGeorge = await reg.filter('CAW')

   assert.deepEqual(returnGeorge,[{registrationno: "CAW 246, CAW 123"} ]); 
  });
  

  it('should RETURN registration for All Towns', async function () {
  
    let reg = Registration(pool)
   await reg.regNum('CAW 246, CL 5265, CJ 25678, CA 123 ','CAW' , 'CA' ,'CL' , 'CJ')
  

   returnGeorge = await reg.Towns('all')
 
   [ { id: 133,
    town_id: 2,
    registrationno: 'CAW 246, CL 5265, CJ 25678, CA 123 ' } ] 
  });
  
  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })


  it('should Test invalid Flash message', async function () {
  
    let reg = Registration(pool)
    await reg.regNum('GAW 123 123')
    let wrongReg = await reg.regNum('GAW 123 123')

   assert.deepEqual(wrongReg, 'not a valid town'); 
  });

  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })


  it('should Test SUCCCESS Flash message', async function () {
  
    let reg = Registration(pool)
    let message = await reg.regNum  ('CA 123 123')
    await reg.regNum  ('CAW 124 123')
  

   assert.deepEqual(message, 'success'); 
  });
});