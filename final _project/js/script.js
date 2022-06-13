function GoUrl(url){
    location.href=url;
}

var menu = document.getElementById('menu');
var addMenu = document.getElementById('addmenu');
addMenu.addEventListener('click', function(){
    menu.style.left = '0';
    menu.style.opacity = '1';
});
var close = document.getElementById('close');
close.addEventListener('click', function(){
    menu.style.left = '-100vw';
    menu.style.opacity = '0';
});

var back = document.getElementById('back');
if (back !== null) {
    back.addEventListener('click', function(){
    window.history.back(); return false;
    });
} 
