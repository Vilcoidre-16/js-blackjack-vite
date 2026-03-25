import { valorCarta } from './valor-carta.js'

/**
 * Esta función maneja los puntos de los jugadores
 * @param {Number} puntosEntidad puntaje a manejar
 * @param {HTMLElement} puntosHTML puntaje HTML a actualizar
 * @param {String} carta valor a agregar al puntaje
 * @returns {Number} retorna los puntos actualizados
 */
export const manejarPuntos = ( puntosEntidad, puntosHTML, carta ) => {

    puntosEntidad = puntosEntidad + valorCarta( carta );
    puntosHTML.innerText = puntosEntidad;

    return puntosEntidad;
}