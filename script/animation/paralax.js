const bg = document.querySelector(".landing");

// paralax efect
window.addEventListener("scroll", function(){
  bg.style.opacity = 1 - scrollY/innerHeight;
  bg.style.backgroundPositionY = -pageYOffset / 2 +'px' ;
});
