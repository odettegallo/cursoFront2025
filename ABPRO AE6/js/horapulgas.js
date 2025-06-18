

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", function(event) {
        
        if (!validar()) {
            event.preventDefault(); // Evita el envío del formulario si la validación falla
        }
    });
});

function validar() {


    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("phone").value;
    const mensaje = document.getElementById("message").value;


    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        // alert("El nombre solo debe contener letras y espacios.");
        document.getElementById("errorName").textContent = "El nombre solo debe contener letras y espacios.";   
        return false;
    }

    if (nombre.length < 2) {
        // alert("El nombre debe tener al menos 3 caracteres.");
        document.getElementById("errorName").textContent = "El nombre debe tener al menos 2 caracteres.";
        return false;
    } else {
        document.getElementById("errorName").textContent = "";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        // alert("Por favor, introduce un correo electrónico válido.");
        document.getElementById("errorEmail").textContent = "Por favor, introduce un correo electrónico válido.";
        return false;
    } else {
        document.getElementById("errorEmail").textContent = "";
    }

    if (!/^\d{9}$/.test(telefono)) {
        // alert("El teléfono debe contener 9 dígitos.");
        document.getElementById("errorPhone").textContent = "El teléfono debe contener 9 dígitos.";
        return false;
    } else {
        document.getElementById("errorPhone").textContent = "";
    }

    if (mensaje.length < 10) {
        // alert("El mensaje debe tener al menos 10 caracteres.");
        document.getElementById("errorMessage").textContent = "El mensaje debe tener al menos 10 caracteres.";
        return false;
    } else {
        document.getElementById("errorMessage").textContent = "";
    }

    return true;



}


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
