$(function(){
//Завдання 7
var a=0;
var UAH=0;
$('.features-grids img').click(function(){
	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	a+=1;
	UAH+=parseInt($(this).attr('price'));
	$('.info').text("Всього "+a+" мотоциклів на суму "+UAH+" UAH");
});
$('.koshik-wrapper').on('click', 'img', function(){
	$('.koshik-wrapper').addClass('full-koshik').prepend($(this).clone());
	$(this).remove();
	a-=1;
	UAH+=parseInt($(this).attr('price'));
	$('.info').text("Всього "+a+" мотоциклів на суму "+UAH+" UAH");
});
});