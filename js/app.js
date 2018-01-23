$(document).ready(function() {

  /*--------- Vista Splash ----------*/
  setTimeout(function() {
    $("#splash").fadeOut(500);
  }, 3000); /*oculta la pantalla inicial*/
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000); /*Muestra la pantalla Principal*/

});


/*--------- Pintar Informacion ----------*/
var container = $("#restaurant");
var modal = $(".modal");

function infoOfFood() {
  for (var i = 0; i < data.length; i++) {
    var cont = $("</div>");
    cont.addClass("col-xs-12 col-xs-offset-2 cont-food");
    cont.attr("data-type", data[i].type);
    cont.attr("data-toggle", "modal");
    cont.attr("data-targe", "#modal-food");
    container.append(cont);

    var textFood = $("</p>");
    textFood.addClass("nameFood");
    textFood.text(data[i].name);
    cont.append(textFood);

    var images = $("<img/>");
    images.addClass("img-restaurant");
    images.attr("src", data[i].image);
    cont.append(images);

  }
}

infoOfFood();
/* +++++++ Modal +++++ */

$(".cont-food").on("click", function() {
  for (i = 0; i < data.length; i++) {
    if ($(this).data("type") === data[i].type) {
      $(".modal-title").text(data[i].name);
      $(".img-food").attr("src", data[i].image);
      $(".adress").text(data[i].address);
      $(".description").text(data[i].description);
      $(".price").text(data[i].money);
      $(".service").text(data[i].type);

    }
  }
});
