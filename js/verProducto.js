let productos = JSON.parse(localStorage.getItem("productos"))
let idDetalle = localStorage.getItem("idDetalle")
let fotoProducto, nombreProducto, precioProducto, productoDetalle, stockProducto = ""

var tempCarrito = JSON.parse(localStorage.getItem("carrito"))
for (let producto of productos) {
    if (producto.id == idDetalle) {
        productoDetalle = producto
        break
    }
}


document.addEventListener("DOMContentLoaded", function () {
    cargarDetalle()
})
function cargarDetalle() {
    document.getElementById("fotoProducto").innerHTML = fotoProducto
    document.getElementById("nombreProducto").innerHTML = nombreProducto
    document.getElementById("precioProducto").innerHTML = precioProducto
    document.getElementById("stockProducto").innerHTML = stockProducto
}
function agregarCarrito() {
    let stockCarrito = document.getElementById("cantidadCarrito").value
    if (stockCarrito < 1) {
        document.getElementById("alertaCarrito").innerHTML = "Ingrese un Valor valido"
    } else if (stockCarrito > productoDetalle.stock) {
        document.getElementById("alertaCarrito").innerHTML = "Stock disponible Insuficiente"
    } else {
        document.getElementById("alertaCarrito").innerHTML = ""
        document.getElementById("agregaCarrito").innerHTML = "Agregado al Carrito"
        document.getElementById("agregaCarrito").style.backgroundColor = "#28a745"
        setTimeout(() => {
            document.getElementById("agregaCarrito").innerHTML = "Agregar al Carrito"
            document.getElementById("agregaCarrito").style.backgroundColor = "#0d6efd"
        }, 1000);
        let productoCarrito = {
            "id": productoDetalle.id,
            "nombre": productoDetalle.nombre,
            "foto": productoDetalle.foto,
            "stock": productoDetalle.stock,
            "precio": productoDetalle.precio,
            "cantidad": stockCarrito
        }
        /*
        Si el carrito contiene productos:
            Buscar si el producto existe en el carrito
            Si el producto existe:
                Actualizar su cantidad
            Si no:
                Agregar al carrito
        */

        let encontrado = 0
        if (tempCarrito.length == 0) {
            tempCarrito.push(productoCarrito)
        }
        else {
            for (var producto of tempCarrito) {
                if (producto.id == productoDetalle.id) {
                    encontrado = 1
                    break;
                }
            }
            if (encontrado == 1) {
                producto.cantidad = String(parseInt(producto.cantidad) + parseInt(productoCarrito.cantidad))
            }
            else{
                tempCarrito.push(productoCarrito)
            }
            encontrado = 0
        }


        localStorage.setItem("carrito", JSON.stringify(tempCarrito));
    }
}

fotoProducto = "<img src='imgs/" + productoDetalle.foto + "' alt='' style='width: 75%; height: auto;'>"
nombreProducto = "<h2>" + productoDetalle.nombre + "</h2>"
precioProducto = "<h4>Precio $" + productoDetalle.precio + "</h4>"
stockProducto = "Stock:" + productoDetalle.stock + " <br>"
