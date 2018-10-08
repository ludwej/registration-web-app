module.exports = function (pool) {


  async function regNum(regN) {
    // let registration= regN.
    let registration = regN.substr(0, 3).trim();
    let registrationNo = await pool.query('SELECT * FROM registrationNumbers WHERE registrationNo = $1 ', [registration])
    if (registrationNo.rowCount === 0) {
      let result = await pool.query('SELECT id FROM towns WHERE initial=$1', [registration])
      await pool.query('INSERT into registrationNumbers (registrationNo, town_id) values($1, $2)', [regN, result.rows[0].id]);
    }
  }



  async function Towns() {
    let getTown = await pool.query('SELECT * FROM registrationNumbers');

    return getTown.rows;
  }

  async function filter(regN) {
    let registration = regN.substr(0, 3).trim();
    let filterReg = await pool.query('SELECT id FROM towns WHERE initial = $1 ', [registration])
    // console.log(filterReg.rows[0].id);
    let filtering = await pool.query('select registrationNo from registrationNumbers where town_id = $1 ', [filterReg.rows[0].id])
    console.log(filtering.rows);
    return filtering.rows
  }

  


  return {
    Towns,
    regNum,
    filter
    // selectCapeTown,
    // selectGeorge,
    // selectPaarl,
    // selectStellenbosch
  }
}