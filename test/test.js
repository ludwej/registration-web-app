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
   await reg.regNum('ca 1223, ca 12223', 'ca')
  //  await reg.regNum('ca 1254, ca 2468', 'ca')

   returnCpt = await reg.filter('ca')

   assert.deepEqual(returnCpt,  [ { registrationno: "ca 1223, ca 12223" } ]); 
  });

  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })


  it('should RETURN registration starts with CJ for Paarl', async function () {
  
    let reg = Registration(pool)
    await reg.regNum('cj 1223, cj 12223', 'cj')
  //  await reg.regNum('ca 1254, ca 2468', 'ca')

   returnPaarl = await reg.filter('cj')

   assert.deepEqual(returnPaarl,  [ { registrationno: "cj 1223, cj 12223" } ]); 
  });
  
  beforeEach(async function () {
    // clean the tables before each test run
    await pool.query('delete from registrationNumbers;')
  })

  

  it('should RETURN registration starts with caw for George', async function () {
  
    let reg = Registration(pool)
   await reg.regNum('caw 246, caw 123','caw')
  

   returnGeorge = await reg.filter('caw')

   assert.deepEqual(returnGeorge,[{registrationno: "caw 246, caw 123"} ]); 
  });
  

  it('should RETURN registration for All Towns', async function () {
  
    let reg = Registration(pool)
   await reg.regNum('caw 246, cl 5265, cj 25678, ca 123 ','caw' , 'ca' ,'cl' , 'cj')
  

   returnGeorge = await reg.Towns('all')
 
   [ { id: 133,
    town_id: 2,
    registrationno: 'caw 246, cl 5265, cj 25678, ca 123 ' } ] 
  });
  

  // it('should RETURN registration starts with CY for George', function () {
  //   var factoryF = Registration({
  //     "CK 3737": 0,
  //     "CZ 3737": 0,
  //     "CA 309897": 0,
  //     " CA 3737": 0,
  //     " 3737": 0,
  //     "CY 309897": 0,
  //     "CA 3737": 0,
  //     "CY 3737": 0,
  //     "CA 309897": 0
  //   });
  //   var filtered = factoryF.filter("CY")
  //   //
  //   assert.deepEqual(filtered, ['CY 309897', 'CY 3737'])
  //   //
  // });

//   it('should RETURN registration starts with CL for Paarl', function () {
//     var factoryF = Registration({
//       "CK 3737": 0,
//       "CL 3737": 0,
//       "CA 309897": 0,
//       " CA 3737": 0,
//       " 3737": 0,
//       "CL 309897": 0,
//       "CA 3737": 0,
//       "CL 3737": 0,
//       "CA 309897": 0
//     });
//     var filtered = factoryF.filter("CL")
//     //
//     assert.deepEqual(filtered, ['CL 3737', 'CL 309897'])
//     //
//   });


// });


// describe('Registrations', function () {
//   it('should RETURN registration starts with CA for Cape Town', function () {
//     var factoryF = Registration({
//       "CA 3737": 0,
//       "CY 3737": 0,
//       "CA 309897": 0
//     });
//     var filtered = factoryF.filter("CA")

//     assert.deepEqual(filtered, ['CA 3737', 'CA 309897'])

//   });

//   it('should RETURN registration starts with CK for Stellenbosch ', function () {
//     var factoryF = Registration({
//       "CA 3737": 0,
//       "CK 3737": 0,
//       "CA 309897": 0
//     });
//     var filtered = factoryF.filter("CK")

//     assert.deepEqual(filtered, ['CK 3737'])

//   });

//   it('should RETURN registration starts with CY for George', function () {
//     var factoryF = Registration({
//       "CK 3737": 0,
//       "CZ 3737": 0,
//       "CA 309897": 0,
//       " CA 3737": 0,
//       " 3737": 0,
//       "CY 309897": 0,
//       "CA 3737": 0,
//       "CY 3737": 0,
//       "CA 309897": 0
//     });
//     var filtered = factoryF.filter("CY")
//     //
//     assert.deepEqual(filtered, ['CY 309897', 'CY 3737'])
//     //
//   });

//   it('should RETURN registration starts with CL for Paarl', function () {
//     var factoryF = Registration({
//       "CK 3737": 0,
//       "CL 3737": 0,
//       "CA 309897": 0,
//       " CA 3737": 0,
//       " 3737": 0,
//       "CL 309897": 0,
//       "CA 3737": 0,
//       "CL 3737": 0,
//       "CA 309897": 0
//     });
//     var filtered = factoryF.filter("CL")
//     //
//     assert.deepEqual(filtered, ['CL 3737', 'CL 309897'])
//     //
//   });


});