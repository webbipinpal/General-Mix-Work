$(document).ready(function(){

	
	$('body').click(function(e){
		if( $(window).width() < 768 ) {			
			if(!$(e.target).closest(".site-nav").length){
				if($(e.target).closest(".responsive-menu-toggle-icon").length){
					$(".site-nav").slideToggle("slow");	
				}else{
					$(".site-nav").slideUp();	
				}
			}
			}	
			
	});
	$(window).on('resize', function(){		
			$(".site-nav").slideUp();

		
	});
	$(".parent-list").click(function(){
		$(this).parent().siblings().removeClass("expanded");
		$(this).parent().toggleClass("expanded");
	});
	
	



	
});