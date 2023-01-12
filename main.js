

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
console.log(Object.keys(juan))

// El metodo getOwnPropertyNames, tambien nos muestra todas las propiedades del objeto
// que le pasemos por parametro, dentro de un array.

Object.getOwnPropertyNames(juan)
console.log(Object.getOwnPropertyNames(juan))

// El metodo entries, nos devuelve un array con arrays dentro donde cada array tiene
// en la primera posicion las keys y en la segunda posicion los valeus.

Object.entries(juan);
console.log(Object.entries(juan));

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
console.log(Object.getOwnPropertyDescriptors(juan));

// defineProperties Metodo estatico del prototipo Objet para crear nuevas propiedades 
// en nuestros objetos. Este metodo recive tres argumentos en los parametro. El primero
// es el nombre del onjeto en el que vamos a trabajar, el segundo va a ser el nombre
// del nuevo atributo a crear y el tercero es un objeto con la lista de atributos.

Object.defineProperties(juan, "pruevaNASA",{
    value: "extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true,
} )

