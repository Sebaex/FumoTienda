let carrito = JSON.parse(localStorage.getItem("carrito"))
let salida = ""
document.addEventListener("DOMContentLoaded", function () {
    cargarCarrito()
})

function cargarCarrito() {
    for (let producto of carrito) {
        salida = salida + producto.id + " " + producto.cantidad + "<br>"
    }
    document.getElementById("cuerpoCarrito").innerHTML = salida
}

