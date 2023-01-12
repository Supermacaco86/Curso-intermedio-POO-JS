

// Metodos estaticos del prototipo Objet:
// keys, getOwnPropertyNames, entries, getOwnPropertyDescriptors y defineProperties.

const juan = {
    name: "Juan",
    age: 18,
    approvedCourses: ["Curso1"],
    addCourses(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

// El metodo estatico keys, lista las keys del objeto que le pasemos por parametro:
// Nos muestra todas las propiedades sea metodos o no, dentro de un array. 

Object.keys(juan)
// console.log(Object.keys(juan))

// El metodo getOwnPropertyNames, tambien nos muestra todas las propiedades del objeto
// que le pasemos por parametro, dentro de un array.

Object.getOwnPropertyNames(juan)
// console.log(Object.getOwnPropertyNames(juan))

// El metodo entries, nos devuelve un array con arrays dentro donde cada array tiene
// en la primera posicion las keys y en la segunda posicion los valeus.

Object.entries(juan);
// console.log(Object.entries(juan));

// Esto nos muestra la  key de la funcion addCouses:
Object.entries(juan)[3];

// Esto nos muestra la funcion:

Object.entries(juan)[3][1];

// Esto no nos devuelve un array sino un objeto que tiene por dentro cada una de las
// las propiedades del objeto que le pasamos por parametro. Y cada una de estas
// propiedades tiene como valor un objeto con cuatro propiedades. La propiedad
// value, nos muestra es valor que esa propiedad tenia pero ademas van a estar estas
// tres propiedades mas: configurable, enumerable y writable todas con valor true.

Object.getOwnPropertyDescriptors(juan);


// defineProperties Metodo estatico del prototipo Objet para crear nuevas propiedades 
// en nuestros objetos. Este metodo recive tres argumentos en los parametro. El primero
// es el nombre del onjeto en el que vamos a trabajar, el segundo va a ser el nombre
// del nuevo atributo a crear y el tercero es un objeto con la lista de atributos.

Object.defineProperty(juan, "pruebaNasa",{
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
} )

// Atributo enumerable: false:

Object.defineProperty(juan, "navigator",{
    value: "Chrome",
    writable: true,
    enumerable: false,// Esta propiedad en false hace que si tratamos de listar el 
    configurable: true, // objeto juan con el metodo keys, no aparece. En cambio
} )                //  si listamos con getOwnPropertyNames si aparece. 
// Si intentamos cambiar el valor de esta propiedad haciendo:
//  juan.navigator = "Firefox" esto si va a funcionar correctamente.
// incluso podemos eliminarla de la siguente manera:
// delete juan.navigator esto funcionara correctamente.
//__________________________________________//

// Atributo writable: false:

Object.defineProperty(juan, "editor",{
    value: "VScode",
    writable: false, // Con esta propiedad en false si utilizamos el metodo keys 
    enumerable: true, // para listar, este atributo va a aparecer sin problemas.
    configurable: true, // Lo mismo sucede si utilizamos getOwnPropertyNames.
} ) // Si intentamos cambiar el valor de esta propiedad haciendo:
// jaun.editor = "Atom" esto no va a funcionar.
// Pero si intentamos eliminar esta propidad de esta manera:
// delete juan.editor esto si va a funcionar.
//___________________________________________//

// Atributo configurable: false:

Object.defineProperty(juan, "terminal",{
    value: "Bash",
    writable: true, // Con esta propiedad en false si utilizamos el metodo keys,
    enumerable: true, // va a poder ser listada correctamente. Lo mismo sucede
    configurable: false, // si ejecutamos getOwnPropertyNames.
} ) // Y si tratamos de editar el valor de la propiedad de la siguiente manera:
// juan.terminal = "cmder" esto va a funcionar correctamente. Pero si tratamos de 
// borrarla: delete juan.terminal esto no va a funcionar. 

console.log(Object.getOwnPropertyDescriptors(juan));

//______________________________________________________//

// Otros metodos estaticos: seal y freeze

Object.seal(juan); // este metodo evita que las propiedades se puedan borrar
// porte automaticamente te setea configurable en false. Estas propiedades van a
// estar presentes siempre.


Object.freeze(juan); // en este caso todas las propiedades pasan a tener configurable
// en false pero ademas writable tambien se va a setear en false. Esto indica que
// esdtas propiedades no se van a poder ni borrar ni editar. 
