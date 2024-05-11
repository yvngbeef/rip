// Obtener la pantalla 4 y el contador
const pantalla4 = document.getElementById('pantalla4');
const contador = document.getElementById('contador');
document.getElementById('botonContinuar').addEventListener('click', function() {
  const cancion = new Audio('love.mp3');
  cancion.play();
  mostrarPantalla('pantalla2');
});


// Obtener la fecha y hora actual
const fechaInicio = new Date();

// Función para actualizar el contador
function actualizarContador() {
  // Obtener la fecha y hora actual
  const fechaActual = new Date();

  // Calcular la diferencia entre la fecha actual y la fecha de inicio en segundos
  const diferenciaSegundos = Math.floor((fechaActual - fechaInicio) / 1000);

  // Mostrar el contador en segundos
  contador.textContent = `${diferenciaSegundos} segundos`;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Función para mostrar la siguiente pantalla
function mostrarPantalla(idPantalla) {
  // Ocultar todas las pantallas
  const pantallas = document.querySelectorAll('.pantalla');
  pantallas.forEach(pantalla => {
    pantalla.style.display = 'none';
  });

  // Mostrar la pantalla deseada
  const pantallaMostrar = document.getElementById(idPantalla);
  pantallaMostrar.style.display = 'block';
}

// Texto a mostrar en cada pantalla
const textos = [
  "Buenas noches usuario, o mas bien tendria que decir Tamika Isidora Luna",
  "Eres la unica chica con la cual puedo ser yo mismo y me lo paso genial jugando contigo, hablando contigo, haciendo tonterias contigo, no sabes que feliz me pongo al ver que me llega una notificacion tuya, amo todo de ti, tus ojitos lindos, tu vocecita dulce, tus labios tan besables, tu pelito de rapunzel, y ya no te digo tu personalidad, es que eres la chica de mis sueños de verdad te amo muchisimo (pondria mas cosas bonitas pero me da penita 🥺😭",
  "Se que te estabas muriendo de intriga para que te lo dijera, los dos lo sabes asi que... Te gustaria ser mi novia tisi?",
];

let indiceTexto = 0; // Índice del texto actual
let indiceCaracter = 0; // Índice del carácter actual
const velocidadEscritura = 50; // Velocidad de escritura en milisegundos

function escribirTexto() {
  const textoActual = textos[indiceTexto];
  if (indiceCaracter < textoActual.length) {
    // Agregar el siguiente carácter al texto visible en cada pantalla
    const h1s = document.querySelectorAll('.pantalla h1');
    h1s[indiceTexto].innerHTML += textoActual.charAt(indiceCaracter);
    indiceCaracter++;
    // Llamar recursivamente a la función escribirTexto después de un breve retardo
    setTimeout(escribirTexto, velocidadEscritura);
  } else {
    // Reiniciar el índice del carácter y pasar al siguiente texto
    indiceCaracter = 0;
    indiceTexto++;
    if (indiceTexto < textos.length) {
      setTimeout(escribirTexto, velocidadEscritura * 16); // Aumentamos el retardo entre textos
    }
  }
}

// Llamar a la función para iniciar el efecto de typewriter
escribirTexto();
