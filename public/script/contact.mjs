import {englishText, lang_elt} from './global.mjs';
const contactForm = document.querySelector('#contact-form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('form-message');
const lazyLoader_mail = document.getElementById('lazyLoader-mail');
const modal_success = document.querySelector('#modal-success');
let sendCv;

// Translate function
const input = document.querySelectorAll('input');
const check_text = contactForm.querySelector('p');

export function translate_form(){
 if(englishText){
    input[0].placeholder = "full name";
    input[1].placeholder = "Your email adress";
    input[2].placeholder = "subject";
    check_text.innerHTML = 'Want to receive my resume ?';
 
}else{
    input[0].placeholder = "Nom complet";
    input[1].placeholder = "ton adresse email";
    input[2].placeholder = "sujet";
    check_text.innerHTML = 'Tu veux recevoir mon cv par email ?';
 }
}




//checkBox email
const check = document.getElementById('check');

check.addEventListener('change',()=>{
    if(this.checked){
        sendCv = 'false'
    }else{
        sendCv = 'true'
    }
});

modal_success.addEventListener('click',()=>{

modal_success.style.display = "none";
lazyLoader_mail.style.opacity = 0.8;
lazyLoader_mail.style.display = "none";
});

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: fullName.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        sendCv: sendCv
    };
    lazyLoader_mail.style.display = "flex";

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('Content-Type', 'application/json',true);

    xhr.onload = function(){
        console.log(xhr.responseText);

        if(xhr.responseText === 'success'){

            setTimeout(function(){  
                lazyLoader_mail.style.opacity = 1;
            modal_success.style.display = "block";
            fullName.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
            console.log('email send');
            }, 2000);
        }else{
            alert('something went wrong !')
        }
    }

    xhr.send(JSON.stringify(formData));
});


