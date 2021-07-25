import {englishText, toggleLang, lang_elt} from './export.mjs';

const burger_btn = document.querySelector('.burger-btn');
const menu_list = document.querySelector('.menu-list');
const menu_link = menu_list.querySelectorAll('p');
const menu = document.querySelector('nav');
let open_menu = false;
const lang_menu_p = lang_elt.querySelectorAll('p');
const app = document.getElementById('app');


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

    //Open menu + burger-btn effect
    function toggleMenu(){
        open_menu = !open_menu;
        if(open_menu){
            menu.classList.add('open-menu');
            burger_btn.querySelectorAll('div')[2].style.transform = 'rotate(45deg)';
            burger_btn.querySelectorAll('div')[2].style.marginTop = '0px';
            burger_btn.querySelectorAll('div')[0].style.marginTop = '0px';
            burger_btn.querySelectorAll('div')[0].style.transform = 'rotate(-45deg)';
            burger_btn.querySelectorAll('div')[1].style.display = 'none';
            burger_btn.style.transform = 'translate(50%) rotate(180deg)';
            burger_btn.style.right = '50%';
  
            disableScroll();
        }else{
            menu.classList.remove('open-menu');
            burger_btn.querySelectorAll('div')[2].style.transform = 'rotate(0deg)';
            burger_btn.querySelectorAll('div')[2].style.marginTop = '10px';
            burger_btn.querySelectorAll('div')[0].style.marginTop = '-10px';
            burger_btn.querySelectorAll('div')[0].style.transform = 'rotate(0deg)';
            burger_btn.querySelectorAll('div')[1].style.display = 'unset';
            burger_btn.style.transform = 'rotate(0deg)';
            burger_btn.style.transform = 'translate(0%) rotate(0deg)';
            burger_btn.style.right = '10px';
            enableScroll();
        }
    }
  
// langue function
    function langMenu(){
        if(englishText == true){
            lang_menu_p[0].innerHTML = `English`;
            lang_menu_p[1].innerHTML = `Francais`;
            // Text menu link
            menu_link[0].innerHTML = "About";
            menu_link[1].innerHTML = "Skills";
            menu_link[2].innerHTML = "Projects";
            menu_link[3].innerHTML = "Contact";


        }else{
            lang_menu_p[0].innerHTML = `Francais`;
            lang_menu_p[1].innerHTML = `Anglais`;
            // Text menu link
            menu_link[0].innerHTML = "à propos";
            menu_link[1].innerHTML = "competence";
            menu_link[2].innerHTML = "projets";
            menu_link[3].innerHTML = "contact";
        }
    }

    console.log(menu_link);

    toggleLang(langMenu());
    burger_btn.addEventListener('click',()=>{toggleMenu();})
    menu_list.addEventListener('click',()=>{toggleMenu();});

