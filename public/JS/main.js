const getPast = document.getElementById("past");
const getCurrent = document.getElementById("current");
const hideEntries = document.getElementById("current-entries");
const hidePastEntries = document.getElementById("past-entries");

// Animation



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

