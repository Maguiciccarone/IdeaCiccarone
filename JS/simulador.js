
const precioEnvio = 1500;

alert("Bienvenidos a Meraki, nuestros productos son:")

let productos = ["agenda pocket", "agenda semanal", "agenda diaria", "agenda docente"];

let producto0 = { numeroProducto: 0, nombre: "agenda pocket", precio: 2000 };
let producto1 = { numeroProducto: 1, nombre: "agenda semanal", precio: 2500 };
let producto2 = { numeroProducto: 2, nombre: "agenda diaria", precio: 3000 };
let producto3 = { numeroProducto: 3, nombre: "agenda docente", precio: 3500 };

productos.forEach((producto, i) => {
    alert(i + ") " + producto);
});

let consultaUsuario = prompt(`Ingrese el número del producto deseado:`);

if (consultaUsuario >= 0 && consultaUsuario < productos.length) {
    let productoSeleccionado;
    if (consultaUsuario == 0) {
        productoSeleccionado = producto0;
    } else if (consultaUsuario == 1) {
        productoSeleccionado = producto1;
    } else if (consultaUsuario == 2) {
        productoSeleccionado = producto2;
    } else if (consultaUsuario == 3) {
        productoSeleccionado = producto3;
    }

    let respuestaEnvio = prompt(`Elegiste ${productoSeleccionado.nombre} y su precio es ${productoSeleccionado.precio}. ¿Quieres sumarle ${precioEnvio} de envío? (si o no)`);

    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(productoSeleccionado.precio);
        alert("El precio final es de " + costoTotal + " con envío incluido");
    } else {
        alert("El precio final es de " + productoSeleccionado.precio + " Coordiná la entrega con el vendedor");
    }
} else {
    alert("Ingresaste un número inválido");
}

function sumarEnvio(precio) {
    let costoTotal = precio + precioEnvio;
    return costoTotal;
}

function procesarProducto(numeroProducto, nombre, precio) {
    let productoSeleccionado = { numeroProducto, nombre, precio };
    let respuestaEnvio = prompt(`Elegiste ${nombre} y su precio es ${precio}. ¿Quieres sumarle ${precioEnvio} de envío? (si o no)`);

    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(precio);
        alert("El precio final es de " + costoTotal + " con envío incluido");
    } else {
        alert("El precio final es de " + precio + " Coordiná la entrega con el vendedor");
    }
}

