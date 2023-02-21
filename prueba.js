let name = document.getElementById('nombre')
let password = document.getElementById('clave')
let edad =  document.getElementById('edad')
let user = document.getElementById('usuario')
let email = document.getElementById('email')
let mayorEdad 
let ahorro = document.getElementById('ingreso')
let deuda = document.getElementById('deuda')
let montoReal
let nombreCompleto

let users= []

class Usuario
{
    constructor(name, user, password, email)
    {
        this.name=name
        this.user= user
        this.password= password
        this.email= email

    }
}

function llenar()
{
    users.push(new Usuario(name.value, user.value, password.value, email.value)) // manera de llenar un array con el objeto
    reiniciarFormulario()
    return
}

function reiniciarFormulario()
{
    let form= document.getElementById('Formulario')
    form.reset()//es una de las formas para voler los campos vacios de un formulario 
    return
}
