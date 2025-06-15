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
        alert("El nombre solo debe contener letras y espacios.");
        return false;
    }
    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    if (!/^\d{10}$/.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        return false;
    }

    if (mensaje.length < 10) {
        alert("El mensaje debe tener al menos 10 caracteres.");
        return false;
    }

    return true;
}