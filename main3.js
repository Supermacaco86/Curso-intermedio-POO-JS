
// Getters y Setters:


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
  }; 
    return public
}

const pedro = createStudent({
     name: "Pedro",
     age: 18,
     email: "Pedro@pedro.com",
     twitwer: "pedro123",
});