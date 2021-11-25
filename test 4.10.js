$(function(){
//Завдання 10
$('.blog-post').each(function(){
	$(this).click(function(){
		$("textarea").html($(".post-head", this).text() + " " + $(".categorie", this).text() + "\n" + $("textarea").text());
	});
});
});