$(function(){
//Завдання 2
$('#about-moto').before("<p id='a1'> Цей абзац доданий за допомогою методу 'before'</p>");
$('#about-moto').after("<p id='a1'> Цей абзац доданий за допомогою методу 'after'</p>");
$('#about-moto').append("<p id='a1'> Цей абзац доданий за допомогою методу 'append'</p>");
$('#about-moto').prepend("<p id='a1'> Цей абзац доданий за допомогою методу 'prepend'</p>");
$('.head #a1').addClass('fon_yellow');
});