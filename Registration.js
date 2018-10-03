module.exports = function (pool) {


  async function regNum(regN) {

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

  async function selectCapeTown(town) {
    if (town === CA) {
      let result = await pool.query('select id from towns where initial=$1', ['ca']);
      let id = result.rows[0].id
      const capeTown = await pool.query('select registrationNo from RegistrationNumbers where town_id =$1', [id]);
      return capeTown.rows;
    }
  }

  async function selectGeorge() {
    let result = await pool.query('select id from towns where initial=$1', ['caw']);
    let id = result.rows[0].id
    const George = await pool.query('select registrationNo from RegistrationNumbers where town_id =$1', [id]);

    return George.rows;

  }

  async function selectPaarl() {
    let result = await pool.query('select id from towns where initial=$1', ['cj']);
    let id = result.rows[0].id
    const George = await pool.query('select registrationNo from RegistrationNumbers where town_id =$1', [id]);

    return George.rows;

  }

  async function selectStellenbosch() {
    let result = await pool.query('select id from towns where initial=$1', ['cl']);
    let id = result.rows[0].id
    const Stellenbosch = await pool.query('select registrationNo from RegistrationNumbers where town_id =$1', [id]);

    return Stellenbosch.rows;
  }


  return {
    Towns,
    regNum,
    selectCapeTown,
    selectGeorge,
    selectPaarl,
    selectStellenbosch
  }
}