//Inicio

document.getElementById('resultado').style.display="none" ;

//Declarar variables

let namePlayer;
let generoPlayer;
let oldPlayer;
let estaturaPlayer;
let heavyPlayer;
let resultadoFinal;

function Calcular()
{

  document.getElementById('datos').style.display="none" ;
  document.getElementById('resultado').style.display="block" ;

  //Leer variables.

  //Ingresar codigo.
  namePlayer = document.getElementById('nombre').value;

  //Ingresar cantidad de articulos a comprar

  generoPlayer = document.getElementById('codigo').value;

  //Ingresar edad.
  
  oldPlayer =  Number(document.getElementById('edad').value);

  //Ingresar estatura.

  estaturaPlayer = Number(document.getElementById('edad').value);

  //Ingresar peso.

  heavyPlayer =   Number(document.getElementById('peso').value);

  //Invocar funcion.

  resultadoFinal = valorApto();
  
   
  //Imprimir funcion.

         
    

}

function valorApto()
{
  switch (generoPlayer){

    case 'F':

            switch(true)
            {
             case oldPlayer>16: 
                
             break;
            }
            switch(true){
             case estaturaPlayer>=1.70:
                
             break;
            }    
            switch(true){   
             case heavyPlayer<=60:  
              
             document.querySelector('#Inicial').innerHTML= namePlayer + " eres apto(a) para ingresar a los Wolves ";    
             break;
            
            
             default:
                document.querySelector('#Inicial').innerHTML= " Lo sentimos no eres apto(a) para ingresar a los Wolves ";    
              
            }

    break; 
              

    case 'M':

        switch(true)
        {
         case oldPlayer>=18: 
            
         break;
        }
        switch(true){
         case estaturaPlayer>1.70:
            
         break;
        }    
        switch(true){   
         case heavyPlayer<=75:  
          
         document.querySelector('#Inicial').innerHTML= namePlayer + " eres apto(a) para ingresar a los Wolves ";    
         break;
        
        
         default:
            document.querySelector('#Inicial').innerHTML= " Lo sentimos no eres apto(a) para ingresar a los Wolves ";    
          
        }
    }

}

