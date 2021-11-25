$(function(){
//Завдання 5
$('img').click(function(){
	if($(this).attr('title')==0){
		$(this).width($(this).width()/2);
		$(this).height($(this).height()/2);
		$(this).attr('title', "1");
	}
	else if($(this).attr('title')==1)
	{
		(this).width($(this).width()*2);
		$(this).height($(this).height()*2);
		$(this).attr('title', "0");
	}
});
});