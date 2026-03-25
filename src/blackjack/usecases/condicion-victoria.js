
/**
 * Esta funcion evalua quien gano
 * @param {Number} puntosComputadora 
 * @param {Number} puntosJugador 
 */
export const condicionVictoria = ( puntosComputadora, puntosJugador) => {

    setTimeout(() => {
        if( puntosComputadora === puntosJugador ) {
            alert('Nadie gana :(');
        } else if ( puntosJugador > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );

}