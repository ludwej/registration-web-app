
describe('Registrations', function(){
  it('should RETURN registration starts with CA for Cape Town', function(){
    var factoryF = Registration({"CA 3737":0 , "CY 3737":0 ,"CA 309897":0});
    var filtered = factoryF.filter("CA")

   assert.deepEqual(filtered,[ 'CA 3737', 'CA 309897' ])

    });

    it('should RETURN registration starts with CK for Stellenbosch ', function(){
      var factoryF = Registration({"CA 3737":0 , "CK 3737":0 ,"CA 309897":0});
      var filtered = factoryF.filter("CK")

     assert.deepEqual(filtered,[ 'CK 3737' ])

      });

      it('should RETURN registration starts with CY for George', function(){
        var factoryF = Registration({"CK 3737":0 ,"CZ 3737":0 ,"CA 309897":0," CA 3737":0 ," 3737":0 ,"CY 309897":0 ,"CA 3737":0 ,"CY 3737":0 ,"CA 309897":0 });
        var filtered = factoryF.filter("CY")
      //
       assert.deepEqual(filtered, [ 'CY 309897', 'CY 3737' ])
      //
        });

        it('should RETURN registration starts with CL for Paarl', function(){
          var factoryF = Registration({"CK 3737":0 ,"CL 3737":0 ,"CA 309897":0," CA 3737":0 ," 3737":0 ,"CL 309897":0 ,"CA 3737":0 ,"CL 3737":0 ,"CA 309897":0 });
          var filtered = factoryF.filter("CL")
        //
         assert.deepEqual(filtered, [ 'CL 3737', 'CL 309897' ])
        //
          });


      });
