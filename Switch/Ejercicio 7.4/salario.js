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

  cantidadHoras = Number(document.getElementById('horas').value);

  //Ingresar valor hora.
  
  valorHora =  Number(document.getElementById('valor').value);

  

  //Invocar funcion.

  resultadoFinal = valorPago();
  
   
  //Imprimir funcion.

  document.querySelector('#name').innerHTML= `${namePlayer}`;    
  document.querySelector('#salario').innerHTML= " $ " + `${precioInicial}` + " COP ";         
  document.querySelector('#neto').innerHTML =  " $ " + resultadoFinal + " COP ";     
    

}

function valorPago()

{
    switch (true)
    
    {
  
      case cantidadHoras<=48:

            switch(true)
            {  case valorHora <5000: 
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesA) - deduccionesA; 
               alert(resultadoFinal);
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesA + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesA + " COP ";
               return resultadoFinal;
              
              case valorHora>5000 && valorHora<8000: 
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesA) - deduccionesB; 
               alert(resultadoFinal);
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesA + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesB + " COP ";
               return resultadoFinal;
             
               case valorHora>=8000:
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesA) - deduccionesC; 
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesA + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesC + " COP ";
               alert(resultadoFinal);
               return resultadoFinal;
               
               break;

               default:
        
                      alert('ingresa codigo');  
                
              }
 
              break;
             

      case cantidadHoras>=49 && cantidadHoras<=58:

            switch(true)
            {  case valorHora <5000: 
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesB) - deduccionesA; 
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesB + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesA + " COP ";
               alert(resultadoFinal);
               return resultadoFinal;

               case valorHora>5000 && valorHora<8000:
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesB) - deduccionesB;
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesB + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesB + " COP "; 
               alert(resultadoFinal);
               return resultadoFinal;

               case valorHora>=8000:
               precioInicial = cantidadHoras*valorHora;
               resultadoFinal = (precioInicial + bonificacionesB) - deduccionesC; 
               document.querySelector('#bonos').innerHTML= " $ " + bonificacionesB + " COP ";    
               document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesC + " COP ";
               alert(resultadoFinal);
               return resultadoFinal;

               
               break;
               
               default:
        
                alert('ingresa codigo');  
                
                   
              }

              break;

              case cantidadHoras>58:

                switch(true)
                {  case valorHora <5000: 
                   precioInicial = cantidadHoras*valorHora;
                   resultadoFinal = (precioInicial + bonificacionesC) - deduccionesA;
                   document.querySelector('#bonos').innerHTML= " $ " + bonificacionesC + " COP ";    
                   document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesA + " COP "; 
                   alert(resultadoFinal);
                   return resultadoFinal;
    
                   case valorHora>5000 && valorHora<8000:
                   precioInicial = cantidadHoras*valorHora;
                   resultadoFinal = (precioInicial + bonificacionesC) - deduccionesB; 
                   document.querySelector('#bonos').innerHTML= " $ " + bonificacionesC + " COP ";    
                   document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesB + " COP ";
                   alert(resultadoFinal);
                   return resultadoFinal;
    
                   case valorHora>=8000:
                   precioInicial = cantidadHoras*valorHora;
                   resultadoFinal = (precioInicial + bonificacionesC) - deduccionesC;
                   document.querySelector('#bonos').innerHTML= " $ " + bonificacionesC + " COP ";    
                   document.querySelector('#deducciones').innerHTML =  " $ " + deduccionesC + " COP "; 
                   alert(resultadoFinal);
                   return resultadoFinal;

                   break;
    
                   default:
            
                    alert('ingresa codigo');  
                    
                       
                  }
              
  
    }
}