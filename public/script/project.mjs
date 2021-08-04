<<<<<<< HEAD:public/script/project.js
import {englishText} from './export.mjs';
=======
import {englishText} from './global.mjs';
>>>>>>> V2:public/script/project.mjs
const projects = [
  {
    name: "weatherApp",
    techno: "html css Javascript restAPI",
    image: "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
    link: "",
    origine: "codingJobs",
    done: false
},
    {
        name : "Loopstudio",
        techno :"js html css",
        about: "build out, landing page and get it looking as close to the design as possible.",
        about2:"Creation d'un site static pour une entreprise de réalité virtuelle ",
        image : "assets/images/projects/loopstudio.jpg",
        link : "https://stupefied-ritchie-04abce.netlify.app",
        code : 'https://github.com/NasoaK/loopstudio',
        origine : 'frontendMentor',
        done : true
    },
    
    {
        name : "Crowdfund",
        techno : 'angular css',
        about : "Frontend Mentor challenge, build product page for crowndfunding website and get it looking as close to the design as possible.",
        about2: " Creation de la page produits d'un site de crownfunding",
        image : "assets/images/projects/crowdfund.jpg",
        link : "https://crownfund-mk-ang.netlify.app",
        origine : 'frontendMentor',
        done : true
    },
    
    
    {
        name : "Card",
        techno : "html css",
        image : "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
        link : "",
        origine : 'frontendMentor',
        done : true
    
    },
    
    {
        name: "LetzGetJob",
        techno : 'laravel Jquery css',
        about: "Coding Jobz, final project mise en relation professionel particulier",
        about2: " Project final de la formation Coding jobs, site web de mise en relation professionnel particulier dans les métiers manuels",
        image : "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
        link : "",
        done: true
    },
    
    {
        name: "WhatsLove",
        techno: "unknow",
        image: "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
        link: "",
        origine: "codingJobs",
        done: false
    }
    ];
    
const container = document.querySelector('.card-container');
const projectMock = document.querySelector('.card');
const techno_container = document.querySelector('.card-techno-container');


for (const project of projects){
  const project_card = projectMock.cloneNode(true);
 
    project_card.querySelector('img').src = project.image;
    project_card.style.overFlow = "hidden";
    project_card.querySelector('.card-title').textContent = project.name;
    project_card.querySelector('.card-techno').textContent = project.techno;

    /* var str = project.techno.split(" ");
    str.map((st)=>{
      const technoElt = document.createElement('p');
      technoElt.textContent = st;
      technoElt.classList.add('card-techno');
      techno_container.appendChild(technoElt);
    }) */

    project_card.querySelector('.livebtn').href = project.link;
    project_card.querySelector('.codebtn').href = project.code;
    
/*  function openLink(e){
  window.open(e);
}
 project_card.querySelector('.livebtn').addEventListener('click', (e)=>{
  openLink(project.link)
});*/

    if(englishText){
      project_card.querySelector('.card-text').textContent = project.about;
    }else{
      project_card.querySelector('.card-text').textContent = project.about2;

    }
    container.appendChild(project_card);
}
    
projectMock.remove(); 
    
//glider carousel
new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    itemWidth: 100,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 750px
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 'auto',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1200px
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
    
 // TODO Vanilla tilt effect on card only on chrome or chrome's like
let is_chrome = true;
    
    if (navigator.userAgent.indexOf("Chrome") !== -1){
       // console.log('chrome');
        is_chrome = true;

    }else{
        //console.log('safari');
        is_chrome = false;
    };
    

    // TODO disable Tilt on smartphone

    function tilt_effect(){
      VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: is_chrome,
        "max-glare": 1,
        scale: 1.2
      });
    }

      if (window.matchMedia("(min-width: 700px)").matches) { // If media query matches
        tilt_effect();
      } 
    


