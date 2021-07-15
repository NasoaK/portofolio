const contactForm = document.querySelector('#contact-form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('form-message');
let sendCv;
//checkBox email
const check = document.getElementById('check');

check.addEventListener('change',()=>{
    if(this.checked){
        sendCv = 'false'
    }else{
        sendCv = 'true'
    }
});



contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        sendCv: sendCv

    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');

    xhr.onload = function(){
        console.log(xhr.responseText);

        if(xhr.responseText == 'success'){
            alert('Email sent');
            fullName.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('something went wrong !')
        }

    }

    xhr.send(JSON.stringify(formData));
})