$(function(){
//Завдання 7
$('img').mouseenter(function(){
	change_width_b(this);
});
$('img').mouseleave(function(){
	change_width_s(this);
});
function change_width_b(selectorObj)
{
	$(selectorObj).width($(selectorObj).width()*2);
};
function change_width_s(selectorObj)
{
	$(selectorObj).width($(selectorObj).width()/2);
};
});