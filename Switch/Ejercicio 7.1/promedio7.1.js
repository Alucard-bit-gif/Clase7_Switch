//Inicio

document.getElementById('resultado').style.display="block" ;

//Declarar variables

const precio = 5000;
const descuento = 0.10;
var codigoPromo;
var cantidad;
var precioInicial;
var precioDesc;
var precioFinal;

function Calcular()
{

  //Leer variables.

  //Ingresar codigo.
  codigoPromo = document.getElementById('codigo').value;

  //Ingresar cantidad de articulos a comprar

  cantidad =  document.getElementById('Compra').value;

  //Invocar funcion.

  precioFinal = valorCompra();
  precioInicial = cantidad*precio;
  precioDesc = precioInicial*descuento;
   
  //Imprimir funcion.

    

}

function valorCompra()

