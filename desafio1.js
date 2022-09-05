
let num = Number(prompt("Ingrese el numero a multiplicar"))

for (let i = 1; i <= 10 ; i++) {

    resul = num * i;
    alert(`el resultad de ${num} x ${i} es ${resul}`);
    
    if (i === 10){
        let usuario = prompt(" si desea multiplicar otro numero, ingreselo, de lo contario escriba esc")
        if (usuario === "esc"){
            alert("gracias")
            break
        }else{
            num = usuario
            i = 0
            continue
        }
    } 
}