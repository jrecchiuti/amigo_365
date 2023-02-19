let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let edad =  document.getElementById('edad')
let usuario = document.getElementById('usuario')
let email = document.getElementById('email')
let mayorEdad 
let ahorro = document.getElementById('ingreso')
let deuda = document.getElementById('deuda')
let montoReal
let nombreCompleto

/*nombre = prompt("ingrese su nombre")
apellido = prompt( nombre +" ingrese su apellido")
edad =  prompt(nombre + " ingrese su edad")
usuario = prompt(nombre + " ingrese su usuario")
email = prompt(nombre + " ingrese su email")
deuda = prompt(nombre + " ingrese el monto de su deuda")
ahorro = prompt(nombre + " ingrese el monto de sus ahorros")
if (edad >= 18){
    mayorEdad = true
}
else{
    mayorEdad = false
}
montoReal = ahorro - deuda
nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)*/
function llenar()
{
    console.log("ingreso de boton " + nombre.value + " " + apellido.value)
}
