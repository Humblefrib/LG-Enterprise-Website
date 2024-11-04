let cardsData = [
    { id: 1, name: 'Product 1', price: 10, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"], description: "This is the frickin Boots desicration!!!" },
    { id: 2, name: 'Product 2', price: 150, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 3, name: 'Product 3', price: 200, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 4, name: 'Product 4', price: 50, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 5, name: 'Product 5', price: 300, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 6, name: 'Product 6', price: 500, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 7, name: 'Product 7', price: 60, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ["'Select Colour', Brown", "Maroon"] },
    { id: 8, name: 'Product 8', price: 350, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 9, name: 'Product 9', price: 450, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 10, name: 'Product 10', price: 70, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 11, name: 'Product 11', price: 80, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 12, name: 'Product 12', price: 90, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 13, name: 'Product 13', price: 30, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 14, name: 'Product 14', price: 600, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 15, name: 'Product 15', price: 75, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 16, name: 'Product 16', price: 35, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 17, name: 'Product 17', price: 90, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 18, name: 'Product 18', price: 400, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 19, name: 'Product 19', price: 20, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 20, name: 'Product 20', price: 50, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 21, name: 'Product 21', price: 90, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 22, name: 'Product 22', price: 85, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 23, name: 'Product 23', price: 150, category: 'Overalls', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 24, name: 'Product 24', price: 25, category: 'Helmets', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] },
    { id: 25, name: 'Product 25', price: 70, category: 'Boots', img: ['Images/boot.png', 'Images/boot 0.png', 'Images/boot 1.png'], sizes: ['Select Size', 'S', 'M', 'L'], colours: ['Select Colour', "Brown", "Maroon"] }
];

let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Global cart variable
const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const taxElement = document.getElementById('tax');
const totalElement = document.getElementById('total');
const cartCountElement = document.getElementById('cartCount');
const cardsPerPage = 15;
let sortedCardsData = [...cardsData]; // To maintain sorted data
const cardsContainer = document.getElementById('shoppingProducts');
const paginationContainer = document.getElementById('pagination');

function updateQuantity(productId, quantity) {
    cart[productId].quantity = parseInt(quantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart table with updated data
}

function removeFromCart(productId) {
    if (cart[productId]) {
        delete cart[productId]; // Remove item from cart object
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        updateCartCount(); // Update cart count after removing item
        loadCart(); // Reload the cart table
    }
}

function displayCards(pageNumber) {
    cardsContainer.innerHTML = '';
    const startIndex = (pageNumber - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const pageCards = sortedCardsData.slice(startIndex, endIndex);

    pageCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('shoppingProduct');
        cardElement.innerHTML = `
            <div><img src="${card.img[0]}" alt="${card.name}" onclick="redirectToProduct(${card.id})"></div>
            <div class="shoppingProductInfo">
                <h3>${card.name}</h3>
                <span>Price: R${card.price}</span>
                <button class="descriptionBtn" onclick="redirectToProduct(${card.id})">See More<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg></button>
                <button class="addToCartBtn" onclick="addToCart(${card.id})">Add to Cart<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg></button>
            </div>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

function redirectToProduct(productId) {
    const product = cardsData.find(card => card.id === productId);
    if (product) {
        localStorage.setItem('productDetails', JSON.stringify(product));
        window.location.href = 'productDescription.html'; // Redirect to description page
    }
}

function setupPagination() {
    const totalPages = Math.ceil(sortedCardsData.length / cardsPerPage);

    paginationContainer.innerHTML = ''; // Clear previous pagination
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = "#section7";
        pageLink.innerText = i;
        pageLink.addEventListener('click', (event) => {
            event.preventDefault();
            displayCards(i);

            const allLinks = paginationContainer.querySelectorAll('a');
            allLinks.forEach(link => link.classList.remove('active'));

            pageLink.classList.add('active');
        });

        if (i === 1) {
            pageLink.classList.add('active');
        }

        paginationContainer.appendChild(pageLink);
    }
}

function sortProducts() {
    const nameSort = document.getElementById('sortByName').value;
    const categorySort = document.getElementById('sortByCategory').value;
    const priceSort = document.getElementById('sortByPrice').value;

    sortedCardsData = [...cardsData]; // Reset the cards array

    if (nameSort === 'asc') {
        sortedCardsData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (nameSort === 'desc') {
        sortedCardsData.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (categorySort !== 'all') {
        sortedCardsData = sortedCardsData.filter(card => card.category === categorySort);
    }

    if (priceSort === 'low-to-high') {
        sortedCardsData.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high-to-low') {
        sortedCardsData.sort((a, b) => b.price - a.price);
    } else if (priceSort === '0-100') {
        sortedCardsData = sortedCardsData.filter(card => card.price >= 0 && card.price <= 100);
    } else if (priceSort === '100-300') {
        sortedCardsData = sortedCardsData.filter(card => card.price > 100 && card.price <= 300);
    } else if (priceSort === '300+') {
        sortedCardsData = sortedCardsData.filter(card => card.price > 300);
    }

    displayCards(1); // Re-display sorted cards starting from page 1
}

function addToCart(productId) {
    const selectedProduct = cardsData.find(product => product.id === productId);
    const selectedSize = document.querySelector(`#sizeSelect-${productId}`).value;
    const selectedColour = document.querySelector(`#colourSelect-${productId}`).value;

    // Add or update the product in the cart
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        cart[productId] = { 
            ...selectedProduct, 
            quantity: 1,
            selectedSize,
            selectedColour
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const totalItems = Object.values(cart).reduce((count, product) => count + product.quantity, 0);
    cartCountElement.innerText = totalItems;
}

function loadCartCount() {
    updateCartCount(); // Load cart count on page load
}

// Initial setup on window load
window.onload = function () {
    loadCartCount(); // Load cart count
    setupPagination(); // Setup pagination
    sortProducts(); // Apply sorting and filters on page load
};

function redirectToProduct(productId) {
    const product = cardsData.find(card => card.id === productId);
    if (product) {
        localStorage.setItem('productDetails', JSON.stringify(product));
        window.location.href = 'productDescription.html';
    }
}