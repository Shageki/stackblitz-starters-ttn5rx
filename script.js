function viewCart() {
    const cartContainer = document.getElementById('cart-container');
    const viewCartButton = document.querySelector('.view-cart-btn');

    updateCartView();

    if (cartContainer.style.display === 'none' || cartContainer.style.display === '') {
        cartContainer.style.display = 'block';
        viewCartButton.style.display = 'none';
    } else {
        cartContainer.style.display = 'none';
        viewCartButton.style.display = 'block';
    }
}

function closeCart() {
    const cartContainer = document.getElementById('cart-container');
    const viewCartButton = document.querySelector('.view-cart-btn');

    cartContainer.style.display = 'none';
    viewCartButton.style.display = 'block';
}

function clearCart() {
    sessionStorage.removeItem('cart');
    viewCart();
}

function processOrder() {
    alert('Your order has been processed!');
    sessionStorage.removeItem('cart');
    viewCart();
}

function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert(`${item.name} added to cart!`);

    const cartContainer = document.getElementById('cart-container');
    if (cartContainer.style.display === 'block') {
        updateCartView();
    }
}

function updateCartView() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');

    cartList.innerHTML = '';

    if (cartItems.length > 0) {
        cartItems.forEach((item, index) => {
            let li = document.createElement('li');
            li.textContent = `${index + 1}. ${item.name} - ${item.price}`;
            cartList.appendChild(li);
        });
    } else {
        cartList.innerHTML = '<li>Your cart is empty</li>';
    }
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const contactType = document.querySelector('input[name="contact_type"]:checked').value;
        const subject = document.getElementById('subject').value;

        const contactData = {
            name: name,
            email: email,
            phone: phone,
            contactType: contactType,
            subject: subject
        };

        localStorage.setItem('contactInfo', JSON.stringify(contactData));

        alert('Thank you for contacting us! Your information has been saved.');

        contactForm.reset();
    });
}
