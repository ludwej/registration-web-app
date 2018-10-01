module.exports = function(pool) {
  
      
  async function regNum(regN){
    console.log(regN)
    let registration = regN.substr(0, 3).trim();
    let registrationNo = await pool.query('SELECT * FROM registrationNumbers WHERE registrationNo = $1 ', [registration])
    if (registrationNo.rowCount === 0) {
      let result = await pool.query('SELECT id FROM towns WHERE initial=$1', [registration])
      await pool.query('INSERT into registrationNumbers (registrationNo, town_id) values($1, $2)', [regN, result.rows[0].id]);
    }
  }

  
  
  async function Towns() {
    let getTown = await pool.query('SELECT * FROM registrationNumbers');
    //console.log(getTown)
    return getTown.rows;
  }

    
  // async  function selectCapeTown(selectedTown){
  //     if(selectedTown === CA){
  //       let result = await pool.query('select id from towns where town_id=$1',['CA']);
  //        let id = result.rows[0].id
  //     }
  //   }

  //  async function selectGeorge(selectedTown){
  //     if(selectedTown === CAW){
  //       result = await pool.query('select id from towns where town_id=$1',['CAW']);
  //        let id = result.rows[0].id
  //     }
  //   }

  // async  function selectPaarl(selectedTown){
  //     if(selectedTown === CJ){
  //       result = await pool.query('select id from towns where town_id=$1',['CJ']);
  //        let id = result.rows[0].id
  //     }
  //   }

  //  async function selectStellenbosch(selectedTown){
  //     if(selectedTown === CL){
  //       result = await pool.query('select id from  where town_id=$1',['CL']);
  //        let id = result.rows[0].id
  //     }
  //   }

    



    return {
      Towns,
      regNum
      // selectCapeTown,
      // selectGeorge,
      // selectPaarl,
      // selectStellenbosch
    }
}
