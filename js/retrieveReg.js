(() => {
  "use strict"
  let role = sessionStorage.getItem('Role');
  if (role == "HR") {

    // let registrationsDB = window.registration;
    // let dataBase = window.dataBase;

    let registrationsDB = JSON.parse(localStorage.getItem('registration'));
    let dataBase = JSON.parse(localStorage.getItem('dataBase'));

    let oracleId = sessionStorage.getItem('OracleId');
    let details;
    let notificationsCnt = document.getElementsByClassName('dropdown-content')[1];

    let registrations = registrationsDB.filter((val) => {
      return val.HrOracleId == oracleId;
    });


    let updateNotifications = (notifications) => {
      notificationsCnt.innerHTML = `<h3 class="requestfb">Registrations</h3> <hr>`;
      for (let i of notifications) {
        let requester = dataBase.find((val) => {

          return val.OracleId == i.RequestorId;
        });
        // console.log(requester);
        notificationsCnt.innerHTML += `
          <span class="requestCnt">
            <b class="redText">${requester.FirstName}</b>
              requested Registrations for
              <b class="redText">${i.FirstName}  ${i.LastName}</b>
              <p hidden>${i.OracleId}</p>
          </span>
          <hr>
          `
      }
      let badge = document.getElementsByClassName('badge')[1];
      if(notifications.length)
        badge.style.visibility = "visible";
      badge.innerHTML = notifications.length;
    }


    let addModal = (i)=>{
      let modal = document.getElementsByClassName('modal')[i];
      let closeBtn = document.getElementsByClassName("close");
      // btn.addEventListener( 'click', (event) => {
      //     modal.style.display = "block";
      //     event.stopPropagation();
      // });
      closeBtn[i].addEventListener('click', () => {
          modal.style.display = "none";
          event.stopPropagation();
      });
      window.onclick = (event)=>{
          // console.log(event.target,modal);
          if (event.target == modal) {                
              modal.style.display = "none";
          }
          event.stopPropagation();
      }
  }

    updateNotifications(registrations);
    notificationsCnt.addEventListener('click', (event) => {
      // console.log(event.target);
      let data,flag;
      if (event.target.tagName === "B") {
        data = event.target.parentElement.getElementsByTagName('P');
        flag = 1;
      }

      if (event.target.className === "requestCnt") {
        data = event.target.getElementsByTagName('P');
        flag = 1;
      }
      
      if (flag) {
        // badge = document.getElementsByClassName('badge')[1];
        // badge.innerHTML = parseInt(badge.innerHTML) - 1;
        details = registrations.find((val) =>{
          return val.OracleId == data[0].innerHTML;
        });
        
        // let modalCnt = document.getElementsByClassName('modal-content')[2];
        let modalCnt = document.getElementById('modal-content');
        console.log(modalCnt);
        modalCnt.innerHTML = ` 
                          <div class="modal-header">
                          <h4 style="color: red;">Registration Request</h4>
                          <div class="close">&times;</div>
                          </div> 
                          <div class="modal-body">    
                               <p> OracleId: ${details.OracleId} </p>
                               <p> FirstName: ${details.FirstName}</p>
                               <p> LastName: ${details.LastName}</p>
                               <p> EmailId: ${details.EmailId}</p>
                               <p> Gender: ${details.gender}</p>
                               <p> Role: ${details.role}</p>
                          </div>     
                          <div class="modal-footer">
                          <div class="row">
                          <div class="col-6">
                              <button type="button" class="btn btn-success">
                                Accept  <i class="fas fa-check-circle"></i> </button>
                          </div>
                          <div class="col-6">
                              <button type="button" class="btn btn-danger">
                                Reject  <i class="far fa-times-circle"></i> </button>
                          </div>
                      
                      </div>                         </div>                
        ` 
      let modal = document.getElementsByClassName('modal')[2];
        modal.style.display = "block";
      }

      addModal(2);
    });

    let flag = 0;
    let modal = document.getElementsByClassName('modal')[2];
    modal.addEventListener('click',(event)=>{
        if(event.target.className == "btn btn-success" || event.target.className == "fas fa-check-circle"){
            flag = 1;
            let index = registrations.findIndex((val)=>{
              return val.OracleId == details.OracleId;
            })
            registrations.splice(index,1);
            localStorage.setItem('registration',JSON.stringify(registrations));
            delete details.RequestorId;
            dataBase.push(details);
        }
        else if(event.target.className == "btn btn-danger" || event.target.className == "far fa-times-circle"){
          flag = 1;
          let index = registrations.findIndex((val)=>{
            return val.OracleId == details.OracleId;
          })
          registrations.splice(index,1);
          localStorage.setItem('registration',JSON.stringify(registrations));
        }

        if(flag){          
          updateNotifications(registrations);
          modal.style.display = "none";
        }
    });
  }
})();