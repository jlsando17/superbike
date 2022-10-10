//console.log("hola mundo en nodeJS")

const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require("./modelos/Tarea.js")

const app= express();
const router= express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//conexion a database
mongoose.connect("mongodb+srv://jose007:Jerry1508@clusterweb.sir0oev.mongodb.net/ActividadesDATABASE?retryWrites=true&w=majority");


//CRUD

router.get('/',(req, res) =>{
    res.send("mi primer  API's");
})
router.post('/tarea',(req, res) =>{
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });


nuevaTarea.save(function(err, datos){
    if(err){
        console.log(err);
    }
    res.send("Tarea almacenada correctamente")
})
});

app.use(router);
app.listen(3000,()=>{
     console.log("servidor corriendo en puerto 300")
});