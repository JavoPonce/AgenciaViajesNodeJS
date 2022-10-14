import Sequelize from 'sequelize'; // importamos Sequelize
import db from '../config/db.js'; // importamos la conexión a la BD

// Definimos el Modelo
export const Testimonial = db.define('testimoniales', { // testimoniales es el nombre de la tabla de la BD
    // Objeto de configuración: cada campo de la tabla; el campo id se da por sentado que existe
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});
