(()=>{
    "use strict";
    let oracleId = sessionStorage.getItem('requestedForOracleId');
    let dataBase = JSON.parse(localStorage.getItem('dataBase'));
    let feedBacks = JSON.parse(localStorage.getItem('feedBack'));
    let OracleId = sessionStorage.getItem('OracleId');

    let details = dataBase.find((val) =>{
        return val.OracleId == oracleId;
    });

    document.getElementById('oracleId').value = oracleId;
    document.getElementById('name').value = details.FirstName +" " +details.LastName;

    let submit = document.getElementById("submit");
    submit.addEventListener("click",()=>{
        let feedBack = {
            "OracleId": oracleId,
            "OverallRating": document.getElementById("overallRating").value,
            "ClientFocusedDelivery": document.getElementById("clientFocusedDelivery").value,
            "Creativity": document.getElementById("creativity").value,
            "Leadership": document.getElementById("leadership").value,
            "Openess": document.getElementById("openess").value,
            "PeopleGrowth": document.getElementById("peopleGrowth").value,
            "Relationships": document.getElementById("relationships").value,
            "Suggestions": document.getElementById("feedback").value,
            "GrowthAreas": document.getElementById("growthAreas").value,
            "Top5Stuff": document.getElementById("technicalSkills").value,
            "SenderOracleID": OracleId
        }       
        feedBacks.push(feedBack);
        localStorage.setItem("feedBack",JSON.stringify(feedBacks));
    });
})();