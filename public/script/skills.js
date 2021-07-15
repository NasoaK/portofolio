const skills = [
    {name:"HTML 5", img:"assets/techno-icon/icons8-html-5-100.png"},
    {name:"CSS", img:"assets/techno-icon/icons8-css3-100.png"},
    {name:"Javascript", img:"assets/techno-icon/icons8-logo-javascript-100.png"},
    {name:"Angular", img:"assets/techno-icon/icons8-angularjs-100.png"},
    {name:"Jquery", img:"assets/techno-icon/icons8-jquery-100.png"},
    {name:"php", img:"assets/techno-icon/icons8-logo-php-100.png"},
    {name:"responsive", img:"assets/techno-icon/icons8-requêtes-médias-100.png"},
    {name:"figma", img:"assets/techno-icon/icons8-figma-100.png"},
    {name:"mySQL", img:"assets/techno-icon/icons8-logo-de-mysql-100.png"},
    {name:"laravel", img:"assets/techno-icon/icons8-laravel-100.png"}

];

const skills_list = document.querySelector('#skills-list');
const skillMock = document.querySelector('.skill');

 for( const skill of skills){

    const skillClone = skillMock.cloneNode(true);
    skills_list.append(skillClone);
    skillClone.querySelector('p').innerText = skill.name;
    skillClone.querySelector('img').src = skill.img;
 }
   
 skillMock.remove();