// JS para el contador de la boda

// Fecha de la boda
const weddingDate =  new Date("October 18, 2024 18:00:00").getTime();
var timerElement = document.getElementById("timer");
var timerDiasElement = document.getElementById("timerdias");
var timerHorasElement = document.getElementById("timerhoras");
var timerMinutosElement = document.getElementById("timerminutos");
var timerSegundosElement = document.getElementById("timersegundos");

// Actualiza el contador cada segundo
var countDown = setInterval(function() {
    var now = new Date().getTime();

    var distance = weddingDate - now;

    // Calcular días, horas, minitos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);

    if (timerElement == null)
    {
        timerElement = document.getElementById("timer");
        timerDiasElement = document.getElementById("timerdias");
        timerHorasElement = document.getElementById("timerhoras");
        timerMinutosElement = document.getElementById("timerminutos");
        timerSegundosElement = document.getElementById("timersegundos");
        return;
    }
    timerDiasElement.innerHTML = "  " + days + "d ";
    timerHorasElement.innerHTML = hours + "h";
    timerMinutosElement.innerHTML = minutes + "m";
    timerSegundosElement.innerHTML = seconds + "s";

    // timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0 )
    {
        clearInterval(countDown);
        timerElement.innerHTML = "¡La boda ha comenzado!";
    }
}, 1000);