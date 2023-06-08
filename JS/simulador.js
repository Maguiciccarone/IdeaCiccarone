console.log("esta conectado");

const precioEnvio = 1500;

alert("Bienvenidos a Meraki, nuestros productos son:")


let productos = ["agenda pocket", "agenda semanal", "agenda diaria", "agenda docente"];

let producto0 = { numeroProducto: 0, nombre: "agenda pocket", precio: 2000 };
let producto1 = { numeroProducto: 1, nombre: "agenda semanal", precio: 2500 };
let producto2 = { numeroProducto: 2, nombre: "agenda diaria", precio: 3000 };
let producto3 = { numeroProducto: 3, nombre: "agenda docente", precio: 3500 };

for (producto in productos) {
    let i = producto;
    alert(i + ") " + productos[producto]);
}

let consultaUsuario = prompt(`Ingrese el numero del producto deseado:`);

if (consultaUsuario == 0) {
    let respuestaEnvio = prompt(`Elegiste ${producto0["nombre"]} y su precio es ${producto0["precio"]}. Queres sumarle ${precioEnvio} de envio? (si o no)`);
    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(producto0["precio"]);
        alert("el precio final es de " + costoTotal + " con envio incluido");
    } else {
        alert("el precio final es de " + producto0["precio"] + " coordina la entrega con el vendedor");
    }
} else if (consultaUsuario == 1) {
    let respuestaEnvio = prompt(`Elegiste ${producto1["nombre"]} y su precio es ${producto1["precio"]}. Queres sumarle ${precioEnvio} de envio? (si o no)`);
    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(producto1["precio"]);
        alert("el precio final es de " + costoTotal + " con envio incluido");
    } else {
        alert("el precio final es de " + producto1["precio"] + " coordina la entrega con el vendedor");
    }
} else if (consultaUsuario == 2) {
    let respuestaEnvio = prompt(`Elegiste ${producto2["nombre"]} y su precio es ${producto2["precio"]}. Queres sumarle ${precioEnvio} de envio? (si o no)`);
    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(producto2["precio"]);
        alert("el precio final es de " + costoTotal + " con envio incluido");
    } else {
        alert("el precio final es de " + producto2["precio"] + " coordina la entrega con el vendedor");
    }
} else if (consultaUsuario == 3) {
    let respuestaEnvio = prompt(`Elegiste ${producto3["nombre"]} y su precio es ${producto3["precio"]}. Queres sumarle ${precioEnvio} de envio? (si o no)`);
    if (respuestaEnvio === "si") {
        let costoTotal = sumarEnvio(producto3["precio"]);
        alert("el precio final es de " + costoTotal + " con envio incluido");
    } else {
        alert("el precio final es de " + producto3["precio"] + " coordina la entrega con el vendedor");
    }
} else {
    alert("ingresaste un número inválido");
}

function sumarEnvio(precio) {
    costoTotal = precio + precioEnvio;
    return costoTotal;
}