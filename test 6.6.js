$(function(){
//Завдання 6
$("img").mouseenter(function(){
	$(this).width($(this).width()/2);
});
$("img").mouseleave(function(){
	$(this).width($(this).width()*2);
});
});