document.querySelector("#arrowleft").addEventListener("click",LastImage,false);
document.querySelector("#pause_img").addEventListener("click",StopImages,false);
document.querySelector("#arrowright").addEventListener("click",NextImage,false);

var ImgArray = ["../Images/Car_XC60.jpg","../Images/Couple.jpg", "../Images/sommarbild.png"];

    var Counter = 0;
    var MyInterval = setInterval(ChangeImage, 5000);
    
    //Pausar bildspelet
    function StopImages() {
        clearInterval(MyInterval);
    }
    //Möjliggör funktionen att pausa och starta bildspelet med samma knapp
    document.querySelector("#pause_img").onclick = function(){
    this.classList.toggle("paused");
    
    if(this.className === "paused"){
    clearInterval(MyInterval);
    }
    else{
        MyInterval = setInterval(ChangeImage, 5000);
    }
};
    //Bläddrar framåt
    function NextImage() {
        clearInterval(MyInterval);
        document.getElementById('slider').src = ImgArray[Counter];
        if (Counter === ImgArray.length-1) {
            Counter = 0;
        }
        else {
            Counter++;
        }
    }
    //Bläddrar bakåt
    function LastImage() {
        clearInterval(MyInterval);
        document.getElementById('slider').src = ImgArray[Counter];
        if (Counter === 0 ) {
                Counter = ImgArray.length-1;
            }
            else {
                Counter--;
            }
    }
    function ChangeImage() {
    
    document.getElementById('slider').src = ImgArray[Counter];
    //Så länge räknaren är mindre än bildarrayens längd, fortsätt...
    if (Counter < ImgArray.length-1) {
        Counter++;
    }
    //Annars börja om från början
    else {
        Counter = 0;
    }
    }
    

