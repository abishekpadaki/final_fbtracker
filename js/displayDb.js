(()=>{
    "use strict";
    let feedBack = JSON.parse(localStorage.getItem('feedBack'));
    let oracleId = sessionStorage.getItem('OracleId');

    let table = document.getElementById('feedBacks');

    for (let fb of feedBack) {
        if (fb.OracleId == oracleId) {
            table.innerHTML += `
                <tr>
                <td>${fb.SenderOracleID }</td>
                <td>${fb.ClientFocusedDelivery}</td>
                <td>${fb.Creativity}</td>
                <td>${fb.OverallRating}</td>
                <td>${fb.Leadership}</td>
                <td>${fb.Openess}</td>
                <td>${fb.PeopleGrowth}</td>
                <td>${fb.Relationships}</td>
                </tr>
            `
        }
    }
})();