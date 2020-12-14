//Inicio

document.getElementById('resultado').style.display="none" ;

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

  document.getElementById('descuento').style.display="none" ;
  document.getElementById('resultado').style.display="block" ;
  //Leer variables.

  //Ingresar codigo.
  codigoPromo = document.getElementById('codigo').value;

  //Ingresar cantidad de articulos a comprar

  cantidad =  Number(document.getElementById('Compra').value);

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

    case '0666':

            switch(true)
            {
             case cantidad >=50: 
             precioInicial = cantidad*precio;
             precioDesc = precioInicial*descuento;
             precioFinal = precioInicial - precioDesc; 
             alert(precioFinal);
             return precioFinal; 
             break;

             default:
              precioInicial = cantidad*precio;  
              precioDesc = precioInicial* 0.0;
              precioFinal = precioInicial - precioDesc; 
              alert(precioInicial);  
              return precioInicial;
            }

    break;        

    case '1939':

      switch(true)
      {
       case cantidad >= 50:
              precioInicial = cantidad*precio;
              precioDesc = precioInicial*0.05;
              precioFinal = precioInicial - precioDesc; 
              alert(precioFinal);
              return precioFinal; 
              break;

              default:
                precioInicial = cantidad*precio;  
                precioDesc = precioInicial* 0.0;
                precioFinal = precioInicial - precioDesc; 
                alert(precioInicial);  
                return precioInicial;
      }                

    default:
      precioInicial = cantidad*precio;  
      precioDesc = precioInicial* 0.0;
      precioFinal = precioInicial - precioDesc; 
      alert(precioInicial);  
      return precioInicial;
         }

  }




