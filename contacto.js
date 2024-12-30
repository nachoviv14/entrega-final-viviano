document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

   
    if (!name || !surname || !phone || !email || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const emailRegex = /^[^\\s@]+@[\\w.-]+\\.[\\w]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
    }

    alert('¡Formulario enviado con éxito!');
    document.getElementById('contact-form').reset(); 
});
