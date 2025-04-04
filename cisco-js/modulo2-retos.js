//Challenge #1
function enviarEmail(de, para, mensaje){};
class Usuario {
    constructor({nombre, apellido, email, rol}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.rol = rol;
        this.cursos = [];
        this.mensaje = [];
    };

    agregarCurso(curso, nivel){
        for(let i = 0; i < this.cursos.length; i++){
            if(this.cursos[i].curso === curso){
                console.log(`El ${curso} ya esta registrado!`);
                return;
            }
        }
        this.cursos.push({curso, nivel});
    };

    removerCurso(curso){
        for(let i = 0; i < this.cursos.length; i++){
            if(this.cursos[i].curso === curso){
                this.cursos.splice(i,1);
                break;
            }
        }
    };
    
    editarCurso(curso, nivel){
        for(let i = 0; i < this.cursos.length;i++){
            if(this.cursos[i].curso === curso){
                this.cursos[i].nivel = nivel;
                break;
            }
        }
    };

    enviarMensaje(para, mensaje){
        this.mensaje.push({para: para.email, de: this.email, contenido: mensaje});
        enviarEmail(this.email, para.email, mensaje);
    };

    mostrarHistorialMensaje(){
        for(let sms of this.mensaje){
            console.log(`Desde: ${sms.de} -> Para: ${sms.para} | Contenido: ${sms.contenido}`);
        }
    };
};


let estudiante1 = new Usuario({nombre: 'Yerri', apellido: 'Chilcon', email: 'Yerri.cr@gmail.com', rol: 'estudiante'});
let estudiante2 = new Usuario({nombre: 'Anghy', apellido: 'Ramirez', email: 'Anghy.cr@gmail.com', rol: 'estudiante'});
let profesor1 = new Usuario({nombre: 'Elsa', apellido: 'Lozada', email: 'angyeri@gmail.com', rol: 'profesor'});

estudiante1.agregarCurso('mate', 2);
estudiante1.agregarCurso('física', 1);
estudiante1.removerCurso('física');
profesor1.agregarCurso('biologia', 3);
profesor1.editarCurso('biologia', 4);
console.log(`${estudiante1.nombre}: ${estudiante1.cursos.length} cursos.`);
console.log(`${profesor1.nombre}: ${profesor1.cursos.length} cursos`);
profesor1.enviarMensaje(estudiante1, 'Prueba de mensaje');
profesor1.enviarMensaje(estudiante1, 'Otro mensaje');
profesor1.mostrarHistorialMensaje();

//Clallenge #2
class ExtendedUsuario extends Usuario {    
    constructor({nombre, apellido, email, rol}){
        super({nombre, apellido, email, rol});
    };

    get nombreCompleto(){
        return  `${this.nombre} ${this.apellido}`;
    };

    set nombreCompleto(nombreCompleto){
        let [nombre, apellido] = nombreCompleto.split(' ');
        if(nombre && apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
    };

    static match(profesor, alumno, curso){
        let encuentros = [];
        for (let cursoA of alumno.cursos){
            for (let cursoP of profesor.cursos){
                if(cursoA.curso === cursoP.curso && cursoA.nivel === cursoP.nivel){
                    encuentros.push(cursoA);
                };
            };
        };
        if(curso){
            for(let cursoE of encuentros){
                if (cursoE.curso === curso){
                    return cursoE;
                }
            }
            return null;
        } else 
            return encuentros;
    };
};



class Profesor extends ExtendedUsuario {
    constructor({nombre, apellido, email}){
        super({nombre, apellido, email, rol: 'Profesor'});
    };
}

class Estudiante extends ExtendedUsuario {
    constructor({nombre, apellido, email}){
        super({nombre, apellido, email, rol: 'Estudiante'});
    };
};

let student1 = new Estudiante({nombre: 'Juan', apellido: 'Campos', email: 'jcampos@gmail.com'});
let student2 = new Estudiante({nombre: 'Yaco', apellido: 'Ramirez', email: 'yra@gmail.com'});
let teacher1 = new Profesor({nombre: 'Pedro', apellido: 'Cruz', email: 'pCruz@gmai.com'});

student1.agregarCurso('Comu', 2);
student1.agregarCurso('RazV', 1); 
teacher1.agregarCurso('Biolo', 4);
teacher1.editarCurso('Logi', 2);
student1.agregarCurso('Biolo', 4);
teacher1.agregarCurso('RazV', 1);
console.log(`${student1.nombreCompleto}: ${student1.cursos.length} cursos`);
console.log(`${teacher1.nombreCompleto}: ${teacher1.cursos.length} cursos`);

console.log(`${student2.nombreCompleto}: ${student2.cursos.length} cursos`);

student1.nombreCompleto = "Abondanyerri Chilcon";
console.log(`${student1.nombreCompleto}: ${student1.cursos.length} cursos`);

// Challenge #3
//Crea un método estático en la case extendedUsuario
let match = ExtendedUsuario.match(teacher1, student1);
console.log(match);
match = ExtendedUsuario.match(teacher1, student2);
console.log(match);
match = ExtendedUsuario.match(teacher1, student1, 'RazV');
console.log(match);


// Challenge #4
class Tutoria {
    constructor(){
        this.alumnos = [];
        this.profesores = [];
    };

    addStudent(nombre, apellido, email){
        this.alumnos.push( new Estudiante({nombre, apellido, email}));
    };

    addTeacher(nombre, apellido, email){
        this.profesores.push( new Profesor({nombre, apellido, email}));
    };

    getStudentByName(nombre, apellido){
        let aux;
        for(let student of this.alumnos){
            if(student.nombre === nombre && student.apellido === apellido){
                aux = student;
            };
        };
        return aux;
    };

    getTeacherByName(nombre, apellido){
        let aux;
        for (let teacher of this.profesores){
            if(teacher.nombre === nombre && teacher.apellido === apellido){
                aux = teacher;
            };
        };
        return aux;
    };

    getStudentForTeacher(profesor){
        let aula = [];
        for (let student of this.alumnos){
            if(ExtendedUsuario.match(profesor, student).length){
                aula.push(student);
            };
        }
        return aula;
    };

    getTeacherForStudent(estudiante){
        let profsDisponibles = [];
        for (let prof of this.profesores){
            if(ExtendedUsuario.match(prof, estudiante).length){
                profsDisponibles.push(prof);
            };
        }
        return profsDisponibles;
    };
};

let tuto = new Tutoria();
tuto.addStudent('Yalixa', 'Chilcon', 'Yalic@gmail.com');
tuto.addStudent('Leones', 'Messi', 'messi@gmai.com');
tuto.addTeacher('Tom', 'Lee', 'toom@gmail.com');
let estudiante = tuto.getStudentByName('Yalixa', 'Chilcon')
estudiante.agregarCurso('Mate', 2);
estudiante.agregarCurso('Fisica', 4);
console.log(estudiante);
let profesor = tuto.getTeacherByName('Tom', 'Lee');
profesor.agregarCurso('Fisica', 4);
console.log(profesor);

console.log("Disponibilidad");
let estudiantes = tuto.getTeacherForStudent(estudiante);
console.log(estudiantes[0]);
let profesores = tuto.getStudentForTeacher(profesor);
console.log(profesores[0]);


//Challenge #5
class ExtendedTutor extends Tutoria {
    constructor(){
        super();
    };

    sendMenssages(from, to = [], message){
        if(from && to.length){
            for(let sms of to){
                sms.enviarMensaje(from, message);
            };
        };
    };
};

let tutoria = new ExtendedTutor();
tutoria.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoria.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoria.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoria.getStudentByName('Rafael', 'Fife'));
to.push(tutoria.getStudentByName('Kelly', 'Estes'));
tutoria.sendMenssages(tutoria.getTeacherByName('Paula', 'Thompkins'), to, 'Test message');
for(let user of to){
    user.mostrarHistorialMensaje();
};
