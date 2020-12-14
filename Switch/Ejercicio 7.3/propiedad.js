//Inicio

document.getElementById('resultado').style.display="none" ;

//Declarar variables

let precioM2 = 0;
let areaM2 = 0;
const cuotaInicial = 0.20;
const descuentoUno = 0.10;
const descuentoDos = 0.08;
let codigoPromo;
var precioInicial;
var precioCuota;
var precioDesc;
var precioFinal;

function Calcular()
{

  document.getElementById('descuento').style.display="none" ;
  document.getElementById('resultado').style.display="block" ;
  //Leer variables.

  //Ingresar metros cuadrados
  areaM2 = document.getElementById('Compra').value;

  //Ingresar cantidad de articulos a comprar
  precioM2 =  Number(document.getElementById('Precio').value);

  //Ingresar forma de pago.
  codigoPromo = document.getElementById('codigo').value;

  
  //Invocar funcion.

  precioFinal = valorCompra();
  
   
  //Imprimir funcion.

          document.querySelector('#Inicial').innerHTML= " $ " + precioInicial + " COP ";    
          document.querySelector('#Descuento').innerHTML= " $ " + precioDesc + " COP ";    
          document.querySelector('#Total').innerHTML =  " $ " + precioFinal + " COP ";

    

}

function valorCompra()
{
  switch (codigoPromo){

    case '0001':

             precioInicial = areaM2*precioM2;
             precioCuota = precioInicial*cuotaInicial;
             precioDesc = precioCuota*descuentoUno;
             precioFinal = precioCuota - precioDesc; 
             alert(precioFinal);
             return precioFinal;
    

                         

    break;        

    case '0002':

        precioInicial = areaM2*precioM2;
        precioCuota = precioInicial*cuotaInicial;
        precioDesc = precioCuota*descuentoDos;
        precioFinal = precioCuota - precioDesc; 
        alert(precioFinal);
        return precioFinal;
       
    break;  
                      

    default:
      
      alert('ingresa codigo');  
      
         }

  }




