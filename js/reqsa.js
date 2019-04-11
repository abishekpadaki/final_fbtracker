let role1=sessionStorage.getItem("Role")
if(role1 == "PM"){
 let row = document.getElementById('request');
 row.innerHTML += `
  <div class="col-6 requestSaCard">  
  <div class="card mr-3">
     <div class="card-body">
         <h5>Request SA for email</h5>
             <div class="form-group">
                 <!-- <label for="firstName">Oracle ID:</label> -->
                 <input type="text" class="form-control" id="oracleId"
                        placeholder="Candidate's Oracle ID">
             </div>

             <div class="form-group">
                 <!-- <label for="firstName">Oracle ID:</label> -->
                 <input type="email" class="form-control" id="email" placeholder="Your email id">
             </div>

             <!-- <button class="btn btn-danger" onclick="resetFunction()">Reset</button> -->
             <button type="submit" class="btn btn-danger mt-0">Submit request</button>
  
     </div>
 </div>
 </div>
`
}