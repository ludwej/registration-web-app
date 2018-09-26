module.exports = function(pool) {



  async function registrations(regN) {
        if (regNumber[regN] === undefined &&
          regNumber[regN].startsWith('CY') ||
          regNumber[regN].startsWith('CK') ||
          regNumber[regN].startsWith('CJ')) {
          let registrationNo = await pool.query('SELECT * FROM registration WHERE registration = $1 ', [regN])

          if (registrationNo.rowCount === 0) {
            await pool.query('INSERT into users (user_name, count) values($1, $2)', [name, 0])
          }
        }
          await pool.query('update users set count=count+1 where user_name=$1', [name])
      }

          function allTowns() {
            let allTown = await pool.query('select * from towns')
            return allTown.rowCount
          }

          
          function selectCapeTown(selectedTown){
            if(selectedTown === CJ){
              result = await pool.query('select id from towns where town_id=$1',['CA']);
               let id = result.rows[0].id
            }
          }

          function selectGeorge(selectedTown){
            if(selectedTown === CA){
              result = await pool.query('select id from towns where town_id=$1',['CAW']);
               let id = result.rows[0].id
            }
          }

          function selectPaarl(selectedTown){
            if(selectedTown === CJ){
              result = await pool.query('select id from towns where town_id=$1',['CJ']);
               let id = result.rows[0].id
            }
          }




          return {
            registrations,
            allTowns,
            selectCapeTown,
            selectGeorge,
            selectPaarl
          }
        }
