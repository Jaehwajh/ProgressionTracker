const expand = document.querySelector(".sidebar");
const show = document.querySelector("responsive-navbar");

function openNav(){
    if(show.style.display === "none"){
        show.style.display = 'block'
        expand.style.display = "none"
    }else{
        show.style.display = "none"
    }
};

expand.addEventListener("mouseover", openNav)