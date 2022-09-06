let edad = Number(prompt("Ingrese una edad"))
let cont = 1
let prome = 0
let resul = 0

for (i = 0; i = 1 ; cont = cont + 1){
    if (edad <= 1)
    resul = edad + resul
    
    edad = prompt("ingrese otra edad o esc para terminar")
    if (edad === "esc"){
        i = 1
    }
}
prome = resul / cont
alert(`el promedio es ${prome}`)

