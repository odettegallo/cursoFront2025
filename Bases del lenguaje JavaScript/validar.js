function validar() {
    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("phone").value;
    const mensaje = document.getElementById("menssage").value;

    if (nombre === "" || email === "" || telefono === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
        alert("El nombre solo debe contener letras y espacios.");
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

    return true;
}
// Asignar el evento de envío del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    if (!validar()) {
        event.preventDefault(); // Evita el envío del formulario si la validación falla
    }
});