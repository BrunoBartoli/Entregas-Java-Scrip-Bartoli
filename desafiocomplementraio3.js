elemento = document;
elemento = document.images;
console.log(elemento);


let productos = [{
        id: 1,
        titulo: "Paragolpe vento gli mk5",
        descripcion: "Compatible con modelos 2010/2011/2013/2014", 
        precio: 36000
    },
    {
        id: 2,
        titulo: "DRL optica vento gli",
        descripcion: "Compatible con modelos 2010/2011/2013/2014",
        precio: 95000
    },
    {
        id: 3,
        titulo: "Volante Scirocco",
        descripcion: "Compatible con modelos 2010/2011/2013/2014",
        precio: 50000
    }
]

for (producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Producto: ${producto.titulo}</h3><p>Precio: ${producto.precio}</p><h5><p>Descripcion: ${producto.descripcion}</p></h5>`;
    document.body.appendChild(contenedor);
}