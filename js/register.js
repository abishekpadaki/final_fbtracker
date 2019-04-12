(()=>{
    "use strict";
    let Role = sessionStorage.getItem('Role');
    if(Role == "PM" || Role == "Mentor" || Role == "CT"||Role == "Traine"){

        let registration = JSON.parse(localStorage.getItem('registration'));
        let requestorOracleId = sessionStorage.getItem('OracleId');
        let register = document.getElementsByClassName('Register')[0];
        let reset = document.getElementsByClassName('Reset')[0];

        register.addEventListener('click',()=>{
            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            let confirmPassword = document.getElementById('confirmPassword').value;
            let gender = document.getElementsByName('gender').value;
            // let role = document.getElementById('role').value;
    
            if(password!=confirmPassword) {
                console.log("password not matc");
                alert('Password does not match');
            }
    
            let person = {
                "RequestorId":requestorOracleId,
                "OracleId": "987654",
                "FirstName": firstName,
                "LastName": lastName,
                "EmailId": email,
                "gender": gender,
                "password": password,
                "profilePic":"https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png",
                // "role":role 
                "HrOracleId":"123457"
            }
            registration.push(person);
            localStorage.setItem('registration',JSON.stringify(registration));

        });
        reset.addEventListener("click",()=>{
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPassword').value = '';
            document.getElementsByName('gender').value = '';
            // document.getElementById('role').value = '';
        });
    } 
})();