document.getElementbyClassName("hide").addEventListener("click",ToggleView,false);

var test = document.getElementById("lab_results");

function ToggleView() {
        //Om klassen hide inte finns, sätt, annars ta bort
        test.classList.toggle("hide");
}