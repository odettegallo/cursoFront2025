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

// Código comentado para validación en tiempo real
// Descomentar el siguiente código si se desea validar en tiempo real


// const nombreInput = document.getElementById("name");
// nombreInput.addEventListener("input", function() {
//     const errorNombre = document.getElementById("errorName");
//     if (this.value.length < 2 || !/^[a-zA-Z\s]+$/.test(this.value)) {
//         errorNombre.textContent = "El nombre debe contener mínimo 2 letras.";
//     } else {
//         errorNombre.textContent = "";
//     }
// });

// const emailInput = document.getElementById("email");
// emailInput.addEventListener("input", function() {
//     const errorEmail = document.getElementById("errorEmail");
//     if (!/^\S+@\S+\.\S+$/.test(this.value)) {
//         errorEmail.textContent = "El email debe ser válido.";
//     } else {
//         errorEmail.textContent = "";
//     }

// });

// const telefonoInput = document.getElementById("phone");
// telefonoInput.addEventListener("input", function() {
//     const errorTelefono = document.getElementById("errorPhone");
//     if (!/^\d{9}$/.test(this.value)) {
//         errorTelefono.textContent = "El teléfono debe contener 9 dígitos.";
//     } else {
//         errorTelefono.textContent = "";
//     }

// });

// const mensajeInput = document.getElementById("message");
// mensajeInput.addEventListener("input", function() {
//     const errorMensaje = document.getElementById("errorMessage");
//     if (this.value.length < 10) {
//         errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
//     } else {
//         errorMensaje.textContent = "";
//     }
// });

        // const errorNombre = document.getElementById("errorName");
        // const errorEmail = document.getElementById("errorEmail");
        // const errorTelefono = document.getElementById("errorPhone");
        // const errorMensaje = document.getElementById("errorMessage");
        // // Limpiar mensajes de error previos
        // errorNombre.textContent = "El nombre debe contener mínimo 3 letras.";
        // errorEmail.textContent = "El email debe ser válido.";
        // errorTelefono.textContent = "El teléfono debe contener 9 dígitos.";
        // errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";

    


