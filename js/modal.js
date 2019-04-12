(() => {

    let oracleId = sessionStorage.getItem('OracleId');
    let role = sessionStorage.getItem('Role');

    let feedBack = window.feedBack;
    let dataBase = window.dataBase;

    let addFeedBackContent = (feeds)=>{
        document.getElementById('feedBackCardtxt').innerHTML = feeds[0].Suggestions;        
        document.getElementById('rating').innerHTML = feeds[0].OverallRating;

        growthAreas = feeds[0].GrowthAreas.split(',');    
        top5Stuff = feeds[0].Top5Stuff.split(',');

        for(let i of growthAreas){
            document.getElementsByClassName('modal-content')[0].innerHTML += `<p>${i}</p>`
        }   
        for(let i of top5Stuff){
            document.getElementsByClassName('modal-content')[1].innerHTML += `<p>${i}</p>`
        }   
    }

    let addModal = (j)=>{
        let modal = document.getElementsByClassName('modal')[j];
        let btn = document.getElementsByClassName('modalBtn')[j];
        let closeBtn = document.getElementsByClassName("close");
        btn.addEventListener( 'click', (event) => {
            modal.style.display = "block";
            event.stopPropagation();
        });
        closeBtn[j].addEventListener('click', () => {
            modal.style.display = "none";
            event.stopPropagation();
        });
        window.addEventListener('click',()=>{
            // console.log(event.target,modal);
            if (event.target == modal) {                
                modal.style.display = "none";
            }
            event.stopPropagation();
        });
    }

    console.log(role);

    if (role == "SuperAdmin") {
        document.getElementById('cardTitle').innerHTML = `<p><b>Feedback from &nbsp;</b>${feedBack[0].FirstName} to ${feedBack[0].SenderOracleID}</p>`;
        addFeedBackContent(feedBack);        
        addModal(0);
        addModal(1);
    } else {
        let feeds = feedBack.filter((val) => {
            return val.OracleId == oracleId;
        });
        let details = dataBase.find((val) => {
            return val.OracleId == feeds[0].SenderOracleID;
        });
        document.getElementById('cardTitle').innerHTML = `<p><b>Feedback from &nbsp;</b>${details.FirstName}</p>`;
        addFeedBackContent(feeds);
        addModal(0);
        addModal(1);
        let viewFb = document.getElementsByClassName('viewFb')[0];
        viewFb.addEventListener('click',()=>{
            document.location.href = "../boards/feedBackTable.html";
        });
    }
})();