$(function () {

  var categorias = ["L", "D", "S"]; 


  $("#specials-tile").click(function (event) {
    event.preventDefault();

    var randomIndex = Math.floor(Math.random() * categorias.length);
    var categoriaSeleccionada = categorias[randomIndex];

    var url = "menu.html?category=" + categoriaSeleccionada;
    window.location.href = url;
  });
});
