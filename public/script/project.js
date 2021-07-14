const projects = [
    {
        name : "Loopstudio",
        techno : "js",
        about: "build out, landing page and get it looking as close to the design as possible.",
        image : "assets/images/projects/loopstudio.jpg",
        link : "https://stupefied-ritchie-04abce.netlify.app",
        origine : 'frontendMentor',
        done : true
    },
    
    {
        name : "Crowdfund",
        techno : "angular",
        about : "Frontend Mentor challenge, build product page for crowndfunding website and get it looking as close to the design as possible.",
        image : "assets/images/projects/crowdfund.jpg",
        link : "https://crownfund-mk-ang.netlify.app",
        origine : 'frontendMentor',
        done : true
    },
    
    
    {
        name : "Card",
        techno : "html & css",
        image : "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
        link : "",
        origine : 'frontendMentor',
        done : true
    
    },
    
    {
        name: "LetzGetJob",
        techno : "laravel",
        about: "Coding Jobz, final project mise en relation professionel particulier",
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
    },
    {
        name: "weatherApp",
        techno: "html, css, Javascript, restAPI",
        image: "https://media-exp1.licdn.com/dms/image/C4D1BAQF8YuxGvAgqZw/company-background_10000/0/1594963208917?e=2159024400&v=beta&t=754ZegPvr7OdCeljpaSpRrCO5OVEeJrGZtlzSccbpvc",
        link: "",
        origine: "codingJobs",
        done: false
    }
    
    ];
    
const container = document.querySelector('.card-container');
const projectMock = document.querySelector('.card');
    
for (const project of projects){

       
const project_card = projectMock.cloneNode(true);
project_card.querySelector('img').src = project.image;
project_card.style.overFlow = "hidden";
project_card.querySelector('.card-title').textContent = project.name;
project_card.querySelector('.card-text').textContent = project.about;
project_card.querySelector('.card-techno').textContent = project.techno;
container.appendChild(project_card);
}
    
projectMock.remove(); 
    
//glider carousel

new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
    }
});
    
    
 // TODO Vanilla tilt effect on card
    const is_chrome = true;
    
    if (navigator.userAgent.indexOf("Chrome") !== -1){
        console.log('chrome')
    }else{
        console.log('safari');
    };
    
    console.log('bug');
    
    
    VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 25,
            speed: 400,
            glare: is_chrome,
            "max-glare": 1,
            scale: 1.2
        });
    
    
        console.log('bug');
    
console.log(document.documentElement.clientHeight);

