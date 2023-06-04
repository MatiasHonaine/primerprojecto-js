alert("Bienvenido al censo numero 5 del partido de Lomas de Zamora, donde se va a calificar a los ciudadanos por menores o mayores");

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

alert("Gracias por participar en el censo");
