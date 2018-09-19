function Registration(reg) {


var regNumber = reg || {} ;
var regNo = '' ;


function regNum(regN) {


  if (regNumber[regN] === undefined  &&
  regNumber[regN].startsWith('CY')||
  regNumber[regN].startsWith('CK')||
  regNumber[regN].startsWith('CJ')) {

regNumber[regN] =0;
    return true;
  }
  return false;
}


  function getRegNo() {
    return regNo ;
  }

  function getMap() {
    regNumber;
  }

  function filter(value) {
    var startsW=[];
    var keys = Object.keys(regNumber);

    if (value != '') {
      for (var i = 0; i < keys.length; i++) {
        if (keys[i].startsWith(value)) {

          startsW.push(keys[i]);
  }
}
 return startsW;
}
}


return{
  regNum,
  getMap,
  filter
}
}
