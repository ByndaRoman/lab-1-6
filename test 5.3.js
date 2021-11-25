$(function(){
//Завдання 3
$('li').each(function(){
	$(this).mouseenter(function(){
		$(this).addClass('svitlo');
	})
	$(this).mouseleave(function(){
		$(this).removeClass('svitlo');
});
});
});