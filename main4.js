
// Instance Of transformando nuestras fabricas de objetos a prototipos:

function isArray(subjet) {
    return Array.isArray(subjet);
};


function requireParams(param){
    throw new Error(param + " este parametro es obligatorio");
}

function LearningPath({
    name = requireParams("name"),
    courses = [],
}){

    this.name = name;
    this.courses = courses;
    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };
    // const public = {
    //     get name(){ 
    //         return private["_name"];
    //        },
    //     set name(newName){
    //         if(newName.length != 0){
    //             private["_name"] = newName;
    //         }else{
    //             console.warn("Tu nombre debe tener al menos un caracter")
    //         }
    //        },

    //     get courses(){ 
    //         return private["_courses"];
    //        },
    // };
    // return public
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
    if(isArray(learningPaths)){
        this.learningPaths = [];
        for(let learningPathIndex in learningPaths){
        if(learningPaths[learningPathIndex] instanceof LearningPath){
           this.learningPaths.push(learningPaths[learningPathIndex]);
            }
        }
    }

    

//   const private = { 
//     "_name": name, 
//     "_learningPaths": learningPaths,  
// };             
//   const public = { 
//     age: age,
//         email: email,
//         approvedCourses: approvedCourses,
//         socialMedia: {
//             twitwer: twitwer,
//             instagram: instagram,
//             faceboock: faceboock,
//         }, // Getters y Setters:
       
//         get name(){ 
//              return private["_name"];
//              },
//         set name(newName){
//             if(newName.length != 0){
//                 private["_name"] = newName;
//              }else{
//             console.warn("Tu nombre debe tener al menos un caracter")
//             }
//         },
      
//         get learningPaths(){ 
//             return private["_learningPaths"];
//            },
//         set learningPaths(newLearningPaths){
//             if(!newLearningPaths.name){
//                 console.warn("Tu learningPath, no tiene la propiedad nombre");
//                 return
//             }else if(!newLearningPaths.courses){
//                 console.warn("Tu learningPath, no tiene courses");
//                 return
//             }else if(!isArray(newLearningPaths.courses)){
//                 console.warn("Tu learningPath, no es una lista de courses");
//                 return
//             }else{
//                 private["_learningPaths"].push(newLearningPaths);
//             }
//            }, 
//   }; 
//     return public
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