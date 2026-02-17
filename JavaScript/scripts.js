// Seleccionamos los elementos necesarios
const imagenGrande = document.getElementById('visor-principal');
const todasLasMiniaturas = document.querySelectorAll('.miniatura');

// Recorremos cada miniatura para asignarle el evento de clic
todasLasMiniaturas.forEach(foto => {
    foto.addEventListener('click', function() {
        // Obtenemos la URL de la miniatura
        let urlOriginal = this.src;

        // Reemplazamos las dimensiones pequeñas (120/80) por las grandes (600/400)
        // Esto evita que la imagen se vea borrosa al estirarse
        let nuevaUrl = urlOriginal.replace('/120/80', '/600/400');

        // Cambiamos la fuente del visor principal
        imagenGrande.src = nuevaUrl;

        console.log("Cambiando a alta resolución: " + nuevaUrl);
    });
});
