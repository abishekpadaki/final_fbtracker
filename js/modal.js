(() => {

    let oracleId = sessionStorage.getItem('OracleId');
    let role = sessionStorage.getItem('role');

    let feedBack = window.feedBack;
    let dataBase = window.dataBase;

    let addFeedBackContent = (feeds)=>{
        document.getElementById('feedBackCardtxt').innerHTML = feeds[0].Suggestions;        
        document.getElementById('rating').innerHTML = feeds[0].Ratings;

        growthAreas = feeds[0].GrowthAreas.split(',');    
        top5Stuff = feeds[0].Top5Stuff.split(',');

        // document.getElementsByClassName('modal-content')[0].innerHTML += `<h4 style="color: red;">Growth Areas</h4>`
        // document.getElementsByClassName('modal-content')[1].innerHTML += `<h4 style="color: red;">Top5Stuff</h4>`

        for(let i of growthAreas){
            document.getElementsByClassName('modal-content')[0].innerHTML += `<p>${i}</p>`
        }   
        for(let i of top5Stuff){
            document.getElementsByClassName('modal-content')[1].innerHTML += `<p>${i}</p>`
        }   
    }

    let addModal = (i)=>{
        let modal = document.getElementsByClassName('modal')[i];
        let btn = document.getElementsByClassName('modalBtn')[i];
        let closeBtn = document.getElementsByClassName("close");
        btn.addEventListener( 'click', (event) => {
            modal.style.display = "block";
            event.stopPropagation();
        });
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

    if (role == "SuperAdmin") {
        document.getElementById('cardTitle').innerHTML = `<p><b>Feedback from &nbsp;</b>${details.FirstName}</p>`;
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
        let cardBody = document.getElementsByClassName('card-body');
        cardBody[0].addEventListener('click',()=>{
            // document.location.href = "../boards/druva.html";
        });
    }
})();