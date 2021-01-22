
window.addEventListener("scroll", function(){
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
