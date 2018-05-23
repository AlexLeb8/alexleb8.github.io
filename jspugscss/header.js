//Drop-down menu
let ddmenu = document.querySelector('.ddMenu');
let menu = document.querySelectorAll('#headMenu');
for (i=0; i<menu.length; i++){
    menu[i].addEventListener('click', view)
}
function view(){
    ddmenu.classList.toggle('ddMenu-visible');
}
let menuLi=document.querySelectorAll('#nav');
for (i=0; i<menuLi.length; i++){
    menuLi[i].addEventListener('click', view);
}

//Hamburger------------------------------------
let burger=document.querySelector('.hamburger');
let menuList=document.querySelector('.sectionNav');

burger.addEventListener('click', menuDisplay);
function menuDisplay(){
    menuList.classList.toggle('navDisplay');
}
let menuHead=document.querySelectorAll('#headMenu');
for (i=0; i<menuHead.length; i++){
    menuHead[i].addEventListener('click', menuDisplay);
}


