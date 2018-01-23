
$(document).ready(function() {

  setTimeout(function() {
        $("#splash").fadeOut(500);
    },3000); /*oculta la pantalla inicial*/
    setTimeout(function() {
        $("#main").fadeIn(500);
    },3000); /*Muestra la pantalla Principal*/

});
