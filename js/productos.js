let productos = JSON.parse(localStorage.getItem("productos"))
var salida = ""

var idProducto = ""

for (var producto of productos) {
    salida = salida + "<a href='/productos/producto" + producto.id + ".html'>"
    //salida = salida + "<a onclick='detalleProducto()'>"
    salida = salida + "<div class='col'>"
    salida = salida + "<img src='imgs/" + producto.foto + "' alt=''>"
    salida = salida + "<h5>" + producto.nombre + "</h5> <br>"
    salida = salida + "Precio: $" + producto.precio
    salida = salida + "</div>"
    salida = salida + "</a>"
}

document.addEventListener("DOMContentLoaded", function() {
    cargarProducto()
})
function cargarProducto() {
    document.getElementById("listadoProductos").innerHTML = salida    
}

function detalleProducto() {
    document.location.href = 'verProducto.html';
}

