document.querySelector("#phone").addEventListener("change",ToggleViewP,false);
document.querySelector("#mail").addEventListener("change",ToggleViewM,false);
document.querySelector("#formbutton").addEventListener("click",CorrInput,false);


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
function CorrInput(e) {
    
    var error_message;
    var phone_number = document.querySelector("#phone_number").value;
    
    if (isNaN(phone_number) === true) {
        
        error_message = "Vänligen fyll i ett giltigt telefonnummer.";
        document.querySelector("#error_message").style.color = "red";
        document.querySelector("#error_message").innerHTML = error_message;
        e.preventDefault();
    }
}