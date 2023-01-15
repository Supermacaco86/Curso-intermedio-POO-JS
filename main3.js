



function isArray(subjet) {
    return Array.isArray(subjet);
};


function requireParams(param){
    throw new Error(param + " este parametro es obligatorio");
}

function createLearningPath({
    name = requireParams("name"),
    courses = [],
}){
    const private = {
        "_name": name,
        "_courses": courses,
    };
    const public = {
        get name(){ 
            return private["_name"];
           },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
            }else{
                console.warn("Tu nombre debe tener al menos un caracter")
            }
           },

        get courses(){ 
            return private["_courses"];
           },
    };
    return public
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
    "_learningPaths": learningPaths,  // sacarla des scope la convertimos en inaccesible.
};             
  const public = { // A partir de acá si podemo editar.
    age: age,
        email: email,
        approvedCourses: approvedCourses,
        socialMedia: {
            twitwer: twitwer,
            instagram: instagram,
            faceboock: faceboock,
        }, // Getters y Setters:
       
        get name(){ 
             return private["_name"];
             },
        set name(newName){
            if(newName.length != 0){
                private["_name"] = newName;
             }else{
            console.warn("Tu nombre debe tener al menos un caracter")
            }
        },
      
        get learningPaths(){ 
            return private["_learningPaths"];
           },
        set learningPaths(newLearningPaths){
            if(!newLearningPaths.name){
                console.warn("Tu learningPath, no tiene la propiedad nombre");
                return
            }else if(!newLearningPaths.courses){
                console.warn("Tu learningPath, no tiene courses");
                return
            }else if(!isArray(newLearningPaths.courses)){
                console.warn("Tu learningPath, no es una lista de courses");
                return
            }else{
                private["_learningPaths"].push(newLearningPaths);
            }
           }, 
  }; 
    return public
}

const pedro = createStudent({
     name: "Pedro",
     age: 18,
     email: "Pedro@pedro.com",
     twitwer: "pedro123",
});

pedro.learningPaths = "Nueva ruta de aprendizajes";