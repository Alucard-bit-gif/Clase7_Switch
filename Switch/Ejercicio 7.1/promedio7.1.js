//Inicio
document.getElementById('descuento').style.display = "none";

//Declarar variables

var PVP = 50;
var cantidad;
var descuento = 0;
var precioFinal;
var codPromocion;


function Comprar() {

  document.getElementById('cantidad').style.display = "none" /*Ocultar contenedor de datos de venta */
  document.getElementById('descuento').style.display = "block" /*Mostrar contenedor de orden de compra */

  //Ingresar cantidad a comprar.

  cantidad = Number(document.getElementById('Compra').value);

  switch (true) {
    case cantidad >= 50:
      break;

    default:
      precioFinal = PVP * cantidad;
      document.getElementById('cantidad').style.display = "none";
      document.getElementById('titulo2').style.display = "block";
      document.write("Precio= " + precioFinal + " €");      
      break;
  }

}



function Calcular() {

//Ingresar codigo de promoción.



  //codPromocion = document.getElementById('Codigo').value;

  //Procedimiento.

  //Invocar funcion para cantidad.

  

}
//pasamos a mayúsculas para evitar diferencias al comparar por haber usado minúsculas:

codPromocion = codPromocion.toUpperCase();

switch (codPromocion) {

  case "PLUSORO":
    descuento = 25;
    break;

  case "PLATINO33":
    descuento = 20;
    break;

  case "100MAX":
    descuento = 15;
    break;

  case "SUPERSILVER":
    descuento = 10;
    break;

  case "TOTALBRONCE":
    descuento = 5;
    break;

  default:
    alert("No ha introducido código promocional, o es erróneo");
}

precioFinal = PVP - descuento;
document.write("Precio= " + precioFinal + " €");
