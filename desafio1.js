// CREAMOS LAS FUNCIONES
function promedio( suma, cont) {
    prome = suma / cont
    return alert(`el promedio es ${prome}`)
}
// DECLARAMOS VARIABLES
let edad = Number(prompt("Ingrese una edad"))
let cont = 0
let suma = 0
// EJECUTAMOS EL PROGRAMA
while (edad >= 1) {
    cont++
    suma = edad + suma
    edad = Number(prompt("ingrese otra edad o 0 para terminar"))
}

promedio(suma,cont)



