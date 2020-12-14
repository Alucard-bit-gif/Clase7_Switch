//Inicio

document.getElementById('resultado').style.display="none" ;

//Declarar variables

let namePlayer;
let cantidadHoras;
let valorHora;
const bonificacionesA = 20000;
const bonificacionesB = 50000;
const bonificacionesC = 100000;
const deduccionesA = 10000;
const deduccionesB = 20000;
const deduccionesC = 50000;
let precioInicial;
let resultadoFinal;

function Calcular()
{

  document.getElementById('datos').style.display="none" ;
  document.getElementById('resultado').style.display="block" ;

  //Leer variables.

  //Ingresar nombre.
  namePlayer = document.getElementById('nombre').value;

  //Ingresar cantidad horas laboradas

  cantidadHoras = document.getElementById('horas').value;

  //Ingresar valor hora.
  
  valorHora =  Number(document.getElementById('valor').value);

  

  //Invocar funcion.

  resultadoFinal = valorPago();
  
   
  //Imprimir funcion.

         
    

}

function valorPago()

{
    switch (cantidadHoras){
  
      case cantidadHoras<=48:

            switch(true)
            {  case valorHora <=5000:
               precioInicial = cantidadHoras*valorHora;
               precioFinal = (precioInicial + bonificacionesA) - deduccionesA; 
               alert(precioFinal);
               return precioFinal;

               case valorHora <=5000:
               precioInicial = cantidadHoras*valorHora;
               precioFinal = (precioInicial + bonificacionesA) - deduccionesA; 
               alert(precioFinal);
               return precioFinal;
            }
             
  
                           
  
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
  