import {translate_about} from './about.mjs';
import {translate_menu, animation_translate} from './header.mjs';
import {translate_form, lazyLoader} from './contact.mjs';

export var englishText = false;
export const lang_elt = document.querySelector('#lang');
const particle_js = document.getElementById('particles-js');
const h3 = document.querySelectorAll('h3')


function translate_h3(){

   if(englishText){
       h3[0].innerHTML = "About";
       h3[1].innerHTML = "my toolkit";
       h3[2].innerHTML = "projects";
       h3[3].innerHTML = "get in touch";
    }else{
        h3[0].innerHTML = "à propos";
        h3[1].innerHTML = "mes outils";
        h3[2].innerHTML = "Mes projet";
        h3[3].innerHTML = "contact";
    }
}

function toggleLang(){

    lang_elt.addEventListener('click',()=>{
        englishText = !englishText;
       translate_about();
       translate_menu();
       translate_h3();
       translate_form();
       animation_translate();
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

toggleLang();

const section = document.querySelectorAll('section');

section.forEach(sec => {
    sec.style.minHeight = window.innerHeight + "px";
    sec.style.maxHeight = "fit-content";
});

// loader wait for ressources

lazyLoader.style.display = "flex";

setTimeout(()=>{
    lazyLoader.style.display = "none";
}, 1000)



