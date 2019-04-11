(()=>{
    "use strict";
    let oracleId = sessionStorage.getItem('requestedForOracleId');
    let dataBase = window.dataBase;

    let details = dataBase.find((val) =>{
        return val.OracleId == oracleId;
    });

    document.getElementById('oracleId').value = oracleId;
    document.getElementById('name').value = details.FirstName +" " +details.LastName;

})();