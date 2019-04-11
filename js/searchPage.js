
var x= sessionStorage.getItem('st');
    
console.log(x);

var data = window.dataBase;
console.log(data);
var match=[{}];


var htmltxt=document.getElementById('main_body');

var j=0;
for(var key in data){
    
        

if (data[key].OracleId==x){
    match[j]=data[key];
    j++;
}

else if(data[key].FirstName==x){
    match[j]=data[key];
    j++;
    }

}
if(j>0){
for (var key in match) {
    
    htmltxt.innerHTML +=`<div class="row">


<div class="card card_one col-md-6" style="width: 50rem;">
    <div class="card-body">
        <div class="row">
            <div class="profile_pic col-md-6">
                <img src="${match[key].profilePic}" style="width:100px;height:100px;" align="left">
                <div style="text-align: center; font-size: 20px;">
                <b>${match[key].FirstName}&nbsp;${match[key].LastName}</b><br>
                ${match[key].OracleId}<br>
                ${match[key].role}

            </div>

            </div>
            

            <div class="search_card_buttons col-md-4">
                <div class="self_fb_button" >
                    <button type="button" class="btn btn-info">Request Feedback for Self</button>
                </div>
                <div class="other_fb_button">
                                    <button type="button" class="btn btn-info">Request Feedback for someone else</button>
                </div>
            </div>

        </div>


    </div>

</div>
</div>`;
}
}

else{
    htmltxt.innerHTML +=`<h1>Sorry, No match found</h1>`;
}
