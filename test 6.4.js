$(function(){
//Завдання 4
change_width(".slide-btn", 500);
function change_width(selectorObj, w)
{
	var hght = $(selectorObj).height();
	var wdth = $(selectorObj).width();
	$(selectorObj).width(w/2);
	$(selectorObj).height(h/2);
};
});