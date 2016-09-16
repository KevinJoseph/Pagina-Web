		$(document).ready(function(){
			$("#inicio").css({"height":$(window).height()})
			var menu = 1;
			$("#abrir_menu, #cerrar_menu").click(function(){
				if(menu == 1){
					$("#menu").css({"left":"0"});
					menu = 0;
				}
				else{
					$("#menu").css({"left":"-100%"});
					menu = 1;	
				}
			});

			$(function(){
      $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
             var $target = $(this.hash);
             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
             if ($target.length) {
                 var targetOffset = $target.offset().top;
                 $('html,body').animate({scrollTop: targetOffset}, 1000);
                 return false;
            }
       }
   });  
});



		});