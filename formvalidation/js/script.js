const { set } = require("mongoose");


var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var phoneError=document.getElementById("phone-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var namee=document.getElementById("contact-name").value;
    if (namee.length == 0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!namee.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){ //this is to check minimum two words are present and they contain only alphabets
        nameError.innerHTML="Write full name";
        return false;
    }

    nameError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true

}

function validatePhone(){
    var phone=document.getElementById("contact-phone").value;
    if (phone.length == 0){
        phoneError.innerHTML="Phone no is required";
        return false;
    }
    if (phone.length != 10){
        phoneError.innerHTML="Phone no should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]+$/)){ //this is to check numbers are between 0-9
        phoneError.innerHTML="Only digits please";
        return false;
    }

    phoneError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true

}

function validateEmail(){
    var emaill=document.getElementById("contact-email").value;
    if (emaill.length == 0){
        emailError.innerHTML="Email is required";
        return false;
    }
    if (!emaill.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML="Invalid Email";
        return false;
    }
    emailError.innerHTML="<i class='fas fa-check-circle'></i>";
    return true
}

function validateMessage(){
    var message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length;
    
    if(message.length<required){
        messageError.innerHTML=`${left} characters left`;
        return false;
    }
    messageError.innerHTML='<i class="fas fa-check-circle"></i>';
    return true
}

function validateForm(){
    var name=validateName();
    var email=validateEmail();
    var phone=validatePhone();
    var message=validateMessage();
    if(name && email && phone && message){
        return true;
    }
    submitError.innerHTML="Please fill the form correctly";
    setTimeout(function(){
        submitError.innerHTML="";
    }, 3000);
    return false;
}

 //this will print Hello [object Object] after 1 second