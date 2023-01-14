


function isObjet(subjet) {
    return typeof subjet == "object";
};

function isArray(subjet) {
    return Array.isArray(subjet);
};

function deepCopy(subjet){
    let copySubjet;

    const subjetIsObject = isObjet(subjet);
    const subjetIsArray = isArray(subjet);

    if(subjetIsArray){
        copySubjet = [];
    }else if(subjetIsObject){
        copySubjet = {};
    }else{
        return subjet
    }

    for(key in subjet){
        const keyIsObjet = isObjet(subjet[key]);
        if(keyIsObjet){
            copySubjet[key] = deepCopy(subjet[key]);
        }else{
            if(subjetIsArray){
                copySubjet.push(subjet[key]);
            }else{
                copySubjet[key] = subjet[key];
            }
        }
    }

    return copySubjet;
};

// Abstraccion y encapsulamiento sin prototipos:

// Abstraccion: vamos a crear la clase estudiante:
// (Esta ves sin los prototipos)

const studenBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitwer: undefined,
        instagram: undefined,
        faceboock: undefined,
    }
};

const juan = deepCopy(studenBase);
Object.defineProperty(juan, "name",{ // con este metodo, editamos la propiedad name,
    value: "Juanito",               // que heredamos del objeto studentBase gracias
    configurable: false,            // al metodo deepCopy. Y al setearle la propiedad
})                         // configurable el false, le indicamos que esta propiedad
                            // no puede ser eliminada.

Object.seal(juan); // Si pasamos al objeto juan por el metodo estatico de Objet
                    // seal, aqui protejemos a todas sus propiedades. Ya no se puede 
                    // borrar ninguna.
juan.name = "Juance"; // Y aqui editamos la propiedad sin problema.

Object.isSealed(juan);// Este metodo estatico del prototipo object te devuelve true
                    // o false y verifica si todas las propiedades del objeto que le 
                    // pasemos por parametro estan protejidas de no poder eliminarlas.

Object.isFrozen(juan);// Este otro metodo devuelve un booleano verificando si la 
                    // propiedad writable esta en true, osea si se pueden editar o
                    // no las propiedades del objeto que le pasemos por parametro.   
                    
                    
//_________________________________________________//

// Factory pattern y RORO
// RORO: recibo un objeto y retorno un objeto.

function requireParams(param){
    throw new Error(param + " este parametro es obligatorio");
}

function createStudent({
    name = requireParams("name"), // Aquí, si le asignamo como valor por defecto la
    email = requireParams("email"),//, funcion requireParams, hacemos que ese  
    age,                 // parametro  sea obligatorio.
    twitwer,
    instagram,
    faceboock,
    approvedCourses = [],
    learningPaths = [],
} = {}) { // Aqui le decimos que el objeto que viene por parametro por defecto es un
         // objeto vacío.
  const private = { // encapsulamiento: Esto no se va a poder editar. Para lograr 
    "_name": name, // esto estamos utilizando los scopes, osea esta variable al
  };             // sacarla des scope la convertimos en inaccesible. 
  const public = { // A partir de acá si podemo editar.
    age: age,
        email: email,
        approvedCourses: approvedCourses,
        learningPaths: learningPaths,
        socialMedia: {
            twitwer: twitwer,
            instagram: instagram,
            faceboock: faceboock,
        },
        readName(){
            return private["_name"];
        },
        changeName(newName){
            private["_name"] = newName;
        },
  }; 
  
  Object.defineProperty(public, "readName", { // Acá protejemos a la funcion readName
    writable: false,                         // de que no sea ni eliminada ni editada
    configurable: false,
  })

  Object.defineProperty(public, "changeName", { // Acá protejemos a la funcion changeName
    writable: false,                         // de que no sea ni eliminada ni editada
    configurable: false,
  })
    
    return public
}

const pedro = createStudent({
     name: "Pedro",
     age: 18,
     email: "Pedro@pedro.com",
     twitwer: "pedro123",
});