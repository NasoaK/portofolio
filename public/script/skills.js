const skills = [
    {name:"HTML 5", img:"assets/techno-icon/html.png"},
    {name:"CSS", img:"assets/techno-icon/css3.png"},
    {name:"Javascript", img:"assets/techno-icon/js.png"},
    {name:"Angular", img:"assets/techno-icon/angular.png"},
    {name:"Jquery", img:"assets/techno-icon/jquery.png"},
    {name:"php", img:"assets/techno-icon/php.png"},
    {name:"responsive", img:"assets/techno-icon/responsive.png"},
    {name:"figma", img:"assets/techno-icon/figma.png"},
    {name:"mySQL", img:"assets/techno-icon/mysql.png"},
    {name:"laravel", img:"assets/techno-icon/laravel.png"}

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