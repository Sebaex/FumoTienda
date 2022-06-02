var carrito = JSON.parse(localStorage.getItem("carrito"))
let salida = ""
let subtotal = 0
document.addEventListener("DOMContentLoaded", function () {
    cargarCarrito()
    verificarCarrito()
})


function eliminarProducto(idEliminar) {
    for (let producto of carrito) {
        if(idEliminar == producto.id){
            carrito.splice(carrito.indexOf(producto), 1)
            break;
        }
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    cargarCarrito()
    if (carrito.length == 0) {
        document.getElementById("cuerpoProductos").innerHTML = "<h3>El carrito está vacío.</h3>"
    }
}

function realizarCompra() {
    let insuficiente = 0
    listado = JSON.parse(localStorage.getItem("productos"))
    for (let producto of carrito) {
        for (let productoAlmacenado of listado) {
            if (producto.id == productoAlmacenado.id && producto.cantidad > productoAlmacenado.stock) {
                document.getElementById("alertaStock").innerHTML = "Stock Insuficiente"
                insuficiente = 1
                break;
            }
        }
        if (insuficiente == 1) {
            break;
        }
    }
    if (insuficiente == 0) {
        for (let producto of carrito) {
            for (let productoAlmacenado of listado) {
                if(producto.id == productoAlmacenado.id){
                    productoAlmacenado.stock = parseInt(productoAlmacenado.stock) - parseInt(producto.cantidad)
                }
            }
        }
        localStorage.setItem("carrito", "[]")
        localStorage.setItem("productos", JSON.stringify(listado))
        carrito = JSON.parse(localStorage.getItem("carrito"))
        cargarCarrito()
        document.getElementById("confirmarCompra").innerHTML = "<h5>Gracias por su compra!</h5>"
        setTimeout(() => {
            document.getElementById("dialogoPago").classList.remove("show")
        }, 1500);
    }
}

function cargarCarrito() {
    salida = ""
    total = 0
    if (carrito.length == 0) {
        salida = "<h3>El carrito está vacío.</h3>"
    } else {
        for (let producto of carrito) {
        salida = salida + "<div class='fichaProducto'>"
        salida = salida + "<img src='imgs/" + producto.foto + "' alt='' style='width: 25%; height: auto;'>"
        salida = salida + "<div class='descripcionProducto'>"
        salida = salida + "<h3>" + producto.nombre + "</h3>"
        salida = salida + "<h4>Precio $" + producto.precio + "</h4>"
        salida = salida + "<div> Cantidad: " + producto.cantidad + "</div>"
        salida = salida + "<div> Subtotal: $" + producto.subtotal + "</div>"
        salida = salida + "<div id='alertaStock'></div>"
        salida = salida + "<button type='button' class='btn btn-danger' onclick='eliminarProducto(" + producto.id + ")'>Eliminar</button>"
        salida = salida + "</div>"
        salida = salida + "</div> <br>"
        total = total + producto.subtotal
    }
    }
    document.getElementById("cuerpoProductos").innerHTML = salida
    document.getElementById("valoresPrecios").innerHTML = "Total: $" + total

}

function verificarCarrito() {
    if (carrito.length == 0) {
        document.getElementById("confirmarCompra").innerHTML = "<h4>Ingrese elementos al carro</h4>"
    }
}