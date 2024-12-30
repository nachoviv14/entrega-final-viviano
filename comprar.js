
let cart = JSON.parse(localStorage.getItem('cart')) || [];


const dolarRate = 1135;


const totalPriceElement = document.getElementById('total-price');
const arsTotalElement = document.getElementById('ars-amount');
const shippingInfo = document.getElementById('shipping-info');
const shippingMethod = document.getElementById('shipping-method');


function calculateTotal(shippingCost = 0) {
    
    const totalUSD = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + shippingCost;

    
    const totalARS = totalUSD * dolarRate;

   
    totalPriceElement.textContent = `Total: $${totalUSD.toFixed(2)} USD`;
    arsTotalElement.textContent = totalARS.toLocaleString("es-AR", { minimumFractionDigits: 2 });
}


shippingMethod.addEventListener('change', () => {
    let shippingCost = 0;
    if (shippingMethod.value === 'express') {
        shippingInfo.textContent = 'Entrega en 1 a 3 días hábiles.';
        shippingCost = 4;
    } else if (shippingMethod.value === 'motomensajeria') {
        shippingInfo.textContent = 'Entrega en 24 horas.';
        shippingCost = 5;
    } else if (shippingMethod.value === 'interior') {
        shippingInfo.textContent = 'Entrega en 48 a 72 horas.';
        shippingCost = 12;
    }
    calculateTotal(shippingCost);
});


calculateTotal();


document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;

    alert(`¡Gracias por tu compra, ${name} ${surname}!`);
    localStorage.removeItem('cart'); 
    window.location.href = '/'; 
});
