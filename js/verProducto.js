let productos = JSON.parse(localStorage.getItem("productos"))
salida = ""


salida = salida + "<div class='row row-cols-2 align-items-center'>"
salida = salida + "<div class='col-7'>"
salida = salida + "<img src='imgs/cirno.jpg' alt='' style='width: 75%; height: auto;'>"
salida = salida + "</div>"
salida = salida + "<div class='col-5'>"
salida = salida + "<div class='row'>"
salida = salida + "<h2>Peluche Cirno Touhou</h2>"
salida = salida + "</div>"
salida = salida + "<br> <br>"
salida = salida + "<div class='row'>"
salida = salida + "<h4>Precio $22.990</h4>"
salida = salida + "</div>"
salida = salida + "<br>"
salida = salida + "<div class='row'>Stock: algo </div> <br>"
salida = salida + "<div class='row'><input type='number' style='width:11%;' value='0' min = '0'></div> <br>"
salida = salida + "<div class='row'><button class='btn btn-primary' onclick=''>Agregar Al Carrito</button></div>"
salida = salida + "</div>"
salida = salida + "</div>"


document.addEventListener("DOMContentLoaded", function() {
    cargarDetalle()
})
function cargarDetalle() {
    document.getElementById("detalleProducto").innerHTML = salida    
}