const nombre = document.getElementById("myname");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const celular = document.getElementById("mobile");
const contrasenia = document.getElementById("password");
const contrasenia2 = document.getElementById("repeatPassword");
const terminosYcondiciones = document.getElementById("termsAndConditions");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("myname", "Nombre no valido*");
    condicion = false;
  }
  if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
    mostrarMensajeError("surname", "Apellido no valido");
    condicion = false;
  }
  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no valido*");
    condicion = false;
  }
  if (
    celular.value.length != 10 ||
    celular.value.trim() == "" ||
    isNaN(celular.value)
  ) {
    mostrarMensajeError("mobile", "Celular no valido*");
    condicion = false;
  }
  if (contrasenia.value.length < 1 || contrasenia.value.trim() == "") {
    mostrarMensajeError("password", "Contraseña no valido*");
    condicion = false;
  }
  if (contrasenia2.value != contrasenia.value) {
    mostrarMensajeError("repeatPassword", "Contraseña error*");
    condicion = false;
  }
  if (!terminosYcondiciones.checked) {
    mostrarMensajeError("termsAndConditions", "Acepte*");
    condicion = false;
  } else {
    mostrarMensajeError("termsAndConditions", "");
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    console.log("Se envio");   
    const container = document.getElementById("main-container");
    const form = document.getElementById("form");
    form.remove();
   
   

    const users = [{
        userName: nombre.value,
        userLastname: apellidos.value,
        userMail: correo.value,
        userCellphone: celular.value,
        userImg: "https://i.pinimg.com/736x/28/3a/b1/283ab1108ef8e379a2e555de019e1aee.jpg"
    }];

    users.forEach((result) => {
        const card = document.createElement('div');
        card.classList = 'card-body'
  
       
        const creation = `
        <div class = "card">
            <div class="card-body">
            <div class="card-header">
                <h3>${result.userName}  ${result.userLastname}</h3>
            </div>
            <div class="card-img"><img src="${result.userImg}" style="width:120px; heigth: 120px; border-radius: 100px;"></div>
            <div class="card-info">
                <h6 class="mail">${result.userMail}</h6>
                <h6 class="age">${result.userCellphone}</h6>
                <p class="description">este es mi perfil</p>
                <a id="comebackBtn" class="btn" href="#">Volver</a>
            </div>
            </div>
        </div>
        `;


    container.innerHTML += creation;
})
}
