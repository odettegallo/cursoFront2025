// main.js

// 1. Array del carrito para almacenar los productos
let carrito = [];

// Función para guardar el carrito en localStorage
function guardarCarro() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para cargar el carrito desde localStorage
function cargarCarro() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Función para actualizar el total y mostrarlo en el HTML
function actualizarTotal() {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    const totalElement = document.getElementById('totalCarro');
    if (totalElement) {
        totalElement.textContent = `$${total.toLocaleString('es-CL')}`; // Formato de moneda chilena
    }
}

// 2. Función para agregar un producto al carrito
function agregarCarro(nombreProducto, precioProducto, imagenProducto) {
    // Comprobar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombreProducto);

    if (productoExistente) {
        // Si el producto ya existe, solo incrementa la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no existe, añádelo con cantidad 1
        carrito.push({
            nombre: nombreProducto,
            precio: precioProducto,
            img: imagenProducto,
            cantidad: 1
        });
    }
    guardarCarro(); // Guarda el carrito después de añadir/actualizar
    mostrarCarrito(); // Vuelve a renderizar el carrito (si estás en la página del carrito)
    // Opcional: Mostrar una notificación al usuario (por ejemplo, un toast o alert)
    alert(`"${nombreProducto}" añadido al carro!`);
}

// 3. Función para mostrar el contenido del carrito en la tabla (ya la tienes, pero la completamos)
function mostrarCarrito() {
    cargarCarro(); // Asegúrate de cargar el carrito al inicio de la función
    const tbody = document.getElementById('carrito-body');
    if (!tbody) return; // Si no estamos en la página del carrito, no hacemos nada

    tbody.innerHTML = ''; // Limpiar el contenido actual de la tabla
    let total = 0;

    if (carrito.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">Tu carro está vacío.</td>
            </tr>
        `;
    } else {
        carrito.forEach((item, idx) => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;
            tbody.innerHTML += `
                <tr>
                    <td><img src="${item.img}" alt="${item.nombre}" style="width:60px;height:60px;object-fit:cover;"></td>
                    <td>${item.nombre}</td>
                    <td>
                        <input type="number" min="1" value="${item.cantidad}" data-idx="${idx}" class="form-control cantidad-input" style="width:70px;">
                    </td>
                    <td>$${item.precio.toLocaleString('es-CL')}</td>
                    <td>$${subtotal.toLocaleString('es-CL')}</td>
                    <td><button class="btn btn-danger btn-sm eliminar-btn" data-idx="${idx}">Eliminar</button></td>
                </tr>
            `;
        });
    }
    actualizarTotal(); // Actualiza el total después de renderizar el carrito
    agregarManejadoresEventosCarrito(); // Añadir eventos después de que los elementos se han creado
}

// 4. Función para eliminar un producto del carrito
function eliminarDelCarro(idx) {
    carrito.splice(idx, 1); // Elimina 1 elemento desde el índice `idx`
    guardarCarro(); // Guarda los cambios
    mostrarCarrito(); // Vuelve a renderizar
}

// 5. Función para actualizar la cantidad de un producto
function actualizarCantidad(idx, nuevaCantidad) {
    if (nuevaCantidad < 1) nuevaCantidad = 1; // Asegura que la cantidad no sea menor que 1
    carrito[idx].cantidad = parseInt(nuevaCantidad); // Actualiza la cantidad
    guardarCarro(); // Guarda los cambios
    mostrarCarrito(); // Vuelve a renderizar para que los subtotales y el total se actualicen
}

// 6. Manejadores de eventos para los botones "Añadir al Carro" en index.html
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el carrito al inicio, en cualquier página
    cargarCarro(); 

    // Añadir eventos a los botones "Añadir al Carro" en index.html
    const botonesAddCart = document.querySelectorAll('.add-to-cart');
    botonesAddCart.forEach(button => {
        // Asegúrate de que no haya un onclick="" hardcodeado en el HTML que se duplique
        // Por ejemplo, el primer botón tiene onclick="agregarCarro(...)"
        // Si usas addEventListener, es mejor quitar el onclick="" del HTML
        button.addEventListener('click', (event) => {
            const nombre = event.target.dataset.product;
            const precio = parseFloat(event.target.dataset.price); // Asegúrate de que sea un número
            // Obtener la URL de la imagen. Asumiendo que la imagen es el hermano anterior o dentro del mismo slide.
            const imgElement = event.target.closest('.f-carousel__slide').querySelector('img');
            const img = imgElement ? imgElement.src : ''; // Obtener el src de la imagen

            agregarCarro(nombre, precio, img);
        });
    });

    // Solo si estamos en la página del carrito, mostramos su contenido y adjuntamos más manejadores
    if (document.getElementById('carrito-body')) {
        mostrarCarrito();
    }
});

// 7. Manejadores de eventos para los botones y inputs dentro de la tabla del carrito (en carrito.html)
// Es importante re-adjuntar estos eventos cada vez que el carrito se renderiza,
// ya que innerHTML = '' elimina los elementos y sus eventos.
function agregarManejadoresEventosCarrito() {
    const tbody = document.getElementById('carrito-body');
    if (!tbody) return;

    // Eventos para eliminar productos
    tbody.querySelectorAll('.eliminar-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const idx = parseInt(event.target.dataset.idx);
            eliminarDelCarro(idx);
        });
    });

    // Eventos para actualizar cantidad
    tbody.querySelectorAll('.cantidad-input').forEach(input => {
        input.addEventListener('change', (event) => {
            const idx = parseInt(event.target.dataset.idx);
            const nuevaCantidad = parseInt(event.target.value);
            actualizarCantidad(idx, nuevaCantidad);
        });
    });
}

// function mostrarCarrito() {
//     const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//     const tbody = document.getElementById('carrito-body');
//     tbody.innerHTML = '';
//     let total = 0;

//     carrito.forEach((item, idx) => {
//         const subtotal = item.precio * item.cantidad;
//         total += subtotal;
//         tbody.innerHTML += `
//             <tr>
//                 <td><img src="${item.img}" alt="${item.nombre}" style="width:60px;height:60px;object-fit:cover;"></td>
//                 <td>${item.nombre}</td>
//                 <td>
//                     <input type="number" min="1" value="${item.cantidad}" data-idx="${idx}" class="form-control cantidad-input" style="width:70px;">
//                 </td>
//                 <td>$${item.precio.toLocaleString()}</td>
//                 <td>$${subtotal.toLocaleString()}</td>
//                 <td><button class="btn btn-danger btn-sm eliminar-btn" data-idx="${idx}">Eliminar</button></td>
//             </tr>
//         `;
//     });

//     document.getElementById('totalCarro').textContent = '$' + total.toLocaleString();

//     // Eliminar producto
//     document.querySelectorAll('.eliminar-btn').forEach(btn => {
//         btn.onclick = function() {
//             carrito.splice(this.dataset.idx, 1);
//             localStorage.setItem('carrito', JSON.stringify(carrito));
//             mostrarCarrito();
//         }
//     });

//     // Cambiar cantidad
//     document.querySelectorAll('.cantidad-input').forEach(input => {
//         input.onchange = function() {
//             const idx = this.dataset.idx;
//             carrito[idx].cantidad = parseInt(this.value);
//             localStorage.setItem('carrito', JSON.stringify(carrito));
//             mostrarCarrito();
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', mostrarCarrito);