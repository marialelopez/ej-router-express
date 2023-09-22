const express = require ('express')
const app = express()
const port =3000
const funciones = require('./listaDeContactos')

app.get('/',(req, res)=>{      // dentro el  parentesis son parametros RUTA RAIZ
    res.json(funciones.imprimirContactos()) //send es para texto plano 
    })

 
// app.get('/contacts',(req, res)=>{      // dentro el parentesis son parametros RUTA DE CONTACTS
// res.send('<h1>Hola soy la ruta contacts</h1>') //send es para texto plano 
// })

app.route("/contacts/:id")
.get((req, res)=>{  
    const id  = req.params.id                                            //para encadenar
    res.send(`<h1>Hola soy la ruta contacts con petición GET ${id}</h1>`)
})
.post ((req, res) =>{
    res.send(`<h1>Hola soy la ruta contacts con petición POST</h1>`)
})
.delete  ((req, res) =>{
    const id = req.params.id
    funciones.borrarContacto(id)
    res.send(` El contacto con id: ${id} fue borrado exitosamente!`)
});


app.listen(port,()=>{                //para que el servidor escuche, este recibe el puerto y un colback es una funcion que se pasa por parametro a otra funcion
    console.log(`servidor corriendo en el puerto: ${port}`)
})   