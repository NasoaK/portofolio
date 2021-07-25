import {englishText, toggleLang, lang_elt} from './export.mjs';
const h3 = document.querySelectorAll('h3');

englishText;
function translate_title(){
    if(englishText == true){
        h3[0].innerHtml = "about";
        h3[1].innerHtml = "skills";
        h3[2].innerHtml = "projects";
        h3[3].innerHtml = "contact";

    }else{
        h3[0].innerHtml = "à propos";
        h3[1].innerHtml = "competences";
        h3[2].innerHtml = "projets";
        h3[3].innerHtml = "contact";
    }
}

toggleLang(translate_title);