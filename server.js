const express = require("express");
const app = express();
const fs = require('fs')
const port = 8080;
const moment = require('moment');

// Middleware para el manejo de datos en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Crea una ruta GET /crear.
app.get("/crear", (req, res) => {
    //Crea 2 variables con el nombre y contenido recibidos por Query Strings.
    const { nombre, contenido } = req.query
     // Obtener la fecha actual en el formato deseado
     const fechaActual = moment().format("DD/MM/YYYY");
     // Agregar la fecha al contenido del archivo
     const contenidoFecha = `${fechaActual} ${contenido}`;
    // Utiliza File System para crear un archivo con el nombre y contenido recibidos, notificando posteriormente a la aplicación cliente que se ha creado un archivo con éxito.
    fs.writeFile(nombre, contenidoFecha, () => {
        res.send('Archivo creado con éxito!')
    })
})
// Crea una ruta GET /leer.
app.get("/leer", (req, res) => {
    // Crea 1 variable con el nombre recibido por Query Strings.
    const { nombre } = req.query
    // Utiliza File System para leer un archivo con el nombre recibido enviando su contenido a la aplicación cliente que está realizando la consulta HTTP.
    fs.readFile(nombre, (err, data) => {
        res.send(data)
    })
})

// Crea una ruta GET /renombrar.
app.get("/renombrar", (req, res) => {
    // Crea variables con el nombre antiguo y el nuevo nombre recibidos por Query Strings.
    const { nombre, nuevoNombre } = req.query
    // Utiliza File System para renombrar un archivo con el nombre recibido, notificando posteriormente a la aplicación cliente que se ha renombrado con éxito.
    fs.rename(nombre, nuevoNombre, (err, data) => {
        if (err) {
            res.status(500).send(`Error al renombrar el archivo: ${err.message}`);
        } else {
            res.send(`Archivo ${nombre} renombrado a ${nuevoNombre}`);
        }
    });
});
//Crea una ruta GET/eliminar.
app.get("/eliminar", (req, res) => {
    //Crea 1 variable con el nombre recibido por Query Strings.
    const { nombre } = req.query
    // Utiliza File System para eliminar un archivo con el nombre recibido notificando a la aplicación cliente que la operación fue realizada con éxito.
    fs.unlink(nombre, (err, data) => {
        res.send(`Archivo ${nombre} eliminado con éxito`)
    })
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});