$(function(){
	$('.js_open_popup').click(function(e){
		e.preventDefault();
	    $('.js_popap').show();
	});
	$('.js_close').click(function(){
		$('.js_popap').hide();
	});
	
	$('.js_panel-expand').click(function(){
		$('.js_user-menu').show(300);
		$('.js_panel-expand').hide();
	});
})
