document.querySelector("#arrowleft").addEventListener("click",LastImage,false);
document.querySelector("#pause_img").addEventListener("click",StopImages,false);
document.querySelector("#arrowright").addEventListener("click",NextImage,false);

var ImgArray = ["../Images/Car_XC60.jpg","../Images/Couple.jpg", "../Images/sommarbild.png"];

    var Counter = 0;
    var MyInterval = setInterval(ChangeImage, 5000);
    
    //Funktion för att byta bilder
    function ChangeImage() {
    //Så länge räknaren är mindre än bildarrayens längd, fortsätt...
    if (Counter < ImgArray.length-1) {
        Counter++;
    }
    //Annars börja om från början
    else {
        Counter = 0;
    }
    document.getElementById('slider').src = ImgArray[Counter];
    }
    //Pausar bildspelet, kan pausa och starta med samma knapp
    function StopImages() {
    this.classList.toggle("paused");
    
    if(this.className === "paused"){
        clearInterval(MyInterval);
    }
    else{
        MyInterval = setInterval(ChangeImage, 5000);
    }
    }
    //Bläddrar framåt
    function NextImage() {
        clearInterval(MyInterval);
        //Sätt klassen paused för att pause och play ska fungera med samma knapp
        document.querySelector("#pause_img").classList.add("paused");
        if (Counter === ImgArray.length-1) {
            Counter = 0;
        }
        else {
            Counter++;
        }
        console.log("Counter: " +Counter);
        document.getElementById('slider').src = ImgArray[Counter];
    }
    //Bläddrar bakåt
    function LastImage() {
        clearInterval(MyInterval);
        //Sätt klassen paused för att pause och play ska fungera med samma knapp
        document.querySelector("#pause_img").classList.add("paused");
        if (Counter === 0 ) {
                Counter = ImgArray.length-1;
        }
        else {
            Counter--;
        }
        console.log("Counter: " +Counter);
        document.getElementById('slider').src = ImgArray[Counter];
    }