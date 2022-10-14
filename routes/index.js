// Aquí colocaremos todo lo relacionado a las rutas
// Importamos Express:
import express from 'express';
// No puedo crear otra instancia de Express porque ya está creada en /index.js y es la variable app.
// Importamos la página de Inicio, Nosotros
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje 
} from '../controllers/paginasController.js';
// Importamos la función POST del testimonial
import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

// Definimos el Router:
const router = express.Router(); // con esto podemos utilizar la misma instancia de Express, que es app, y utilizaremos su router.


// Nos traemos las URLs del /index.js, las pegamos aquí y cambiamos app por router:
// Creamos una primera página con su URL
/* router.get('/', (request, response) => { // request es lo que yo envío, response es lo que Express responde
    // response.send('¡Hola Mundo! En Inicio'); // .send() es un método para mostrar algo en pantalla
    // .send() no requiere una vista, un archivo, pero .render() sí lo requiere: inicio.pug
    // response.render('inicio');

    // Le pasamos la variable a la página de inicio
    response.render('inicio', {
        pagina: 'Inicio JPL'
    });
});*/
router.get('/', paginaInicio);


// Creamos la página Nosotros con su URL
/* router.get('/nosotros', (request, response) => {
    // response.send('Nosotros'); // mostramos el mensaje en pantalla, no requiere una vista

    // Pasar una variable hacia la vista
    // const viajes = 'Viaje al Mictlán'; // esta es la variable
    // const resultado = 23456;
    // const nombre = 'Quetzalcóatl';

    response.render('nosotros', { // busca el archivo nosotros.pug porque .render() muestra una vista
        // Dentro de estas llaves se pone la información que se quiera mandar a la vista
        // textoViajes: viajes, // pasamos la variable
        // Si la variable se llama igual, podemos dejarlo así:
        // resultado,
        // nombre
        pagina: 'Nosotros JPL'
    });
});*/
router.get('/nosotros', paginaNosotros);

// Creamos una tercer página con su URL
/* router.get('/contacto', (request, response) => {
    response.send('Contacto');
}); */


// Creamos la página Viajes con su URL
/* router.get('/viajes', (request, response) => {
    response.render('viajes', {
        pagina: 'Viajes JPL' // variable
    });
});*/
router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);
// El :variable es un slug que permite sustituir la variable por un valor, en este caso, el del campo slug que tenemos en la BD; el nombre de la variable puede ser cualquiera: slug, viaje, id, etc.


// Creamos la página Testimoniales con su URL
/* router.get('/testimoniales', (request, response) => {
    response.render('testimoniales', {
        pagina: 'Testimoniales JPL' // variable
    });
});*/
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);
// Misma página pero diferentes funciones

// Exportamos el router para que otros archivos lo tomen
export default router;
