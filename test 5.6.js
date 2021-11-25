$(function(){
//Завдання 6
$('.features-grids img').click(function(){
	if($(this).attr('nomer')=="1")
	{
		$('.koshik-wrapper-items[nomer=1]').prepend($(this).clone());
	}
	else if($(this).attr('nomer')=="2")
	{
		$('.koshik-wrapper-items[nomer=2]').prepend($(this).clone());
	}
	else if($(this).attr('nomer')=="3")
	{
		$('.koshik-wrapper-items[nomer=3]').prepend($(this).clone());
	}
	else if($(this).attr('nomer')=="4")
	{
		$('.koshik-wrapper-items[nomer=4]').prepend($(this).clone());
	}
	$('.koshik-wrapper').addClass('full-koshik');
	$(this).remove();
});
});