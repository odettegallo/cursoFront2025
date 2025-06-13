// function mostrarFecha() {
//     const fechain = Date();
//     const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const hora = { hour: '2-digit' };
//     const minuto = { minute: '2-digit' };
//     const segundo = { second: '2-digit' };
    
//     const fecha = new Date(fechain).toLocaleDateString('es-ES', opciones);
//     const horaActual = new Date().toLocaleTimeString('es-ES', hora);
//     const minutoActual = new Date().toLocaleTimeString('es-ES', minuto);
//     const segundoActual = new Date().toLocaleTimeString('es-ES', segundo);
    
//     return `Hoy es ${fecha} y son las ${horaActual}:${minutoActual} y ${segundoActual} segundos.`;
// }

function mostrarFecha() {
const fechain = Date(); 
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const hora = {hour: '2-digit'};
const hr = "horas";
const minuto = {minute: '2-digit'};
const min = "minutos";
const segundo = {second: '2-digit'};
const seg = "segundos";
const fecha = new Date(fechain).toLocaleDateString('es-ES', opciones, hora, hr, minuto, min, segundo, seg);
return fecha, `Hoy es ${fecha} y son las ${new Date().toLocaleTimeString('es-ES', hora)} ${hr}, ${new Date().toLocaleTimeString('es-ES', minuto)} ${min} con ${new Date().toLocaleTimeString('es-ES', segundo)} ${seg}.`;
}

console.log(mostrarFecha());

document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById("hora");
    if (div) {
        div.innerHTML = mostrarFecha();
    } else {
        console.error("El elemento con id 'fechaActual' no se encontró.");
    }
});
setInterval(() => {
    let div = document.getElementById("hora");
    if (div) {
        div.innerHTML = mostrarFecha();
    } else {
        console.error("El elemento con id 'fechaActual' no se encontró.");
    }
}, 1000); // Actualiza cada segundo
z
