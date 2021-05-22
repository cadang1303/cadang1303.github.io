const btn = document.getElementById("btn");
var scrollTop = 0;

if(window.scrollBy(100,100)) {
    btn.classList.toggle("hide");
}

if(window.pageYOffset = scrollTop){
    btn.classList.add("hide");
}