
// CALCULADORA DE PRESTAMOS - PAGOS EN CUOTAS (hasta 10 cuotas)

// el interes mensual de este prestamo es 15%
// El prestamo puede repagarse hasta en 10 cuotas

// funcion que calcula el interes de cada cuota
function interes (monto_solicitado, cantidad_cuotas){
    
    if (cantidad_cuotas <= 10 && cantidad_cuotas >= 1 && monto_solicitado > 0 ) {
        
       let intereses = (monto_solicitado * 0.15); 
       return intereses;

    }

    else {
        console.log("error en algun valor ingresado");

    }

}


//ingreso de datos para los calculos
let monto_solicitado = prompt("ingrese el monto total solicitado");
let cantidad_cuotas = prompt("ingrese la cantidad de cuotas en que desea repagar el prestamo (maximo 10)");


monto_solicitado = parseInt(monto_solicitado);
cantidad_cuotas = parseInt(cantidad_cuotas);


//defino variable total_prestamo para agrupar los calculos y mostrar al usuario el primer output
let total_prestamo = monto_solicitado + interes (monto_solicitado, cantidad_cuotas) * cantidad_cuotas;

console.log("el monto a pagar total es: ", total_prestamo );





// ciclo: para listar la cantidad de cuotas y el precio pagado por cuota con interes

for (let i = 0; i < cantidad_cuotas; i = i + 1 ){
    
    let valor_cuota = monto_solicitado / cantidad_cuotas + interes(monto_solicitado, cantidad_cuotas) ;
    
    if(cantidad_cuotas <= 10 && cantidad_cuotas >= 1 && monto_solicitado > 0 ){
        console.log("el monto de la cuota ", i + 1, "es: ", valor_cuota);
    }
    
    else{
        console.log("");
    }
    

}

