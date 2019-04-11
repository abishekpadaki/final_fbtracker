(() => {
    "use strict";
    let role = sessionStorage.getItem("Role");
    let oracleId = sessionStorage.getItem("OracleId");
    let feedBack = window.feedBack;

    let name = document.getElementsByClassName("name")[0];

    document.getElementsByClassName("oracleId")[0].innerHTML += oracleId;
    document.getElementsByClassName("roleType")[0].innerHTML += role;

    let person = dataBase.find((val) => {
        return val.OracleId == oracleId;
    });

    let feedBacksGiven = feedBack.filter((val)=>{
        return val.SenderOracleID == oracleId;
    });

    let feedBacksGot = feedBack.filter((val) => {
        return val.OracleId == oracleId;
    });

    document.getElementsByClassName('fBgiven')[0].innerHTML += feedBacksGiven.length;
    document.getElementsByClassName('fBgot')[0].innerHTML += feedBacksGot.length;

    name.innerHTML = `<font size=5>${person.FirstName} ${person.LastName}</font>`

    if (role === "HR") {
        document.getElementsByClassName('dropdown')[1].innerHTML += `<button class="btn btn-primary notification" id="dropDownBtn">
        <i class="fas fa-plus-square"></i>
        <span style="visibility:hidden" class="badge">0</span>
        </button>
        <div class="dropdown-content">
            <h3 class="requestfb">FeedBack Requests</h3>
        </div>`;
    }
})();