(function() {
    $(function() {
		$(".piclist li").hover(
		  function(){
		    $(this).children(".mask").slideToggle(200);
		 });
		
    });
})(jQuery);
