// Archivo para configurar Express
// Cada línea de código es un Middleware

// Creamos el servidor Express sobre el cual vamos a tener nuestra aplicación
// const express = require('express'); // del paquete de Express instalado, importamos Express
// A esta sintaxis se le conoce como Common JS, que no es nativa de JavaScript; Express y NodeJS la adoptaron y luego adoptaron los Imports y Exports
// Esta expresión también puede ser escrita así:
import express from 'express';
// import res from 'express/lib/response.js';
// Importamos el ruter de su archivo:
import router from './routes/index.js'; // hay que colocar la extensión
// Importamos la configuración de la BD
import db from './config/db.js';

// Importamos la variable de entorno (se hace aquí o en el archivo /config/db.js)
// import dotenv from 'dotenv';
// dotenv.config();
// Otra forma de importar la variable de entorno es:
// import dotenv from 'dotenv/config';
// console.log(process.env.DB_HOST); // muestra el 127.0.0.1 en la terminal al re-arrancar el servidor


// Creamos una INSTANCIA de Express, que es app y sólo puede haber una en todo el proyecto
const app = express(); // ejecutamos Express con una función asignada a la variable app

// Conectar la BD
db.authenticate()
    .then(() => console.log('¡Base de Datos conectada! Dont worry anymore my dear...'))
    .catch(error => console.log(error));

// Definir el puerto
const port =  process.env.PORT || 4000; // si no existe, que tome el 4000
// port es el puerto sobre el cual se quiere ejecutar el arranque; en desarrollo será el 4000, en el deployment será asignado a process.env.PORT

// Habilitar PUG (esta es una línea de Middleware)
app.set('view engine', 'pug'); // queremos utilizar el view engine de pug (view engine es soportado por Express)

// Obtener el año actual
app.use((request, response, next) => {
    // console.log(response);
    // response.locals.unaVariable = 'Una nueva variable';
    // console.log(response.locals);

    // Creamos la variable del año actual
    const year = new Date();
    response.locals.actualYear = year.getFullYear(); // obtener el año actual

    // Creamos otra variable
    response.locals.nombreSitio = "Agencia de Viajes";

    next(); // para que pase al siguiente middleware; puede ponerse return next();
});

// Nos llevamos las URLs al archivo /routes/index.js

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta Pública (esta es una línea de Middleware)
app.use(express.static('public'));

// Agregamos el router, que contiene las URLs que quitamos de aquí: (esta es una línea de Middleware)
app.use('/', router);

// Esta es una línea de Middleware
app.listen(port, () => { // arranca el servidor con el método .listen()
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
    // Si el servidor arranca correctamente, este callback nos lo va a decir
    // Este console.log() se escribe en la terminal de MAC
});

// RESUMEN: al importar Express con el import, todos sus métodos están disponibles en la variable app
