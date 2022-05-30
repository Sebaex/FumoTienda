let productos = JSON.parse(localStorage.getItem("productos"))

var salida = ""

var idDetalle = ""

for (var producto of productos) {
    if (producto.stock == 0) {
        salida = salida + "<a>"
        salida = salida + "<div class='col'>"
        salida = salida + "<img src='imgs/" + producto.foto + "' alt='' style='filter: grayscale(100%)'>"
        salida = salida + "<h5><del>" + producto.nombre + "</h5></del>"
        salida = salida + "<h2 style='color: red;'>Agotado</h2>"
        if (producto.nombre.includes("Touhou")) {
            salida = salida + "<h5>Precio: $" + producto.precio + " " + "<del>$109990</del></h5>"
        }
        else {
            salida = salida + "<h5>Precio: $" + producto.precio + "</h5>"
        }
        salida = salida + "</div>"
        salida = salida + "</a>"
    }
    else{
        salida = salida + "<a onclick='idDetalle = " + producto.id + "; detalleProducto(idDetalle)'>"
        salida = salida + "<div class='col'>"
        salida = salida + "<img src='imgs/" + producto.foto + "' alt=''>"
        salida = salida + "<h5>" + producto.nombre + "</h5>"
        if (producto.nombre.includes("Touhou")) {
            salida = salida + "<h2>Precio: $" + producto.precio + " " + "<del>$109990</del></h2>"
        }
        else {
            salida = salida + "<h2>Precio: $" + producto.precio + "</h2>"
        }
        salida = salida + "</div>"
        salida = salida + "</a>"
    }
    
}

document.addEventListener("DOMContentLoaded", function () {
    cargarProducto()
})
function cargarProducto() {
    document.getElementById("listadoProductos").innerHTML = salida
}

function detalleProducto(id) {
    localStorage.setItem('idDetalle', id)
    document.location.href = 'verProducto.html';
}

