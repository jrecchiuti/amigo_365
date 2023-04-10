/*-----------formularios------------------------------*/
let name = document.getElementById("nombre");
let password = document.getElementById("clave");
let edad = document.getElementById("edad");
let user = document.getElementById("usuario");
let email = document.getElementById("email");
let permisologia = document.getElementById("permisologia");
let  direccion = document.getElementById("direccion");
let registroUsuario = document.getElementById("registroUsuario")
let inicioSesion = document.getElementById("inicioSesion")
let contenedor= document.getElementById("contenedor")
let vehicle_brand = document.getElementById("vehicle_brand")
let vehicle_model = document.getElementById("vehicle_model")
let plate = document.getElementById("plate")
let color = document.getElementById("color")
let years = document.getElementById("years")
/*------ los botones-------------------*/
let registrar = document.getElementById("registrar")
let ingresar = document.getElementById("ingresar")
let enviar = document.getElementById("enviar")
let iniciar1= document.getElementById("iniciar")
/*-------array--------------------------*/
let users = [];

class Usuario {
    constructor(name, email, user, password , phone, direction,vehicle_brand,vehicle_model,plate,color,years, permissions,id)
    {
        this.name=name
        this.email= email
        this.user= user
        this.password= password
        this.phone = phone
        this.direction= direction
        this.vehicle_brand = vehicle_brand
        this.vehicle_model =vehicle_model
        this.plate = plate
        this.color = color
        this.years = years
        this.permissions= permissions
        this.id= id
    }
}
//inicio principal de registro
registrar.addEventListener('click', registrarUsuario)
ingresar.addEventListener('click',iniciarSesion)
function pantallaPrincipal()
{
  contenedor.style.display = 'flex'
  registroUsuario.style.display = 'none'
  inicioSesion.style.display = 'none'

}
function registrarUsuario()
{
  contenedor.style.display = 'flex'
  registroUsuario.style.display = 'flex'
  inicioSesion.style.display = 'none'
}
function iniciarSesion()
{
  contenedor.style.display = 'flex'
  registroUsuario.style.display = "none"
  inicioSesion.style.display = 'flex'
}
function iniciar()
{
  let usuario = document.getElementById("usuario1").value
  let contraseña = document.getElementById("contraseña").value
  if (usuario != "" && contraseña != "")
  {
    sendInicioDataServer(usuario,contraseña)
  }
  else
  {
    console.log("usuario o contraseña sin informacion")
  }
}
//-----------------------------------------------------//
function llenar() {
  let usuario = new Usuario(
    name.value,
    email.value,
    user.value,
    password.value,
    telefono.value,
    direccion.value,
    vehicle_brand.value,
    vehicle_model.value,
    plate.value,
    color.value,
    years.value,
  );
  users.push(usuario); // manera de llenar un array con el objeto
  console.log(users);
  sendDataServer(usuario);
  reiniciarFormulario();
  //pantallaPrincipal();
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
function sendInicioDataServer(usuario,contraseña)
{
  fetch("http://localhost:8080/inicioSesion", {
    method: "POST",
    body: JSON.stringify({usuario,contraseña}),
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
