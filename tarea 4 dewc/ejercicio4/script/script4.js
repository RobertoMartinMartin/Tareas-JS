let asignatura;

class Asignatura {

    constructor(nombre, maximo) {
        this.nombre = nombre;
        this.alumnos = [];
        this.maximo = maximo;

    }

    modificarMaximo(nuevoMaximo){
        this.maximo = nuevoMaximo;
    }

    agregarAlumno(alumno){
        if (this.alumnos.length<this.maximo) {
            this.alumnos.push(alumno)
            document.getElementById("consola").innerHTML = `alumno agregado`;
        } else {
            document.getElementById("consola").innerHTML = `lista de alumnos completa`
        }
    }

    listarAlumnos(){
        document.getElementById("consola").innerHTML = `Alumnos: ${this.alumnos.join(", ")}`;
    }

    borrarAlumno(indice){
        if (indice>=0 && indice<this.alumnos.length) {
            let alumnoBorrado = this.alumnos.splice(indice,1);
            document.getElementById("consola").innerHTML = `el alumno ${alumnoBorrado} ha sido eliminado`;
        } else {
            document.getElementById("consola").innerHTML = `el alumno no existe`
        }
    }
}

let crearBtn = document.getElementById("crear")
crearBtn.addEventListener("click", function(){
    asignatura = new Asignatura(document.getElementById("nombre").value, document.getElementById("maximo").value);
    document.getElementById("tuAsignatura").innerHTML = `Tu asignatura creada es ${asignatura.nombre} y tiene un maximo de ${asignatura.maximo} alumnos`;

});

const agregarAlumnoBtn = document.getElementById("anyadir");
agregarAlumnoBtn.addEventListener("click", function() {
    if (asignatura) {
        const alumno = document.getElementById("alumno").value;
        if (alumno) {
            asignatura.agregarAlumno(alumno);

            document.getElementById("alumno").value = ""; // Limpiar el cuadro de texto de alumno
        } else {
            document.getElementById("consola").innerHTML = `Introduce un nombre de alumno.`;
        }
    } else {
        document.getElementById("consola").innerHTML = `Crea primero una asignatura.`;
    }
});

const modMaxBtn = document.getElementById("modificar");
modMaxBtn.addEventListener("click", function() {
    if (asignatura) {
        asignatura.modificarMaximo(document.getElementById("nuevoMaximo").value);
        document.getElementById("consola").innerHTML = `Maximo de alumnos actualizado`;
        document.getElementById("tuAsignatura").innerHTML = `Tu asignatura creada es ${asignatura.nombre} y tiene un maximo de ${asignatura.maximo} alumnos`;
        
    } else {
        document.getElementById("consola").innerHTML = `Crea primero una asignatura.`;
    }
});

const eliminarBtn = document.getElementById("eliminar");
eliminarBtn.addEventListener("click", function() {
    if (asignatura) {
        asignatura.borrarAlumno(document.getElementById("indice").value);
    } else {
        document.getElementById("consola").innerHTML = `Crea primero una asignatura.`;
    }
});

const listarBtn = document.getElementById("listar");
listarBtn.addEventListener("click", function() {
    if (asignatura) {
        asignatura.listarAlumnos();
    } else {
        document.getElementById("consola").innerHTML = `Crea primero una asignatura.`;
    }
});

/*const agregarAlumnoBtn = document.getElementById("anyadir");
agregarAlumnoBtn.addEventListener("click", asignatura.agregarAlumno(document.getElementById("alumno").value))

const modMaxBtn = document.getElementById("modificar");
modMaxBtn.addEventListener("click", asignatura.modificarMaximo(document.getElementById("nuevoMaximo").value)) ; 

const eliminarBtn = document.getElementById("eliminar");
eliminarBtn.addEventListener("click", asignatura.borrarAlumno(document.getElementById("indice").value));

const listarBtn =  document.getElementById("listar");
listarBtn.addEventListener("click", asignatura.listarAlumnos());*/