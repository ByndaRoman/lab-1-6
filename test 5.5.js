$(function(){
//Завдання 5
$('.features-grids img').click(function(){
	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	$(this).remove();
});
});