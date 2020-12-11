//Inicio

//Declarar variables

var PVP= 50;
var cantidad = 0;
var descuento = 0;
var precioFinal;
var codPromocion;

//Ingresar cantidad a comprar.

cantidad= Number(document.getElementById('Compra').value);

//Ingresar codigo de promoción.

//codPromocion = document.getElementById('Codigo').value;

//Procedimiento.

//Invocar funcion para cantidad.
 
switch(true){
  case cantidad >= 50:
    document.write('Debes ingresar codigo de compra para obtener tu descuento');
    break;
  
  default:
    document.write('no tienes derecho a descuento');
    break;
}





//pasamos a mayúsculas para evitar diferencias al comparar por haber usado minúsculas:

/*codPromocion = codPromocion.toUpperCase();  

switch(codPromocion) {

  case "PLUSORO":
  descuento = 25;
  break; 

  case "PLATINO33" :
  descuento = 20;
  break;

  case "100MAX" :
  descuento = 15;
  break; 

  case "SUPERSILVER" :
  descuento = 10;
  break;

  case "TOTALBRONCE" :
  descuento = 5;
  break;

  default: 
  alert("No ha introducido código promocional, o es erróneo");
}

precioFinal = PVP - descuento;
document.write("Precio= " + precioFinal + " €");*/


