$(function(){
//Завдання 7
$(".features-grid").click(function(){
	$("h3", this).html("<a href='#'>Ви обрали: "+$("h3", this).text()+"</a>");
});
}); 