const getPast = document.getElementById("past");
const getCurrent = document.getElementById("current");
const hideEntries = document.getElementById("current-entries");
const hidePastEntries = document.getElementById("past-entries");


function showPast(){
    if(getPast.style.height <= "5%"){
        getPast.style.height = "95%"
        getCurrent.style.height = "5%"
        hideEntries.style.display = "none"
        hidePastEntries.style.display = "flex"
    }
}

function showCurrent(){
    if(getCurrent.style.height <= "5%"){
        getPast.style.height = "5%"
        getCurrent.style.height = "95%"
        hidePastEntries.style.display = "none"
        hideEntries.style.display = "flex"
    }
}


// Modal View
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

function modalView(){
    modal.classList.remove("hidden")
}

// Clearing modal
function clearModal(){
    modal.classList.add("hidden")
}

closeModal.addEventListener("click", clearModal);


