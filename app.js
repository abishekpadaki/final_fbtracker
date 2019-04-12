(() => {
    'use strict';

    // let dataBase = window.dataBase;

    localStorage.setItem('dataBase',JSON.stringify(dataBase));
    localStorage.setItem('feedBack',JSON.stringify(feedBack));
    localStorage.setItem('registration',JSON.stringify(registration));
    localStorage.setItem('requests',JSON.stringify(requests));
    localStorage.setItem('searchCards',JSON.stringify(searchCards));

    // let dataBase = JSON.parse(localStorage.getItem('dataBase'));

    let validate = ()=>{
        let loginId = document.getElementById("loginId").value;
        let loginPassword = document.getElementById("loginPassword").value;
        dataBase.forEach( (user) => {
            if (loginId === user.OracleId && loginPassword === user.password) {
                sessionStorage.setItem("OracleId",user.OracleId);
                sessionStorage.setItem("Role",user.role);

                document.location.href = "./boards/dashBoard.html";
            }
            // else if(loginId.length != 6){
            //     alert("Id incorrect");
            // }
            // else{
            //     alert("Password or Email Id incorrect")
            // }
        });
    }

    let btn = document.getElementById("loginButton");
    let enter = document.getElementById("loginPassword");

    enter.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
            validate();
        }
    });

    btn.addEventListener('click', ()=>{
        validate();
    });

    let forGotBtn = document.getElementsByClassName('forgotbtn')[0];
    forGotBtn.addEventListener('click',()=>{
        document.location.href = '../boards/forgot.html'
    })
})();