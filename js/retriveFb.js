(() => {
    "use strict";
    let dataBase = window.dataBase;
    let feedBack = window.feedBack;
    // let requesterOracleId = sessionStorage.getItem('requesterOracleId');
    let requestedForOracleId = sessionStorage.getItem('requestedForOracleId')

    let value = dataBase.find((val) => {
        return val.OracleId == requestedForOracleId;
    });

    let row = document.getElementsByClassName('row');

    row[0].innerHTML = `
        <span class="label ">OracleId</span> 
        <span class="text">: ${value.OracleId}</span> 
        <span class="label ">Name</span> 
        <span class="text">: ${value.FirstName}</span>
        <span class="label ">Role</span> 
        <span class="text">: ${value.role}</span>
    `

    let table = document.getElementById('feedBacks');
    for (let fb of feedBack) {
        if (fb.OracleId == value.OracleId) {
            table.innerHTML += `
                <tr>
                <td>${fb.OracleId}</td>
                <td>${fb.GrowthAreas}</td>
                <td>${fb.Suggestions}</td>
                <td>${fb.Ratings}</td>
                </tr>
            `
        }
    }
})();