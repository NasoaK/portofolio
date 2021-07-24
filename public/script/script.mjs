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

const section = document.querySelector('section')


    section.style.height = window.innerHeight ;




