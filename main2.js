


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