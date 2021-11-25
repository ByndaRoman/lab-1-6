$(function(){
//Завдання 9
$('img').mouseenter(function(){
	size_obj(this);
});

function size_obj(selectorObj)
{
	$('#p').text("Об'ект - " + $(selectorObj).attr("src") + ". Його ширина = " + $(selectorObj).width() + "px, висота = " + $(selectorObj).height()+" px.");
};
});