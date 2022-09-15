let nombre = prompt("Ingrese nombre")
let edad = prompt("Ingrese edad")

const listanombres = []
const listaedad = []


while (nombre != "esc"){
    listanombres.push(nombre);
    listaedad.push(edad);
    nombre = prompt("Ingrese otro nombre, esc para terminar");
    if (nombre != "esc"){
        edad = prompt("Ingrese otra edad");
    }
}


alert(listanombres,listaedad)

