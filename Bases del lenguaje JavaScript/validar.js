document.getElementById('Formulario').addEventListener('submit', function(event) {
    // Validación simple de ejemplo
    const campo = document.getElementById('name');
    if (!campo.value) {
        alert('El campo no puede estar vacío');
        event.preventDefault(); // Evita el envío
    }
    // Validación de longitud mínima
    if (campo.value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres');
        event.preventDefault(); // Evita el envío
    }
    // Aquí puedes agregar más validaciones según sea necesario
    // Validación de campos específicos
    const email = document.getElementById('email');
    if (!email.value.includes('@')) {
        alert('El correo electrónico debe contener un "@"');
        event.preventDefault(); // Evita el envío
    }   
    // Validación de formato de correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('El correo electrónico no es válido');
        event.preventDefault(); // Evita el envío
    }
    // Validación de formato de teléfono
    const telefono = document.getElementById('phone');
    if (!/^\d{9}$/.test(telefono.value)) {
        alert('El teléfono debe contener exactamente 9 dígitos');
        event.preventDefault(); // Evita el envío
    }
    // Validación de caracteres permitidos
    const mensaje = document.getElementById('message');
    if (mensaje.value.length > 500) {
        alert('El mensaje no puede exceder los 500 caracteres');
        event.preventDefault(); // Evita el envío
    }

       const mensajeMin = document.getElementById('message');
    if (mensaje.value.length < 5) {
        alert('El mensaje debe contener más de 5 caracteres');
        event.preventDefault(); // Evita el envío
    }
    
    // Llama a la función de validación
    // y evita el envío del formulario si no es válido
    // Validación de formulario
    if (!validar()) {
        event.preventDefault(); // Evita el envío si la validación falla
    };
});

function validar() {
    let valido = true;
    const mensaje = document.getElementById('mensaje').value.trim();
    const errorMensaje = document.getElementById('error-mensaje');
    errorMensaje.textContent = ""; // Limpia el mensaje anterior

    if (mensaje.length < 5) {
        errorMensaje.textContent = "Debe tener al menos 5 caracteres.";
        valido = false;
    }

    // ...otras validaciones para otros campos...

    return valido;
}

