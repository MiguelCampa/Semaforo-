// Luces
const luzRojo = document.getElementById("rojo");
const luzAmarillo = document.getElementById("amarillo");
const luzVerde = document.getElementById("verde");

// Botones
const btnAutomatico = document.getElementById("btnAutomatico");
const btnRojo = document.getElementById("btnRojo");
const btnAmarillo = document.getElementById("btnAmarillo");
const btnVerde = document.getElementById("btnVerde");
const btnApagar = document.getElementById("btnApagar");
const btnReiniciar = document.getElementById("btnReiniciar");


const contadorRojo = document.getElementById("contadorRojo");
const contadorAmarillo = document.getElementById("contadorAmarillo");
const contadorVerde = document.getElementById("contadorVerde");

// Contadores de veces
let conteoRojo = 0;
let conteoAmarillo = 0;
let conteoVerde = 0;

// Variables para el modo automatico
let temporizador = null;
let paso = 0; // 0 = verde, 1 = amarillo, 2 = rojo

// Funcion para apagar las luces
function apagarLuces() {
    // Apaga por clase
    luzRojo.classList.remove("encendida");
    luzAmarillo.classList.remove("encendida");
    luzVerde.classList.remove("encendida");

    // Apaga por opacidad 
    luzRojo.style.opacity = "0.5";
    luzAmarillo.style.opacity = "0.5";
    luzVerde.style.opacity = "0.5";

}

// Iniciar con las luces apagadas
apagarLuces();

// Detener el modo automático si está corriendo
function detenerAutomatico() {
    if (temporizador !== null) {
        clearInterval(temporizador);
        temporizador = null;
        btnAutomatico.textContent = "Modo automático: OFF";
    }
}

// Modo manual

btnRojo.addEventListener("click", function() {
    detenerAutomatico();
    apagarLuces();

    luzRojo.classList.add("encendida");
    luzRojo.style.opacity = "1";

    conteoRojo = conteoRojo + 1;
    contadorRojo.textContent = conteoRojo + " veces";
});

btnAmarillo.addEventListener("click", function() {
    detenerAutomatico();
    apagarLuces();

    luzAmarillo.classList.add("encendida");
    luzAmarillo.style.opacity = "1";

    conteoAmarillo = conteoAmarillo + 1;
    contadorAmarillo.textContent = conteoAmarillo + " veces";
});

btnVerde.addEventListener("click", function() {
    detenerAutomatico();
    apagarLuces();

    luzVerde.classList.add("encendida");
    luzVerde.style.opacity = "1";

    conteoVerde = conteoVerde + 1;
    contadorVerde.textContent = conteoVerde + " veces";
});

btnApagar.addEventListener("click", function() {
    detenerAutomatico();
    apagarLuces();
});



// Reiniciar contadores
btnReiniciar.addEventListener("click", function() {

    conteoRojo = 0;
    conteoAmarillo = 0;
    conteoVerde = 0;

    contadorRojo.textContent = "0 veces";
    contadorAmarillo.textContent = "0 veces";
    contadorVerde.textContent = "0 veces";

}); 


// Modo automatico (Verde -> Amarillo -> Rojo)

btnAutomatico.addEventListener("click", function() {
    if (temporizador !== null) {
        detenerAutomatico();
    } else {
        btnAutomatico.textContent = "Modo automático: ON";

        function cambiarColorAuto() {
            apagarLuces();

            if (paso === 0) {
                luzVerde.classList.add("encendida");
                luzVerde.style.opacity = "1";
                conteoVerde = conteoVerde + 1;
                contadorVerde.textContent = conteoVerde + " veces";
                paso = 1;
            } else if (paso === 1) {
                luzAmarillo.classList.add("encendida");
                luzAmarillo.style.opacity = "1";
                conteoAmarillo = conteoAmarillo + 1;
                contadorAmarillo.textContent = conteoAmarillo + " veces";
                paso = 2;
            } else {
                luzRojo.classList.add("encendida");
                luzRojo.style.opacity = "1";
                conteoRojo = conteoRojo + 1;
                contadorRojo.textContent = conteoRojo + " veces";
                paso = 0;
            }
        }

        cambiarColorAuto();
        temporizador = setInterval(cambiarColorAuto, 2000);
    }
});