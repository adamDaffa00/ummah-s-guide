const bg = document.querySelector(".landing");

// paralax efect
window.addEventListener("scroll", function(){
  bg.style.opacity = 1 - scrollY/innerHeight;
  bg.style.backgroundPositionY = -pageYOffset / 2 +'px' ;
		 
	const introBox = document.querySelectorAll(".box");

		// mengetahui posisi atas class intro-text
  introBox.forEach(box => {
    
  	const introPosition = box.getBoundingClientRect().top;
  	    
    	// mengetahui ukuran tinggi layar browser
  	const screenPosition = Math.floor(window.innerHeight / 1.1);
  	
  	if(introPosition < screenPosition){
  		box.classList.add("box-appear");
  	}		 
  });
});
