
/**
 * Esta funcion dibuja una carta en la pagina
 * @param {HTMLElement} divCartas div HTML al que se van a agregar cartas
 * @param {String} carta carta a renderizar
 */
export const dibujarCarta = ( divCartas, carta ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );
}