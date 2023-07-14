

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

  if (nombre.length < 4) {
    alert("el nombre debe contener mas de 4 caracteres");
    nombreInput.focus();
  }

  let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (emailRegex.test(email)) {
  } else {
    alert("no es un correo valido");
    emailInput.focus();
  }

  if (mensaje.length < 6) {
    alert("el mensaje debe contener mas de 6 caracteres");
    mensajeInput.focus();
  }
});


