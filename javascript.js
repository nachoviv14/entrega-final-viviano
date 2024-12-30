let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.onload = () => {
    updateCart();
};

function addToCart(product) {
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const productImg = document.createElement('img');
        productImg.src = product.img;
        productImg.alt = product.name;

        const productName = document.createElement('h4');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = '-';
        decreaseBtn.onclick = () => {
            if (product.quantity > 1) {
                product.quantity--;
            } else {
                cart.splice(index, 1);
            }
            updateCart();
        };

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = product.quantity;

        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = '+';
        increaseBtn.onclick = () => {
            product.quantity++;
            updateCart();
        };

        quantityControls.append(decreaseBtn, quantityDisplay, increaseBtn);

        cartItem.append(productImg, productName, productPrice, quantityControls);
        cartItems.appendChild(cartItem);

        total += product.price * product.quantity;
    });

    cartTotal.textContent = `Total: $${total}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    localStorage.setItem('cart', JSON.stringify(cart));
}

function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
}

document.querySelectorAll('.btn-add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const talleSelect = productCard.querySelector('.talle-select');
        const selectedTalle = talleSelect ? talleSelect.value : null;

        if (!selectedTalle) {
            alert('Por favor selecciona un talle antes de agregar al carrito.');
            return;
        }

        const product = {
            name: productCard.querySelector('h4').textContent,
            price: Number(productCard.querySelector('p').textContent.replace(/[^0-9.-]+/g, '')),
            img: productCard.querySelector('img').src,
            talle: selectedTalle,
        };

        addToCart(product);
    });
});

function goToCart() {
    window.location.href = "carrito.html"; 
}


function toggleMenu() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}


function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
}


function goToCart() {
    window.location.href = './carrito.html';
}

document.addEventListener("DOMContentLoaded", () => {
    
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    
    let currentIndex = 0; 
    const totalSlides = slides.length;

    
    function showSlide(index) {
        
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1; 
        } else {
            currentIndex = index;
        }

        
        const offset = -currentIndex * 100; 
        carousel.style.transform = `translateX(${offset}%)`;
    }

    
    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1); 
    });

    prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1); 
    });

    
    setInterval(() => {
        showSlide(currentIndex + 1); 
    }, 5000);
});



