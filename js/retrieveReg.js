(() => {
  "use strict"
  let role = sessionStorage.getItem('Role');
  if (role == "HR") {
    let registrationsDB = window.registration;
    let dataBase = window.dataBase;

    let oracleId = sessionStorage.getItem('OracleId');

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
            <b>${requester.FirstName}</b>
              requested Registrations for
              <b>${i.FirstName}  ${i.LastName}</b>
              <p hidden>${i.OracleId}</p>
          </span>
          <hr>
          `
      }
      let badge = document.getElementsByClassName('badge')[1];
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
      let data,flag,badge;
      if (event.target.tagName === "B") {
        data = event.target.parentElement.getElementsByTagName('P');
        flag = 1;
      }

      if (event.target.className === "requestCnt") {
        data = event.target.getElementsByTagName('P');
        flag = 1;
      }
      
      if (flag) {
        badge = document.getElementsByClassName('badge')[1];
        badge.innerHTML = parseInt(badge.innerHTML) - 1;
        let details = registrations.find((val) =>{
          return val.OracleId == data[0].innerHTML;
        });
        console.log(details);

        let modalCnt = document.getElementsByClassName('modal-content')[2];
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
                                  <i class="fas fa-check-circle"></i> </button>
                          </div>
                          <div class="col-6">
                              <button type="button" class="btn btn-danger">
                                  <i class="far fa-times-circle"></i> </button>
                          </div>
                      
                      </div>                         </div>                
        ` 
        let modal = document.getElementsByClassName('modal')[2];
        modal.style.display = "block";
      }

      if (parseInt(badge.innerHTML) == 0) {
        badge.style.visibility = "hidden";
      }
      addModal(2);
    });
  }
})();