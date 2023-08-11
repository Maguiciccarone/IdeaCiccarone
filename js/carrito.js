document.addEventListener('DOMContentLoaded', function () {

  let carrito = [];
  let carritoStorage = JSON.parse(localStorage.getItem('carrito'));

  const productContainer = document.querySelector('#product_container_');
  const compraFinal = document.getElementById('finalizar_compra');

  async function getProductsMeraki() {
    try {
      const response = await fetch('../json/productos.json');
      const data = await response.json();

      const productos = data.productos;

      productos.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('producto');
        productDiv.style.backgroundColor = '#FFFFFF';

        productDiv.innerHTML = `
          <div class='product_card'>
            <img src='${producto.imagen}' class='tarjeta-img'>
            <h3>${producto.nombre}</h3>
            <p class='text-size'>${producto.descripcion}</p>
            <p class='text-center'>precio: $${producto.precio}</p>
            <button class='btn'>Agregar al carrito</button>
          </div>
        `;

        productContainer.appendChild(productDiv);

        const addButton = productDiv.querySelector('.btn');

        addButton.addEventListener('click', () => {
          // agregamos el producto al carrito
          carrito.push(producto);

          Swal.fire({
            title: `${producto.nombre}`,
            text: 'Se ha agregado al carrito.',
            imageUrl: `${producto.imagen}`,
            imageWidth: 250,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer: 1000,
            showConfirmButton: false,
          });

          // guardamos el producto en el carrito
          guardarCarrito(carrito);
          mostrarCarrito();
        });
      });
    } catch (err) {
      console.error(err);
    }
  }

  getProductsMeraki();


  function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function eliminarProducto(index) {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      const carritoParseado = JSON.parse(carritoGuardado);
      carritoParseado.splice(index, 1); // Eliminamos el producto del carrito usando splice

      guardarCarrito(carritoParseado); // Guardamos el carrito actualizado en el almacenamiento local
    }
  }

  function mostrarCarrito() {
    const cartContainer = document.getElementById('modal-body');
    const carritoGuardado = localStorage.getItem('carrito');

    let precioTotal = 0;

    if (carritoGuardado) {
      const carritoParseado = JSON.parse(carritoGuardado);
      cartContainer.innerHTML = '';

      carritoParseado.forEach((producto, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'text-center';
        productDiv.innerHTML = `
            <h1>${producto.nombre}</h1>
            <img width="100px" src="${producto.imagen}">
            <p>${producto.precio}</p>
            <button class='btn btn-eliminar' data-index="${index}">Eliminar producto</button>
            <hr>
          `;

        cartContainer.appendChild(productDiv);
        precioTotal += producto.precio;
      });
    }

    const precioTotalElement = document.createElement('p');
    precioTotalElement.textContent = `Precio Total: ${precioTotal.toFixed(2)}`
    cartContainer.appendChild(precioTotalElement);

    // se elimina el producto del carrito 

    const eliminarProductoBtns = document.querySelectorAll(".btn-eliminar");
    eliminarProductoBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.getAttribute('data-index'));
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn',
            cancelButton: 'btnEliminar'
          },
          buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
          title: 'Quieres eliminar este producto del carrito?',
          text: "",
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'No, me arrepentí!',
          confirmButtonText: 'Sí, quiero eliminarlo!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              '',
              'Producto eliminado del carrito.',
              'success'
            )
            eliminarProducto(index);
            //  carrito = [];
    guardarCarrito(carrito);
            mostrarCarrito(); // Actualizamos el carrito después de eliminar el producto
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) { }
        })
      });
    })
  }

  function mostrarMensajeCarritoVacio() {
    Swal.fire({
      icon: 'info',
      title: 'El carrito está vacío',
      text: 'Agrega productos al carrito para continuar.',
      showConfirmButton: true,
    });
  }

  // Evento al tocar el icono del carrito
  const carritoIcono = document.getElementById('carrito-icono');
  carritoIcono.addEventListener('click', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (!carritoGuardado || JSON.parse(carritoGuardado).length === 0) {
      mostrarMensajeCarritoVacio();
    } else {
      mostrarCarrito();
      $('#exampleModal').modal('show');
    }
  });


  function vaciarCarrito() {
    // Vaciar el carrito y eliminar los productos del almacenamiento local
    carrito = [];
    guardarCarrito(carrito);
    mostrarCarrito();
    $('#exampleModal').modal('hide');
    Swal.fire({
      icon: 'info',
      title: 'Carrito vaciado',
      text: 'El carrito ha sido vaciado.',
      timer: 1500,
      showConfirmButton: false
    });
  }
  const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

  compraFinal.addEventListener('click', () => {
    vaciarCarrito();
    Swal.fire(
      'Compra realizada',
      'Gracias por elegir Meraki!',
      'success'
    )
    $('#exampleModal').modal('hide');
  })
});