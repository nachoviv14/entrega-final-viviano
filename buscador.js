// Capturar elementos del DOM
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');
const productCards = document.querySelectorAll('.product-card');

// Función para filtrar productos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
        const productName = card.querySelector('h4').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = ''; // Mostrar el producto
        } else {
            card.style.display = 'none'; // Ocultar el producto
        }
    });
}

// Escuchar el evento "input" para búsqueda en tiempo real
searchInput.addEventListener('input', filterProducts);

// Escuchar el clic en el botón "Buscar"
searchButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del botón
    filterProducts(); // Llamar la función de filtrado
});
