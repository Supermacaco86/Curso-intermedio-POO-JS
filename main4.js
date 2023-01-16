
// Instance Of transformando nuestras fabricas de objetos a prototipos:

// function isArray(subjet) {
//     return Array.isArray(subjet);
// };

// function isObjet(subjet) {
//     return typeof subjet == "object";
// };

// function deepCopy(subjet){
//     let copySubjet;

//     const subjetIsObject = isObjet(subjet);
//     const subjetIsArray = isArray(subjet);

//     if(subjetIsArray){
//         copySubjet = [];
//     }else if(subjetIsObject){
//         copySubjet = {};
//     }else{
//         return subjet
//     }

//     for(key in subjet){
//         const keyIsObjet = isObjet(subjet[key]);
//         if(keyIsObjet){
//             copySubjet[key] = deepCopy(subjet[key]);
//         }else{
//             if(subjetIsArray){
//                 copySubjet.push(subjet[key]);
//             }else{
//                 copySubjet[key] = subjet[key];
//             }
//         }
//     }

//     return copySubjet;
// };

// function requireParams(param){
//     throw new Error(param + " este parametro es obligatorio");
// }

// Acá creamos nuestras funciones helpers como funciones estaticas de la clase
// SuperObject, entonces para usar estas funciones debemos llamarlas asi:
// SuperObject.requireParams()
// SpuerObject.isObjet()
// SpuerObject.isArray()
// SpuerObject.deepCopy()
class SuperObjectClase {
    static requireParams(param){
        throw new Error(param + " este parametro es obligatorio");
    };
    static isObjet(subjet) {
        return typeof subjet == "object";
    };
    static isArray(subjet) {
        return Array.isArray(subjet);
    };
    static deepCopy(subjet){
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
}

// Acá creamos metodos estaticos pero desde un prototipo:

function SuperObjectProto(){};
SuperObject.deepCopy = function(subjet){
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

SuperObject.isArray = function (subjet) {
        return Array.isArray(subjet);
    };

SuperObject.isObjet = function (subjet) {
        return typeof subjet == "object";
    };

SuperObject.requireParams = function (param){
        throw new Error(param + " este parametro es obligatorio");
    }



function LearningPath({
    name = requireParams("name"),
    courses = [],
}){

    this.name = name;
    this.courses = courses;
}

function Student({
    name = requireParams("name"), 
    email = requireParams("email"),  
    age,                 
    twitwer,
    instagram,
    faceboock,
    approvedCourses = [],
    learningPaths = [],
} = {}) { 
    this.name = name;
    this.email = email;
    this.age = age; 
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitwer,
        instagram,
        faceboock
    } 
    
    const private = {
        "_learningPaths": [],
    };
    
    Object.defineProperty(this, "learningPaths", {
        get(){
            return private["_learningPaths"];
        },
        set(newLp){
            if(newLp instanceof LearningPath){
                private["_learningPaths"].push(newLp);
            }else{
                console.warn("No puedes agragar learningPaths que no sean instancias del prototipo.")
            }
        },
    })

    for(let learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex];
    }
}


const escuelaWeb = new LearningPath({
    name: "Escuela de WebDev",
});

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
});

const pedro = new Student({
     name: "Pedro",
     email: "Pedro@pedro.com",
     learningPaths: [
        escuelaWeb,
        escuelaData,
        {
            name: "Escuela impostora",
            courses: [],
        }
     ]
});

// pedro instanceof Student
// Esta instruccion nos arroja un booleano que verifica si pedro es una instancia
// del portotipo Student