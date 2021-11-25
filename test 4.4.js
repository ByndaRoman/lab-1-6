$(function(){
//Завдання 4
$(".features-grids img").each(function(){
	$(this).click(function(){
		alert($(this).attr("src"));
	});
});
}); 