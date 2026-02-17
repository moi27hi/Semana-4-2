// Referencias a los elementos
const inputProducto = document.getElementById('producto');
const inputCantidad = document.getElementById('cantidad');
const botonAgregar = document.getElementById('btnAgregar');
const listaUl = document.getElementById('lista-compras');

// Función para agregar el producto a la lista
botonAgregar.addEventListener('click', function() {
    const nombre = inputProducto.value;
    const cantidad = inputCantidad.value;

    // Validación básica
    if (nombre === "" || cantidad === "") {
        alert("Por favor, llene ambos campos.");
        return;
    }

    // Crear el elemento LI
    const nuevoItem = document.createElement('li');

    // Asignar el contenido
    nuevoItem.innerHTML = `
        <span>${nombre}</span>
        <span class="cantidad-badge">${cantidad}</span>
    `;

    // Agregar a la lista
    listaUl.appendChild(nuevoItem);

    // Limpiar campos
    inputProducto.value = "";
    inputCantidad.value = "";
    inputProducto.focus();
});
