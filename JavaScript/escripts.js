
/* Elaborar un programa utilizando js que contendra lo siguiente: 
Un circulo rojo, un circulo amarillo y un circulo verde. 
 Al pasar el Mouse sobre un circulo resaltara y los demas permaneceran oscuros*/ 


 /* En una pagina colocar una imagen al centro y debajo de ella tres miniaturas de otras imagenes, 
 al hacerle click a una miniatura se reemplazara la imagen del centro, ademas que al pasar el mouse 
 sobre la miniatura se debe opaca*/ 

 /*3.  Una Señora quiere hacer sus compras en el super, entonces empieza a anotar lo que va a ir comprando con el nombre
 y la cantidad de cosas dentro de la pagina Web, esta pagina web va mostrando cada nuevo elemento que la señora agrega para su compra 
 y le muestra tambien la cantidad que lleva, esto se va actualizando a medida que la señora ingresa más cosas que debe comprar, 
 Realizar una pagina web que simule este comportamiento */ 

/* 4. 
Elaborar un panel de registro de productos a un inventario, dicho inventario debe contener lo siguiente.

Un input para el ID del producto con un formato. 
Un input numérico para la cantidad.
Un select con categorias. 
Un botón de registrar. 
Una tabla donde se muestran los productos. 

El botón registrar se deshabilita sino se cumplen 3 condiciones simultaneas:

El ID tiene exactamente 8 caracteres y empieza con una letra. 
La primera cantidad es mayor a 0
No se ha seleccionado una categoría. 

*/
// Seleccionamos todos los elementos con la clase 'circulo'
const circulos = document.querySelectorAll('.circulo');

circulos.forEach(circuloSeleccionado => {
    
    // Evento cuando el mouse entra al círculo
    circuloSeleccionado.addEventListener('mouseenter', () => {
        circulos.forEach(c => {
            // Si NO es el círculo que estamos tocando, le ponemos la clase oscuro
            if (c !== circuloSeleccionado) {
                c.classList.add('oscuro');
            }
        });
    });

    // Evento cuando el mouse sale del círculo
    circuloSeleccionado.addEventListener('mouseleave', () => {
        // Quitamos la clase oscuro a todos para volver al estado inicial
        circulos.forEach(c => c.classList.remove('oscuro'));
    });
});

 