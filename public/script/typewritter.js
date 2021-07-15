import {englishText, toggleLang, lang_elt} from './script.mjs';

const burger_btn = document.querySelector('.burger-btn');
const menu_list = document.querySelector('.menu-list');
const menu = document.querySelector('nav');
let open_menu = false;
const lang_menu_p = lang_elt.querySelectorAll('p');
const app = document.getElementById('app');
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


    function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }

    function toggleMenu(){
        open_menu = !open_menu;
        if(open_menu){
            menu.classList.add('open-menu');
            burger_btn.querySelectorAll('div')[1].style.transform= 'rotate(90deg)';
            burger_btn.querySelectorAll('div')[0].style.marginTop= '0px';
            burger_btn.querySelectorAll('div')[1].style.marginTop= '0px';
            disableScroll();
        }else{
            menu.classList.remove('open-menu');
            burger_btn.querySelectorAll('div')[1].style.transform = '';
            burger_btn.querySelectorAll('div')[0].style.marginTop= '-5px';
            burger_btn.querySelectorAll('div')[1].style.marginTop= '5px'; 
            enableScroll();
        }
    }
  

    function langMenu(){
        if(englishText == true){
            lang_menu_p[0].innerHTML = `English`;
            lang_menu_p[1].innerHTML = `Francais`;
        }else{
            lang_menu_p[0].innerHTML = `Francais`;
            lang_menu_p[1].innerHTML = `Anglais`;
        }
    }

    langMenu();

    burger_btn.addEventListener('click',()=>{toggleMenu();})
    menu_list.addEventListener('click',()=>{toggleMenu();});