jQuery(document).ready(function($){
	
	var elements = $(".timeline-block");
	
	//hide timeline blocks which are outside the viewport
	elements.each(function(){
		if($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
			$(this).find('.timeline-content, .timeline-point').addClass('hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		elements.each(function(){
			if($(this).offset().top <= ($(window).scrollTop() + $(window).height() * 0.75) && $(this).find('.timeline-content').hasClass('hidden')) {
				$(this).find('.timeline-point').removeClass('hidden').addClass('appear-in');
				$(this).find('.timeline-content').removeClass('hidden').addClass('bounce-in');
			}
		});
	});
	
});
  			