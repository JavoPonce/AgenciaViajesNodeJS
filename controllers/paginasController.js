// Controlador para mostrar las diferentes páginas

// Importar Modelos
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

// Página de Inicio
const paginaInicio = async (request, response) => {
    // Consultar 3 viajes del modelo Viaje de la BD y 3 testimoniales del modelo Testimonial
    const promiseDB = []; //  en este arreglo meteremos las 2 consultas: a viajes y a testimoniales

    promiseDB.push(Viaje.findAll({limit: 3})); // consultamos la BD viajes
    promiseDB.push(Testimonial.findAll({limit: 3})); // consultamos la BD testimoniales

    try {
        // Consultamos la BD, primero viajes y luego testimoniales
        // const viajes = await Viaje.findAll({limit: 3}); // quiero solo 3 viajes
        // const testimoniales = await Testimonial.findAll({limit: 3}); // quiero solo 3 viajes

        // Hacemos que ambas consultas arranquen al mismo tiempo
        const resultado = await Promise.all(promiseDB);

        response.render('inicio', {
            pagina: 'Inicio JPL',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
}

// Página de Nosotros
const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

// Página de Viajes
const paginaViajes = async (request, response) => {
    // Consultar la BD
    const viajes = await Viaje.findAll(); // traemos todos los registros como un arreglo

    // console.log(viajes);

    response.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

// Página de Testimoniales
const paginaTestimoniales = async (request, response) => {
    // Consultar los testimoniales de la BD
    try {
        // Consultar el Modelo de testimoniales
        const testimoniales = await Testimonial.findAll(); // traemos todos los testimoniales
        // Todos los testimoniales están en la variable testimoniales; cada registro es un objeto y todos los objetos están dentro de un arreglo.
        // Mostrar la página testimoniales
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
}

// Mostrar un viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    // console.log(request.params);
    // console.log(request.params.slug);

    // Aplicamos destructuring
    const {slug} = request.params;

    try {
        const viaje = await Viaje.findOne( {where : {slug}} );
        response.render('viaje', { // la vista viaje es el archivo viaje.pug
            pagina: 'Información Viaje',
            viaje
        });
    } catch (error) {
        // console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
