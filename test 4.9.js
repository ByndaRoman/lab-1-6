$(function(){
//Завдання 9
$('.blog-post').each(function(){
	$(this).mouseenter(function(){
		$(".categorie", this).fadeIn(3000).html("Бажаєте замовити? Вартіть : <a href='#'>14000$</a>")
	});
	$(this).mouseleave(function(){
		$(".categorie").fadeOut(3000);
	});
});
});