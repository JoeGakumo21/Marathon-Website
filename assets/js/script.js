// hiding links
const loggedOutLinks= document.querySelectorAll(".logged-out");
const loggedInLinks= document.querySelectorAll(".logged-in");

const setupUI=(user)=>{
  if(user){
    // toggle UI elements
    loggedInLinks.forEach(item => item.style.display ='block');
    loggedOutLinks.forEach(item => item.style.display ='block');
  }else{
    // toggle ui elements
    loggedInLinks.forEach(item => item.style.display ='none');
    loggedOutLinks.forEach(item => item.style.display ='block');
  }
};
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
// output the data to user
  const guideList=document.querySelector(".guides");
  // set guides for marathon
  const setupGuides=(data)=>{
     
    if(data.length){

      let html="";
      data.forEach(doc => {
        const guide=doc.data();
        // display
        const li=`
        <li>
        <div class="collapsible-header grey lighten-4">${guide.Marathon}</div>
          <div class="collapsible-body white"><span>${guide.Slogan}</span></div>
          <div class="collapsible-body white"><span>${guide.Running}</span></div>
        </li>     
        
        `;
        html +=li
      });
      guideList.innerHTML=html;
    }else{
      guideList.innerHTML=`<h5 class="center-align">Login to access more details on upcoming Marathon Competations or Create an account if you dont have</h5>`
    }
  }
