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


describe('Registrations', async function () {
  it('should RETURN registration starts with CA for Cape Town', function () {
    var factoryF = reg({
      "CA 3737": 0,
      "CY 3737": 0,
      "CA 309897": 0
    });
    var filtered = factoryF.selectCapeTown("CA")

    assert.deepEqual(filtered, ['CA 3737', 'CA 309897'])

  });

  // it('should RETURN registration starts with CK for Stellenbosch ', function () {
  //   var factoryF = Registration({
  //     "CA 3737": 0,
  //     "CK 3737": 0,
  //     "CA 309897": 0
  //   });
  //   var filtered = factoryF.filter("CK")

  //   assert.deepEqual(filtered, ['CK 3737'])

  // });

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