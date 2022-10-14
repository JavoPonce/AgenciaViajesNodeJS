// CONTROLADOR DE TESTIMONIALES
import {Testimonial} from '../models/Testimoniales.js'; // importamos el Modelo de testimoniales

// Definir la función para el método POST del formulario de Testimoniales
const guardarTestimonial = async (request, response) => {

    const {nombre, correo, mensaje} = request.body;
    const errores = [];

    // Validar el formulario
    if(nombre.trim() === '') {
        // console.log('El Nombre está vacío');
        errores.push({mensaje: 'El Nombre está vacío'});
    }
    if(correo.trim() === '') {
        // console.log('El Correo está vacío');
        errores.push({mensaje: 'El Correo está vacío'});
    }
    if(mensaje.trim() === '') {
        // console.log('El Mensaje está vacío');
        errores.push({mensaje: 'El Mensaje está vacío'});
    }
    // console.log(errores);
    // console.log(request.body); // body es lo que el usuario coloque en el formulario

    if(errores.length > 0 ) { // al menos hay un error
        // Consultar los testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // Mostrar la vista con errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Guardar los datos en la BD
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            response.redirect('/testimoniales');
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}
