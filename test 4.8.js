$(function(){
//Завдання 8
$('.features-grid').click(function(){
	$("h3", this).html("<a href='#'>Ви обрали: <br><br>"+$("h3", this).text()+"</a>")
});
}); 