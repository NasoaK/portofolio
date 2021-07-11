/* import { start } from 'repl'; */
/* import Glider from 'librairiesJs/Glider.js-master/glider.js'; */
const title = document.querySelector('h1');
const enter_btn = document.getElementById('enter-btn');

enter_btn.addEventListener('click', function(){

});


const body = document.body ;
const html = document.documentElement;

let height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log(height);

document.querySelector('#particles-js').style.height = height + "px";