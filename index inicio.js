// Archivo para configurar Express

// Creamos el servidor Express sobre el cual vamos a tener nuestra aplicación
// const express = require('express'); // del paquete de Express instalado, importamos Express
// A esta sintaxis se le conoce como Common JS, que no es nativa de JavaScript; Express y NodeJS la adoptaron y luego adoptaron los Imports y Exports
// Esta expresión también puede ser escrita así:
import express from 'express';

// Creamos una INSTANCIA de Express, que es app y sólo puede haber una en todo el proyecto
const app = express(); // ejecutamos Express con una función asignada a la variable app

// Definir el puerto
const port =  process.env.PORT || 4000; // si no existe, que tome el 4000
// port es el puerto sobre el cual se quiere ejecutar el arranque; en desarrollo será el 4000, en el deployment será asignado a process.env.PORT

// Ejemplo de Hola Mundo
app.get('/', (request, response) => { // request es lo que yo envío, response es lo que Express responde
    response.send('¡Hola Mundo! En Inicio'); // .send() es un método para mostrar algo en pantalla
    /* response.json({ // .json() crea una respuesta tipo JSON
        id: 1
    });*/
    // response.render(); // .render() es un método par mostrar una vista; es el más utilizado
});

// Creamos una segunda página con su URL
app.get('/nosotros', (request, response) => { // request: lo que yo envío, response: lo que Express responde
    response.send('Nosotros'); // .send() es un método para mostrar algo en pantalla
});

// Creamos una tercer página con su URL
app.get('/contacto', (request, response) => { // request: lo que yo envío, response: lo que Express responde
    response.send('Contacto'); // .send() es un método para mostrar algo en pantalla
});


app.listen(port, () => { // arranca el servidor con el método .listen()
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
    // Si el servidor arranca correctamente, este callback nos lo va a decir
    // El console.log() se escribe en la terminal de MAC
});

// RESUMEN: al importar Express con el import, todos sus métodos están disponibles en la variable app
