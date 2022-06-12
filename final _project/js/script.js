function GoUrl(url){
    location.href=url;
}

var menu = document.getElementById('menu');
var addMenu = document.getElementById('addmenu');
addMenu.addEventListener('click', function(){
    menu.style.visibility = 'visible';
    menu.style.width = '100vw';
});
var close = document.getElementById('close');
close.addEventListener('click', function(){
    menu.style.visibility = 'hidden';
    menu.style.width = '0';
})