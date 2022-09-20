let nombre = prompt("Ingrese nombre")
let edad = prompt("Ingrese edad")

const listaalumno = []

function alumno(nombre, edad) {
    let alumno = {
        nombre,
        edad
    }
    return alumno
}
function impresion(array) {
    for (let i = 0; i < alumno.length; i++) {
        alert(array[i])
    }
}

while (nombre != "esc"){

    listaalumno.push(alumno(nombre,edad));
    nombre = prompt("Ingrese otro nombre, esc para terminar");
    if (nombre != "esc"){
        edad = prompt("Ingrese otra edad");
    }
}

impresion(`${listaalumno}`)


