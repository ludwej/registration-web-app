module.exports = function(pool) {
  async function registrations(regN, regCode) {
        if (regNumber[regN] === undefined &&
          regNumber[regN].startsWith('CA') ||
          regNumber[regN].startsWith('CL') ||
          regNumber[regN].startsWith('CJ') ||
          regNumber[regN].startsWith('CAW')) {
          let registrationNo = await pool.query('SELECT * FROM towns WHERE towns = $1 ', [regN])
          if (registrationNo.rowCount === 0) {
            await pool.query('INSERT into users (towns) values($1, $2)', [regN, 0])
          }
        }
      }

         async function allTowns() {
            let allTown = await pool.query('select * from towns')
            return allTown.rowCount
          }

          
        async  function selectCapeTown(selectedTown){
            if(selectedTown === CA){
              let result = await pool.query('select id from towns where town_id=$1',['CA']);
               let id = result.rows[0].id
            }
          }

         async function selectGeorge(selectedTown){
            if(selectedTown === CAW){
              result = await pool.query('select id from towns where town_id=$1',['CAW']);
               let id = result.rows[0].id
            }
          }

        async  function selectPaarl(selectedTown){
            if(selectedTown === CJ){
              result = await pool.query('select id from towns where town_id=$1',['CJ']);
               let id = result.rows[0].id
            }
          }

         async function selectStellenbosch(selectedTown){
            if(selectedTown === CL){
              result = await pool.query('select id from  where town_id=$1',['CL']);
               let id = result.rows[0].id
            }
          }




          return {
            registrations,
            allTowns,
            selectCapeTown,
            selectGeorge,
            selectPaarl,
            selectStellenbosch
          }
        }
