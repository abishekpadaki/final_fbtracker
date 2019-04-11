(() => {
  "use strict"

  let role = sessionStorage.getItem("Role");
  let oracleId = sessionStorage.getItem("OracleId");

  let requests = window.requests;

  let notificationsCnt = document.getElementsByClassName('dropdown-content')[0];

  let link;

  if(role == "PM"|| role == "CT" || role == "HR" || role == "Mentor" || role == "Trainee")
    link = "../boards/feedback.html";
  else if(role == "SuperAdmin"){
    link="./super_admin_retrive_fb.html";
  }  

  let getData = (role, oracleId) => {
    let value = requests.find((val) => {
      return val.OracleId == oracleId && val.role == role;
    });
    return value.notifications;
  }

  let notifications = getData(role, oracleId);

  let updateNotifications = (notifications) => {

    notificationsCnt.innerHTML = `<h3 class="requestfb">Notifications</h3> <hr>`;

    for (let i = 0; i < notifications.Requester.length; i++) {

      let requester = dataBase.findIndex((val) => {
        return val.OracleId == notifications.Requester[i];
      });

      let requestedFor = dataBase.findIndex((val) => {
        return val.OracleId == notifications.RequestedFor[i];
      });

      notificationsCnt.innerHTML += `
            <span class="requestCnt">
                <b class="redText">${dataBase[requester].FirstName}</b>
                <p hidden>${dataBase[requester].OracleId}</p>
                requested Feedback for
                <b class="redText">${dataBase[requestedFor].FirstName}</b>
                <p hidden>${dataBase[requestedFor].OracleId}</p>
            </span>
            <hr>`;
    }

    let badge = document.getElementsByClassName('badge')[0];
    badge.style.visibility = "visible";
    badge.innerHTML = notifications.Requester.length;
  }

  updateNotifications(notifications);

  notificationsCnt.addEventListener('click', (event) => {

    let data,flag = 0,badge;

    if (event.target.tagName === "B") {
        data = event.target.parentElement.getElementsByTagName('P');
        flag = 1;
    }

    if (event.target.className === "requestCnt") {
        data = event.target.getElementsByTagName('P');
        flag = 1;
    }

    if (flag) {
        badge = document.getElementsByClassName('badge')[0];
        badge.innerHTML = parseInt(badge.innerHTML) - 1;

      sessionStorage.setItem("requesterOracleId", parseInt(data[0].innerHTML));
      sessionStorage.setItem("requestedForOracleId", parseInt(data[1].innerHTML));

      if (parseInt(badge.innerHTML) == 0) {
        badge.style.visibility = "hidden";
      }

      let index;

      for (let i = 0; i < notifications.Requester.length; i++) {
        if ((parseInt(data[0].innerHTML) == notifications.Requester)[i] && (parseInt(data[1].innerHTML) == notifications.RequestedFor[i])) {
          index = i;
          break;
        }
      }

      notifications.Requester.splice(index, 1);
      notifications.RequestedFor.splice(index, 1);

      updateNotifications(notifications);

      document.location.href = link;
    }
  });
})();