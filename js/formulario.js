document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById("myForm");
  let submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    let nombreInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let mensajeInput = document.getElementById("mensaje");

    let nombre = nombreInput.value;
    let email = emailInput.value;
    let mensaje = mensajeInput.value;

    nombre.length < 4 ? Toastify({
      text: "El nombre deber tener más de 4 caracteres",
      position: "center",
      duration: 3000,
      offset: {
        y: 300
      },
      style: {
        background: "linear-gradient(to right, #FF85B1, #FF85B1 )",
      },
    }).showToast() : "";

    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    emailRegex.test(email) ? "" : Toastify({
      text: "Ingrese un email válido",
      position: "center",
      duration: 3000,
      offset: {
        y: 300
      },
      style: {
        background: "linear-gradient(to right, #FF85B1, #FF85B1 )",
      },
    }).showToast();

    mensaje.length < 6 ? Toastify({
      text: "El mensaje debe contener más de 6 caracteres",
      position: "center",
      duration: 3000,
      offset: {
        y: 300
      },
      style: {
        background: "linear-gradient(to right, #FF85B1, #FF85B1 )",
      },
    }).showToast() : "";

    // validacion para ejecutar el formulario
    if (nombre.length >= 4 && emailRegex.test(email) == true && mensaje.length > 6) {
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500
      })

      document.getElementById("myForm").reset();
    }


  })



}); 