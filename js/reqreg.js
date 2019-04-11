(()=>{

    "use strict"
    let role = sessionStorage.getItem("Role");

    if (role == "PM" || role == "Trainer" || role == "CT" || role == "Mentor") {
        let row = document.getElementById('request');    
        if(role == "PM") {
        row.innerHTML += `
        <div class = "col-6">
            <div class="card mr-3" style="width:430px; height:230px;">
                <div class="card-body">
                <h5>Request HR for registration</h5>  
                <button id="register" class="btn btn-primary">Register</button>
            </div>
        </div>
        `
        }
        else{
            row.innerHTML += `
            <div class="card mr-3">
                <div class="card-body">
                <h5>Request HR for registration</h5>  
                <button id="register" class="btn btn-primary">Register</button>
            </div>
            `    
        }    
        let addModal = (i)=>{
        let modal = document.getElementsByClassName('modal')[i];
        let closeBtn = document.getElementsByClassName("close");
        closeBtn[i].addEventListener('click', () => {
            modal.style.display = "none";
            event.stopPropagation();
        });
        window.onclick = (event)=>{
            if (event.target == modal) {                
                modal.style.display = "none";
            }
            event.stopPropagation();
        }
    }
    
    let modalCnt = document.getElementsByClassName('modal-content')[2];
    
    modalCnt.innerHTML +=  `
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="registerModalLabel">Enter registration details
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
        </button>
    </div>
    <div class="modal-body">
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="text" class="form-control" id="firstName" placeholder="First Name">
            </div>
    
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="text" class="form-control" id="lastName" placeholder="Last Name">
            </div>
    
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="email" class="form-control" id="email" placeholder="Email id">
            </div>
    
            <div class="form-group">
                <input type="radio" name="gender" value="male">Male
                <input type="radio" name="gender" value="female">Female
                <input type="radio" name="gender" value="others">Others
            </div>
    
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
    
            <div class="form-group">
                <!-- <label for="firstName">Oracle ID:</label> -->
                <input type="password" class="form-control" id="confirmPassword" placeholder=" Confirm password">
            </div>
            <!-- <button class="btn btn-danger" onclick="resetFunction()">Reset</button> -->
            <button type="submit" class="btn btn-primary">Register</button>
    </div>
    <div class="modal-footer">
        <!-- <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Close</button> -->
        <button class="btn btn-danger" onclick="resetFunction()">Reset</button>
    </div>
    </div>`

    row.addEventListener('click',(event)=>{
        console.log(event.target.innerHTML);
        if(event.target.innerHTML == "Register"){
            let modal = document.getElementsByClassName('modal')[2];
            modal.style.display = "block";    
            addModal(2);
        }
    });
}

})()