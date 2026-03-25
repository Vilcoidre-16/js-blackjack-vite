import { pedirCarta, dibujarCarta, manejarPuntos, condicionVictoria} from './index.js';

/**
 * Esta función maneja todo el turno de la computadora pero es muy mejorable
 * @param {Array<String>} deck arreglo de cartas
 * @param {Number} puntosJugador puntaje a superar por la computadora
 * @param {HTMLElement} puntosHTML elemento HTML a actualizar
 * @param {HTMLElement} divCartasComputadora elemento HTML a agregar cartas
 */
export const turnoComputadora = ( deck, puntosJugador, puntosHTML, divCartasComputadora ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = manejarPuntos( puntosComputadora, puntosHTML, carta );
        dibujarCarta( divCartasComputadora, carta);

        if( puntosJugador > 21 ) {
            break;
        }

    } while(  ( puntosComputadora < puntosJugador )  && ( puntosJugador <= 21 ) );

    condicionVictoria( puntosComputadora, puntosJugador );
}
