import {englishText,toggleLang} from './export.mjs';

const about = document.querySelector('.about-text-box');
const about_text = about.querySelectorAll('p');
englishText;


function a(){
    if(englishText == true){
        about_text[0].textContent = "Hi i\'m Mike. Nice to meet you,";
        about_text[1].textContent = `After starting a university course in accounting,
        I got a taste for the effort of manual trades, during a student job in the construction industry
        not very motivated by the trades of compatibility I stopped my studies and worked in various fields, without finding my way ...`;
        about_text[2].textContent =`At the end of 2020 thanks to the adem I had the opportunity to train as a
        web developer which I immediately liked,this said I also understood that this new skill does not suffice to find a job`;
        about_text[3].textContent = ` So i'm back to present my self as a junior web developper still in progess with a real interest in all scope of IT `;
    } else{
        about_text[0].textContent = "Salut je suis Mike. Ravi de vous rencontrer,";
        about_text[1].textContent = ` Aprés avoir demarré un cursus universitaire en comptabilité, 
        j'ai pris gout a l'effort des métiers manuels, pendant un job étudiant dans le btp
        pas très motivé par les metiers de la compatbilité j'ai arréte mes études et travaillé dans divers domaines, sans y trouver ma voie...`;
        about_text[2].textContent = `Fin 2020 grace a l'adem j'ai eu l'opportunité une formation de web developper qui m'as tout de suite plu, 
        ceci dis j'ai aussi compris que cette nouvelle compétence ne suifissait pas pour trouver un emploi, `;
        about_text[3].textContent = ` Je suis donc de retour pour me présenter en tant que développeur web junior toujours en cours avec un réel intérêt pour tous les domaines de l'informatique`;
    }
}

toggleLang(a);

// Animation on about for mobile
 const about_box = document.querySelector('.about-container');
 const img_about = about_box.querySelector('.about-img');
const txt_about = about_box.querySelector('.about-text-box');
const div_txt = txt_about.querySelectorAll('div');
const about_btn = txt_about.querySelector('#about-btn');
let click_about = 0;
 about_btn.addEventListener('click',(e)=>{

    click_about ++;
    console.log('click' + click_about);

    if(click_about%2){
        img_about.classList.add('about-img-effect');
        txt_about.classList.add('about-text-effect');
        about_btn.querySelector('img').style.transform = "rotate(180deg)";
        if(window.matchMedia('(max-width:800px)').matches){
            div_txt[1].style.marginTop = "-75%";
        }
        console.log('effect');
    }else{
        img_about.classList.remove('about-img-effect');
        txt_about.classList.remove('about-text-effect');
        div_txt[1].style.marginTop = "0%";
        about_btn.querySelector('img').style.transform = "rotate(0deg)";
    }
 

    
 });