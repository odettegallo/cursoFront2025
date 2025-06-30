function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.getElementById('carrito-body');
    tbody.innerHTML = '';
    let total = 0;

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
                <td>$${item.precio.toLocaleString()}</td>
                <td>$${subtotal.toLocaleString()}</td>
                <td><button class="btn btn-danger btn-sm eliminar-btn" data-idx="${idx}">Eliminar</button></td>
            </tr>
        `;
    });

    document.getElementById('totalCarro').textContent = '$' + total.toLocaleString();

    // Eliminar producto
    document.querySelectorAll('.eliminar-btn').forEach(btn => {
        btn.onclick = function() {
            carrito.splice(this.dataset.idx, 1);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    });

    // Cambiar cantidad
    document.querySelectorAll('.cantidad-input').forEach(input => {
        input.onchange = function() {
            const idx = this.dataset.idx;
            carrito[idx].cantidad = parseInt(this.value);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
        }
    });
}

document.addEventListener('DOMContentLoaded', mostrarCarrito);