const express = require("express");
const cors = require("cors");
/*es para traer la libreria de express y asi inicializar el servidor y poder escuchar todas las peticiones de los clientes*/
const app = express(); /*es la variable que va almacenada la aplicacion*/
app.use(cors());
app.use(express.json());

let users = [];

class User {
  constructor(name, email, user, password , phone, direction,vehicle_brand,vehicle_model,plate,color,years, permissions,id)
  {
    this.name=name
    this.email= email
    this.user= user
    this.password= password
    this.phone = phone
    this.direction= direction
    this.vehicle_brand = vehicle_brand
    this.vehicle_model = vehicle_model
    this.plate = plate
    this.color = color
    this.years = years
    this.permissions= permissions
    this.id= id
  }
}

app.post("/create", (req, res) => {
  console.log(users);

  let diferente = confirmacionData(req.body, users);
  console.log(diferente);
  if (diferente == 0) {
    let ident = Math.floor(Math.random() * (1000000 - 1 + 1) + 1);
    let user = new User(
      req.body.name,
      req.body.email,
      req.body.user,
      req.body.password,
      req.body.phone,
      req.body.direction,
      req.body.vehicle_brand,
      req.body.vehicle_model,
      req.body.plate,
      req.body.color,
      req.body,years,
      req.body.permissions,
      req.body.id,
      ident
    );
    users.push(user);
    return res
      .json({ message: "usuario creado con exito" })
      .status(200)
      .end(); /* codigo permite retornar mensaje de respuesta con estatus 200 que indica creacion */
  } else if(diferente == 2) {
    return res
      .json({ message: "uno o varios parametros estan en blanco" })
      .status(400)
      .end();
      
  }else{
    return res
      .json({ message: "usuario ya utilizado" })
      .status(400)
      .end();
      
  }
}); /*permite recibir informacion del cliente para el servidor */
app.post("/inicioSesion",(req,res)=>
{
  console.log(req.body)

  let usuario = req.body.usuario
  let contraseña = req.body.contraseña
  let confirmacion = confirInicioSesion(usuario,contraseña,users)
  if (confirmacion == 1)
  {
    console.log("usuario encontrado")
    return res.json({message: "usuario encontrado"}).status(200).end()
    // return res.informacionUsuario(usuario, users)
  }
  else
  {
    return res.json({message: "usuario o contraseña errado"}).status(400).end()
  }

})

/*app.get("/creation", (req,res) => {


}) esto permite dar respuesta de forma de lectura al cliente  */
function informacionUsuario(usuario, users)
{ let informacion= []
  for (let i = 0; i < users.length; i++) {
    if ((usuario == users[i].user) && (contraseña== users[i].password)) {
        informacion.push(users)
    }
  }
  return informacion
}
function confirInicioSesion(usuario,contraseña,users)
{
  let resultado = 0
  for (let i = 0; i < users.length; i++) {
    if ((usuario == users[i].user) && (contraseña== users[i].password)) {
        resultado = 1;
    }
  }
  return resultado
}
function confirmacionData(usuario, users) {
  let resultado = 0;
  if (
    usuario.name != "" ||
    usuario.email != "" ||
    usuario.user != "" ||
    usuario.password != "" ||
    usuario.permissions != ""
  ) {
    for (let i = 0; i < users.length; i++) {
      if (usuario.name == users[i].user) {
        resultado = 1;
      }
    }
  }
  else{
        resultado = 2
  }
  return resultado;
}
app.listen(8080, () => {
  console.log("servidor iniciado");
}); /* asi se le da el puerto por el cual se comunicara el servidor con le cliente */
