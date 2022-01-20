

const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.getElementById("sidebar");
const welcomeTitle = document.getElementById("welcome-title");

btn.addEventListener('click', ()=>{
  if(sidebar.style.display === "none"){
    sidebar.style.display = "block";
    welcomeTitle.style.opacity = "0.1"
  }else{
    sidebar.style.display = "none";
    welcomeTitle.style.opacity = "1"
  }
})


function chgImg(x) {
  x.src = "./img/kevinbryan_stars.png";
  }
  
  function normalImg(x) {
  x.src = "./img/kevinbryan_chromatic.png";
  }