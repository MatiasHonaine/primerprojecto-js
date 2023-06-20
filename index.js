/*alert("Bienvenido al censo numero 5 del partido de Lomas de Zamora, donde se va a calificar a los ciudadanos por menores o mayores");

function solicitarNombre () {
    const nombre = prompt("ingrese su nombre y apellido: .TOCAR SALIR PARA FINALIZAR ");
    return nombre;
}

let iniciar = prompt("¿desea relizarlo? SI para iniciar o SALIR para irse")

while (iniciar == "SI" || iniciar != "SALIR") {

    nombrePersona = solicitarNombre()
    while (nombrePersona != "SALIR") {

        console.log("Bienvenido/a " + " " + nombrePersona + " ")
        nombrePersona = solicitarNombre()


        let edadPersona = parseInt(prompt("Ingrese su numero de edad : .TOCAR SALIR PARA FINALIZAR"));
        if (edadPersona >= 50 && edadPersona <= 100) {
            alert("usted entra en el grupo de personas Mayores")
        } else if (edadPersona < 50 && edadPersona >= 18) {
            alert("usted entra en el grupo de personas jovenes")
        } else {
            alert("porfavor ingrese una edad correcta")
        }

        console.log("edad: " + " " + edadPersona + " " + "años")

        nombrePersona = solicitarNombre()

        iniciar = prompt("¿desea relizarlo? SI para iniciar o SALIR para irse")
    }
}

alert("Gracias por participar en el censo");*/



alert("Bienvenido a CoderHouse, aquí encontrará los alumnos de la cursada y sus notas finales. Ingrese su nombre, apellido, nota de la última evaluación y curso");

class Alumno {
    constructor(nombre, apellido, nota, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
        this.curso = curso;
    }
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getNota() {
        return this.nota;
    }
    getCurso() {
        return this.curso;
    }
}

function solicitarNombre() {
    const nombre = prompt("Ingrese su nombre y apellido: ");
    return nombre;
}

function solicitarNota() {
    const nota = prompt("Ingrese su nota: ");
    return nota;
}

function solicitarCurso() {
    const curso = prompt("Ingrese su curso: ");
    return curso;
}

const alumnos = [];
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...notas) + " Para promocionar debes sacar una nota mayor a 7");

const cursos = [
    { nombre: 'JS' },
    { nombre: 'DW' },
    { nombre: 'Marketing' }
];

const resultado = cursos.find((el) => el.nombre === 'JS');
const resultado1 = cursos.find((el) => el.nombre === 'DW');
const resultado2 = cursos.find((el) => el.nombre === 'Marketing');


alumnos.forEach((alumno) => {
    console.log(alumno.getNombre(), alumno.getApellido(), alumno.getNota(), alumno.getCurso());
});

const nombre = solicitarNombre();
const nota = solicitarNota();
const curso = solicitarCurso();

const nuevoAlumno = new Alumno(nombre, apellido, nota, curso);
alumnos.push(nuevoAlumno);

if (nota >= 7) {
    alert("Usted está aprobado, felicitaciones " + nombre + " " + apellido);
} else if (nota <= 6 && nota >= 4) {
    alert("Usted reprobó pero puede volver a entregar " + nombre + " " + curso);
} else {
    alert("Usted sacó una calificación menor a 4. Debe volver a realizar el curso " + nombre + " " + curso);
}

const generarPromedio = () => {
    console.log(Math.ceil(notas));
};

