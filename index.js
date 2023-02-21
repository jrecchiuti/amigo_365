const express = require("express")
/*es para traer la libreria de express y asi inicializar el servidor y poder escuchar todas las peticiones de los clientes*/
const app = express()/*es la variable que va almacenada la aplicacion*/

app.listen(8080, () => {
    console.log('servidor iniciado')
})  /* asi se le da el piuerto por el cual se comunicara el servidor con le cliente */
