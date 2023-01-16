
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