

// Shallow copy:
// Al hacer la copia del obj1 con el ciclo for, estamos copiando propiedad por
// propiedad y eso hace que no afecte al mismo espacio de memoria, con lo cual 
// si editamos alguna propiedad del obj2, esto ya no va a afectar a obj1.

const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};

const obj2 = {}

for(prop in obj1){
    obj2[prop] = obj1[prop]; 
}
 //______________________________________//
// Esto no es igual si una de las propiedades de mi objeto en su valor tiene otro
// objeto. Ya el ciclo for va a hacer que ese subobjeto apunte a la misma referencia
// en memoria. Con lo cual cuando ediamos el valor de ese subobjeto, esto va a afectar
// al otro objeto tambien.

const obj11 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};

const obj22 = {}

for(prop in obj11){
    obj22[prop] = obj11[prop]; 
}

//__________________________________________________//

// Otro metodo estatico del prototipo Objet: assign
// Este metodo recibe dos parametros. El primero es un objeto vacio donde vamos a 
// copiar las propiedades. El segundo es el objeto que queremos copiarlas.
// Con este metodo los subobjetos tambien se ven modificados como en el caso anterior.


const obj3 = Object.assign({}, obj1)

//____________________________________________________//

// Otro metodo estatico del prototipo Object es: create
// A este metodo solo le pasamos un parametro que es el objeto que queremos copiar.
// Con este metodo podemos editar un objeto4 y eso no va a afectar al objeto1.
// escepto cuando editamos subobjetos, en este caso si afecta al otro.
// Pero viseversa, si editamos objeto1 en cualquiera de sus propiedades
// esto si va a afectar a objeto4.

const obj4 = Object.create(obj1)

//_____________________________________________________//

// Un solucion para poder editar un objeto y que esto no afecte a la copia
// ni siquiera en los subobjetos, es utilizando dos metodos estaticos del
// prototipo JSON, el JSON.Strigify y luego el JSON.parse esto genera un nuevo
// objeto que si lo editamos no afectara al primero y viseversa. Porque lo que 
// estamos haciendo, no es copiar una referencia de memoria, sino creando un
// nuevo ojeto. Esto funciona bien pero solo con propiedades que no tengan por
// valor una funcion, en este caso la funcion no se copiaria en el segundo objeto.


// Otro metodo estatico del prototipo JSON es: JSON.Strigify
// Este metodo nos permite convertir objetos en un strig

const obj5 = JSON.stringify(obj1)

//_______________________________________________________//

// Otro metodo estatico del prototipo JSON es : JSON.parse
// Este metodo hace lo contrario del anterior, convierte un string en un objeto

const obj6 = JSON.parse(obj5)

//_______________________________________________________//

// Una solucion diferencte para poder copiar bjetos con objetos dentro es usando
// recursividad. Recordemos que es:

let numero = 0;    // Este ciclo while funciona parecido a la recursividad poruqe
                //   se va a ejecutar hasta que la condicion de detencion suceda.
while(numero < 5) {
    console.log(numero);
    numero ++;
}

//Recursividad: Pero la recursividad debe ser una funcion!

function recursividad(numero){
    console.log(numero);
    if(numero < 5){
        return recursividad(numero + 1) // Aqui vemos que la recursividad consiste 
    }else{                             // en que mientras la condicion no de detencion
        return 5                       // no se cumpla el retorno de la funcion es un
    }                                  // llamado a la misma funcion.
}

// Otro ejemplo pero con un ciclo for:

const numeros = [1,2,3,4,5,6,7,8];
let numeroF = 0;

for(let index = 0 ; index < numeros.length ; index ++){
    numeroF = numeroF[index];
    console.log({index, numeroF});
}


function recursividad(numerosArray){
    if(numerosArray !== 0){
        const firstNumber = numerosArray[0]; // Aca guardamos en una nueva variable
        console.log(firstNumber);           // el primer valor de numerosArray, en la
        numerosArray.shift();             // siguiente linea lo imprimimos y luego 
        return recursividad(numerosArray) // sacamos ese valor del array origina con 
    }                                     // el metodo shift. Por ultimo en el return
}                                     // llamamos de nuevo a la funcion que iteracion 
                            // a iteracion va a ir vaciando numerosArray hasta que al 
                            // al estar vacio se va a cumplir la condicion de corte.
