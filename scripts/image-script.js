var ImgArray = ["../Images/Car_XC60.jpg","../Images/Couple.jpg", "../Images/sommarbild.png"];

function MyDelay() {
    var Counter = 0;
    
    setInterval(function() {
        ChangeImage();
  
    //Så länge räknaren är mindre än bildarrayens längd, fortsätt...
    if (Counter < ImgArray.length-1) {
        Counter++;
        console.log(Counter);
    }
    //Annars börja om från början
    else {
        Counter = 0;
    }

}, 5000);
    function ChangeImage() {
    document.getElementById('slider').src = ImgArray[Counter]
    }
}
//Laddar Delayfunktionen när fönstret laddas.
window.onload = MyDelay();