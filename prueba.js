let name = document.getElementById("nombre");
let password = document.getElementById("clave");
let edad = document.getElementById("edad");
let user = document.getElementById("usuario");
let email = document.getElementById("email");
let permisologia = document.getElementById("permisologia");
let  direccion = document.getElementById("direccion");


let users = [];

class Usuario {
    constructor(name, email, user, password , age, direction, permissions, id)
    {
        this.name=name
        this.email= email
        this.user= user
        this.password= password
        this.age = age
        this.direction= direction
        this.permissions= permissions
        this.id= id
    }
}

function llenar() {
  let usuario = new Usuario(
    name.value,
    email.value,
    user.value,
    password.value,
    edad.value,
    direccion.value,
    permisologia.value,
  );
  users.push(usuario); // manera de llenar un array con el objeto
  console.log(users);
  sendDataServer(usuario);
  reiniciarFormulario();
  return;
}

function sendDataServer(usuario) {
  fetch("http://localhost:8080/create", {
    method: "POST",
    body: JSON.stringify(usuario),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(function (res) {
    if (res.ok) {
      res.text().then(function (respuesta) {
        console.log(respuesta);
      });
    }
  });
}

function reiniciarFormulario() {
  let form = document.getElementById("Formulario");
  form.reset(); //es una de las formas para voler los campos vacios de un formulario
  return;
}
