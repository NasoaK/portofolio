export var englishText = false;
const particle_js = document.getElementById('particles-js');
export const lang_elt = document.querySelector('#lang');

export function toggleLang(a){

    lang_elt.addEventListener('click',()=>{
        englishText = !englishText;
        a();
        console.log(englishText);
    })
}

export function isChrome(){
    if (navigator.userAgent.indexOf("Chrome") !== -1){
        // console.log('chrome');
        return true;
        
    }else{
        //console.log('safari');
        return false;
    };
}

const section = document.querySelectorAll('section');

section.forEach(sec => {
    sec.style.height = window.innerHeight + "px";
});

// Typewritter.js

const typewriter = new Typewriter(app, {
    loop: false
});
    typewriter.typeString('Junior web developper')
    .pauseFor(1500)
    .deleteChars(14)
    .typeString('<span id="front">Frontend<span>')
    .deleteChars(8)
    .typeString('<span id="back">  Backend </span>')
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('web developper')
    .stop()
    .start();



