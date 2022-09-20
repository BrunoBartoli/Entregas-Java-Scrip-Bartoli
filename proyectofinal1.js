class producto{
    constructor(id, nombre, precio, inventario){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.inventario = inventario
    }
}

const productos = [
    new producto(1, "Bomba ftx", 28000, 5),
    new producto(2, "Manguera ftx", 3500, 5),
    new producto(3, "Compu ft3500", 100000, 5),
    new producto(4, "Turbo Greddy super70", 50000, 5),
    new producto(5, "Cubiertas Black", 15000, 5),
]

function agregarcarrito() {
    let productoid = Number(prompt("Ingrese id del producto"))
    let cantidad = Number(prompt("Ingrese cantidad"))
    let producto = productos.find(product => product.id === productoid)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
}

function calcularcarrito(carrito) {
    let total = 0;
    carrito.forEach (producto => {
        total = total + producto.total
    })
    return total
}

const carrito = []

alert("Hola bienvenido a Racing-Parts" )


info = " "

while (info != "esc"){
    info = prompt("Ingrese id producto o esc para finalizar")
    if (info != "esc"){
        agregarcarrito()
    }
}


console.log(carrito)
alert(`El total del carrito es: ${calcularcarrito(carrito)}`)
