$(function(){
//Завдання 3
change_width(".slide-btn", 500);
function change_width(selectorObj, w)
{
	var hght = $(selectorObj).height();
	var wdth = $(selectorObj).width();
	var h = (w*hght)/wdth;
	$(selectorObj).width(w);
	$(selectorObj).height(h);
};
});