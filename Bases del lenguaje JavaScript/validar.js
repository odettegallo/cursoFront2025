document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    form.addEventListener("submit", function(event) {
        const errorNombre = document.getElementById("errorName");
        const errorEmail = document.getElementById("errorEmail");
        const errorTelefono = document.getElementById("errorPhone");
        const errorMensaje = document.getElementById("errorMessage");
        // Limpiar mensajes de error previos
        errorNombre.textContent = "El nombre debe contener mínimo 3 letras y espacios.";
        errorEmail.textContent = "El email debe ser válido.";
        errorTelefono.textContent = "El teléfono debe contener 9 dígitos.";
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
        // Validar el formulario

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
        return false;
    }
    if (nombre.length < 3) {
        // alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        // alert("Por favor, introduce un correo electrónico válido.");
        return false;
    }

    if (!/^\d{9}$/.test(telefono)) {
        // alert("El teléfono debe contener 9 dígitos.");
        return false;
    }

    if (mensaje.length < 10) {
        // alert("El mensaje debe tener al menos 10 caracteres.");
        return false;
    }

    return true;
}