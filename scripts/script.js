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
//Funtion för validering av vad användaren fyller i på telefonnummer och email.
function CorrInput(e) {
    
    var error_message;
    if(document.querySelector("#phone").checked === true)
    {
        var phone_number = document.querySelector("#phone_number").value;
        if (isNaN(phone_number) === true || phone_number === "") {
        
            error_message = "Vänligen fyll i ett giltigt telefonnummer.";
            document.querySelector("#error_message").style.color = "red";
            document.querySelector("#error_message").innerHTML = error_message;
            e.preventDefault();
        }
    }
    if(document.querySelector("#mail").checked === true) {
        
        var mail_address = document.querySelector("#email").value;
        var valid_mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (valid_mail.test(mail_address) === false) 
        {
            error_message = "Vänligen fyll i en korrekt mailadress.";
            document.querySelector("#error_message").style.color = "red";
            document.querySelector("#error_message").innerHTML = error_message;
            e.preventDefault();
        }
    }
    
}