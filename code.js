// Puedes agregar detalles de interactividad o cargar datos dinámicamente aquí
// Por ejemplo, podrías usar AJAX para cargar datos desde un servidor.

// Ejemplo de código para cambiar la descripción de un producto al hacer clic
document.getElementById("product1").addEventListener("click", function() {
    document.getElementById("product1").querySelector("p:nth-child(2)").innerHTML = "¡Producto 1 en oferta por tiempo limitado!";
});
