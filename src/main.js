

const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.getElementById("sidebar");

btn.addEventListener('click', ()=>{
  if(sidebar.style.display === "none"){
    sidebar.style.display = "block";
  }else{
    sidebar.style.display = "none";
  }
})

