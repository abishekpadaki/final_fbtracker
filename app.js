(() => {
    'use strict';
    let dataBase = window.dataBase;

    var btn = document.getElementById("loginButton");
    btn.addEventListener('click', (e) => {
        var loginId = document.getElementById("loginId").value;
        var loginPassword = document.getElementById("loginPassword").value;
        dataBase.forEach( (user) => {
            if (loginId === user.OracleId && loginPassword === user.password) {

                sessionStorage.setItem("OracleId",user.OracleId);
                sessionStorage.setItem("Role",user.role);
                document.location.href = "./boards/dashBoard.html";
            }
        });
    });
    // var logout = document.getElementsByClassName('logout')[0];
    // logout.addEventListener('click',()=>{
    //     document.location.href = '../boards/login.html'
    // })
})();