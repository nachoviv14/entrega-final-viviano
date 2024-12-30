document.addEventListener("DOMContentLoaded", () => {
    const filters = {
        brand: new Set(),
        size: new Set(),
    };

    const filterInputs = document.querySelectorAll('.filter-input');
    const productCards = document.querySelectorAll('.product-card');

    
    filterInputs.forEach(input => {
        input.addEventListener('change', () => {
            const filterType = input.dataset.filter;
            const value = input.value.toUpperCase(); 

            if (input.checked) {
                filters[filterType].add(value);
            } else {
                filters[filterType].delete(value);
            }

            applyFilters();
        });
    });

    function applyFilters() {
        productCards.forEach(product => {
            const brand = product.querySelector("h4").textContent.trim().toUpperCase();
            const sizes = Array.from(product.querySelectorAll("select option")).map(opt => opt.value);

            const matchesBrand =
                filters.brand.size === 0 || filters.brand.has(brand);
            const matchesSize =
                filters.size.size === 0 || Array.from(filters.size).some(size => sizes.includes(size));

            // Mostrar el producto si cumple con las condiciones
            if (matchesBrand && matchesSize) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });


        const visibleProducts = Array.from(productCards).some(
            product => product.style.display !== "none"
        );

        if (!visibleProducts) {
            alert("No hay productos que coincidan con los filtros seleccionados.");
        }
    }
});

