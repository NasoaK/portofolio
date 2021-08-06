const skills = [
    {name:"HTML 5", img:"assets/techno-icon/html5.png",img2:"assets/techno-icon/html5-2.png"},
    {name:"CSS", img:"assets/techno-icon/css.png",img2:"assets/techno-icon/css-2.png"},
    {name:"Javascript", img:"assets/techno-icon/js.png",img2:"assets/techno-icon/js-2.png"},
    {name:"Angular", img:"assets/techno-icon/angular.png",img2:"assets/techno-icon/angular-2.png"},
    {name:"Jquery", img:"assets/techno-icon/jquery.png",img2:"assets/techno-icon/jquery-2.svg"},
    {name:"php", img:"assets/techno-icon/php.png",img2:"assets/techno-icon/php-2.png"},
    {name:"responsive", img:"assets/techno-icon/responsive.png",img2:"assets/techno-icon/responsive-2.png"},
    {name:"figma", img:"assets/techno-icon/figma.png",img2:"assets/techno-icon/figma-2.png"},
    {name:"mySQL", img:"assets/techno-icon/mysql.png",img2:"assets/techno-icon/mysql-2.png"},
    {name:"laravel", img:"assets/techno-icon/laravel.png",img2:"assets/techno-icon/laravel-2.png"}

];

const skills_list = document.querySelector('#skills-list');
const skillMock = document.querySelector('.skill');

 for( const skill of skills){

    const skillClone = skillMock.cloneNode(true);
    skills_list.append(skillClone);
    skillClone.querySelector('p').innerText = skill.name;
    skillClone.querySelector('.skills-img').src = skill.img;
    skillClone.querySelector('.skills-img-2').src = skill.img2 
 }
   
 skillMock.remove();