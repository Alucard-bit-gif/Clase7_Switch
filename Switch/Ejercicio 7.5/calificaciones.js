alert('verificacion');

//Inicio

document.getElementById('resultado').style.display="none" ;

//Declarar variables

let nameStudent;
let notaTecnica;
let notaVelocidad;
let notaAtaque;
let notaDefensa;
let resultadoFinal;

function Calcular()
{

  document.getElementById('datos').style.display="none" ;
  document.getElementById('resultado').style.display="block" ;

  //Leer variables.

  //Ingresar nombre.
  nameStudent = document.getElementById('nombre').value;

  //Ingresar nota 1

  notaTecnica = Number(document.getElementById('codigo').value);

  //Ingresar nota 2.
  
  notaVelocidad =  Number(document.getElementById('edad').value);

  //Ingresar nota3.

  notaAtaque = Number(document.getElementById('edad').value);

  //Ingresar nota4.

  notaDefensa =   Number(document.getElementById('peso').value);

  //Invocar funcion.

  resultadoFinal = valorFinal();
  
   
  //Imprimir funcion.

         
  document.getElementById('mutante').value=nameStudent;
  document.getElementById('nota').value = resultadoFinal;

}

function valorFinal()
{
            switch(true)
            {
             case notaTecnica<=notaVelocidad: 
             document.querySelector('#poderes').innerHTML = notaVelocidad;
             document.querySelector('#veloz').innerHTML = notaVelocidad;
             document.querySelector('#golpe').innerHTML = notaAtaque;
             document.querySelector('#escudo').innerHTML = notaDefensa;
             resultadoFinal = ((notaVelocidad * 2) + (notaAtaque + notaDefensa)/4);
             break;
            
             default:
             document.querySelector('#Inicial').innerHTML = notaTecnica;
             document.querySelector('#Inicial').innerHTML = notaVelocidad;
             document.querySelector('#Inicial').innerHTML = notaAtaque;
             document.querySelector('#Inicial').innerHTML = notaDefensa;
             resultadoFinal = (notaTecnica + notaVelocidad + notaAtaque + notaDefensa)/4;
              
            }

        }