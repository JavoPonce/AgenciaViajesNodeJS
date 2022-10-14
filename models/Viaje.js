import Sequelize from 'sequelize'; // importamos Sequelize
import db from '../config/db.js'; // importamos la conexión a la BD

// Definimos el Modelo
export const Viaje = db.define('viajes', { // viajes es el nombre de la tabla de la BD
    // Objeto de configuración: cada campo de la tabla; el campo id se da por sentado que existe
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
});
