$(function(){
//Завдання 4
$('.features-grids img').click(function(){
	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
});
});