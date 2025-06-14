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

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    if (!/^\d{10}$/.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        return false;
    }

    return true;
}

// Supón que tu formulario tiene el id "miFormulario"
document.getElementById('miFormulario').addEventListener('submit', function(event) {
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
    if (!email.value.includes('@','.com','.cl','.org','.net','.edu','.gov','.info','.biz','.io','.co','.me','.tv','.xyz','.app','.dev','.tech','.ai','.cloud','.shop','.store','.online','.site','.space','.blog','.design')) {
        alert('El correo electrónico debe contener un "@"');
        event.preventDefault(); // Evita el envío
    }   
    // Validación de formato de teléfono
    const telefono = document.getElementById('phone');
    if (!/^\d{10}$/.test(telefono.value)) {
        alert('El teléfono debe contener exactamente 10 dígitos');
        event.preventDefault(); // Evita el envío
    }
    // Validación de caracteres permitidos
    const mensaje = document.getElementById('message');
    if (mensaje.value.length > 500) {
        alert('El mensaje no puede exceder los 500 caracteres');
        event.preventDefault(); // Evita el envío
    }

    
    // Llama a la función de validación
    // y evita el envío del formulario si no es válido
    // Validación de formulario
    if (!validar()) {
        event.preventDefault(); // Evita el envío si la validación falla
    }
});

