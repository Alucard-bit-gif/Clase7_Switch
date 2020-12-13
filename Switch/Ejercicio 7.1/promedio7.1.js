//Inicio
document.getElementById('descuento').style.display = "none";
document.getElementById('sindescuento').style.display = "none";

//Declarar variables

var PVP = 50;
var cantidad;
var descuento = 0;
var precioFinal;
var codPromocion;


function Comprar() {

  document.getElementById('cantidad').style.display = "none"; 

  //Ingresar cantidad a comprar.

  cantidad = Number(document.getElementById('Compra').value);

  //Invocar funcion.

  precioFinal = pagoCompra();

}

function pagoCompra(){

switch (true) {
  case cantidad >= 50:
    document.getElementById('descuento').style.display = "block";   
    break;

  default:
    precioFinal = PVP * cantidad;
    document.getElementById('sindescuento').style.display = "block";
    document.querySelector('#sindescuento').innerHTML= "Precio= " + precioFinal + " €";      
    return precioFinal;
}

}

function Calcular() {

//Ingresar codigo de promoción.

codPromocion = document.getElementById('codigo').value;

//Procedimiento.

//Invocar funcion para cantidad.

precioFinal = pagoCompra()  

}

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
