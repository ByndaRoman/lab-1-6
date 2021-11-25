$(function(){
//Завдання 5
	var header = $(".header");
	var find = ".slide-text";
	header.mouseenter(function(){
		$(this).find(find).slideUp(3000);
	});
	
	header.mouseleave(function(){
		$(this).find(find).slideDown(3000);
	});
}); 