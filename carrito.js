
let cart = JSON.parse(localStorage.getItem('cart')) || [];


function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
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

        const productQuantity = document.createElement('p');
        productQuantity.textContent = `Cantidad: ${product.quantity}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove-button');
        removeButton.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };

        cartItem.append(productImg, productName, productPrice, productQuantity, removeButton);
        cartItemsContainer.appendChild(cartItem);

        total += product.price * product.quantity;
    });

    cartTotal.textContent = `Total: $${total}`;
}


function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}




renderCart();

document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío.');
        return;
    }
    window.location.href = "comprar.html"; 
});

