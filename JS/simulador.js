
let producto;
let productoStorage = JSON.parse(localStorage.getItem('carrito'));

if (!productoStorage) {
  //No mostrar el modal del carrito de compra
} else {
  alert("Todavia no terminaste tu compra");
}
class Producto {
  constructor(id, nombre, precio, description, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.description = description;
    this.img = img;
  }
}

const productos = [
  new Producto(1, 'Agenda diaria', 4000, 'Agenda con diagramación diaria. Contiene planner mes a mes, calendario, sección de notas y sobre para guardar papeles.', '../img/diaria.jpg'),
  new Producto(2, 'Agenda semanal', 3500, 'Agenda con vista semanal tamaño A5. Incluye tapa personalizada. Contiene planner mes a mes, calendario, sección de notas y sobre para guardar papeles importantes.', '../img/semanal.jpg'),
  new Producto(3, 'Agenda pocket', 3000, 'Agenda tamaño A6. Incluye tapa personalizada. Contiene calendario, vista semanal sin horario, sección de notas y contactos.', '../img/pocket.jpg'),
  new Producto(4, 'Agenda docente', 4000, 'Agenda tamaño A5. Incluye tapa personalizada. Contiene calendario, planner, horarios, escuelas, sección para tomar asistencia hasta cuarenta alumnos, y calificiaciones.', '../img/docente.jpg'),
  new Producto(5, 'Cuaderno rayado', 3000, 'Cuaderno tamaño A5 tapa dura. Incluye tapa personalizada. Contiene 50 hojas rayadas en papel bookcel de 80gr., color ahuesado para cuidar la visión.', '../img/rayado.jpg'),
  new Producto(6, 'Cuaderno cuadriculado', 3000, 'Cuaderno tamaño A5 tapa dura. Incluye tapa personalizada. Contiene 50 hojas cuadriculadas en papel bookcel de 80 gr., color ahuesadopara cuidar la visión.', '../img/cuariculado.jpg'),
  new Producto(7, 'Cuaderno liso', 3000, 'Cuaderno tamaño A5 tapa dura. Incluye tapa personalizada. Contiene 50 hojas lisas en papel bookcel de 80 gr., color ahuesado para cuidar la visión.', '../img/liso.jpg'),
  new Producto(8, 'Cuaderno pediátrico', 3000, 'Cuaderno tapa dura, tamaño A5. Incluye tapa personalizada. Contiene consultas pediátricas, citas, control de crecimiento y vacunas, tratamientos y medicación, notas.', '../img/cuadernopediatrico.jpg'),
];

const productContainer = document.querySelector('#product-container');

productos.forEach(producto => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('producto');

  productDiv.innerHTML = `
    <div class="product_card">
    <img src="${producto.img}" class="tarjeta-img">
    <h3>${producto.nombre}</h3>
    <p class="text-size">${producto.description}</p>
    <p class="text-center">precio: $${producto.precio}</p>
    <button class="btn">Agregar al carrito</button>
    </div>
    `;

  productContainer.appendChild(productDiv);

  const addButton = productDiv.querySelector('.btn');

  addButton.addEventListener('click', () => {
    console.log('se agrego al carrito', producto);

    let jsonParseProduct = JSON.stringify(producto)

    localStorage.setItem('carrito', jsonParseProduct);
  });

})




