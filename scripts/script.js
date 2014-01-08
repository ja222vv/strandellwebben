document.querySelector("#phone").addEventListener("change",ToggleViewP,false);
document.querySelector("#mail").addEventListener("change",ToggleViewM,false);

var read_phone = document.querySelector("#phonebox");
var read_mail = document.querySelector("#mailbox");
        
function ToggleViewM() {
        if(document.querySelector("#mail").checked === true || document.querySelector("#mail").checked === false)
        {
           read_mail.classList.toggle("hide"); 
        }
}
function ToggleViewP() {
        if(document.querySelector("#phone").checked === true || document.querySelector("#phone").checked === false)
        {
            read_phone.classList.toggle("hide");
        }
}