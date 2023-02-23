import html from './app.html?raw';

/**
 * 
 * @param {String} elementeId 
 */
export const App = ( elementeId ) => {

    // Cuando la funcion app() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector( elementeId ).append( app );
    })();


}