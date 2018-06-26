$(document).ready(function() {

  /*--------- Vista Splash ----------*/
  setTimeout(function() {
    $("#splash").fadeOut(500);
  }, 3000); /*oculta la pantalla inicial*/
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000); /*Muestra la pantalla Principal*/

});


/*--------- Filtrado en imput ----------*/

$("#searcher").keydown(filterOpc);

function filterOpc() {
  var searchOption = $("#searcher").val().toLowerCase();
  if($("#searcher").val().trim().length > 0) {
      var filteredData = data.filter(function(restaurant) {
         console.log(restaurant);
          return restaurant.type.toLowerCase().indexOf(searchOption) >= 0; 
      });
      $("#section-food").empty();
      filteredData.forEach(function(restaurant){
        printHtml(restaurant);
      });
    } else {
      $("#section-food").empty();
      data.forEach(function(restaurant){
        printHtml(restaurant);
      });
}
}


/*--------- Pintar Informacion ----------*/
function printHtml(restaurant) {
   // crear elementos con DOM
  var $divCard = $("<div />", { "class": "col-lg-12 col-xs-2 card","width": "250px"});
  var $cardBody = $("<div />", { "class": "card-body"});
  var $restaurantName = $("<h4 />", { "class": "card-title"}).css("color", "yellow");
  var $imgLogo = $("<img />", {"width": "200px", "height": "200px ","class": "center", "src": restaurant.image});
  var $button = $('<input type="button" value="Informacion" id="btn-card" data-toggle="modal" data-target="#myModal"/>',{"class":"btn btn-primary"});
 
  
  //Pintar la informacion 
  $restaurantName.text(restaurant.name);

  //Agregar a los nodos padre
  $cardBody.append($restaurantName);
  $cardBody.append($imgLogo);
  $cardBody.append($button);
  $divCard.append($cardBody);
  
 
 // imprimir en el html
  $("#section-food").prepend($divCard);
 
/* +++++++ Modal +++++ */

  // $("#btn-card").click(function(){
  //     $("#myModal").modal(show); 
  //     var $modalTitle = 
  // });


}






// $(".cont-food").on("click", function() {
//   for (i = 0; i < data.length; i++) {
//     if ($(this).data("type") === data[i].type) {
//       $(".modal-title").text(data[i].name);
//       $(".img-food").attr("src", data[i].image);
//       $(".adress").text(data[i].address);
//       $(".description").text(data[i].description);
//       $(".price").text(data[i].money);
//       $(".service").text(data[i].type);

//     }
//   }
// });
