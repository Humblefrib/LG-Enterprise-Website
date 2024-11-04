const mainImgContainer = document.querySelector('.descriptionMainImg');
const mainImg = mainImgContainer.querySelector('img');

let lastTransformOrigin = 'center center'; // Store the last transform-origin

mainImgContainer.addEventListener('mousemove', function (event) {
    const rect = mainImgContainer.getBoundingClientRect();
    const x = event.clientX - rect.left; // Get X coordinate relative to the container
    const y = event.clientY - rect.top;  // Get Y coordinate relative to the container

    const xPercent = (x / mainImgContainer.offsetWidth) * 100;
    const yPercent = (y / mainImgContainer.offsetHeight) * 100;

    lastTransformOrigin = `${xPercent}% ${yPercent}%`; // Save the last transform origin
    mainImg.style.transformOrigin = lastTransformOrigin; // Apply the transform origin
    mainImg.style.transform = 'scale(2)'; // Zoom in the image
});

mainImgContainer.addEventListener('mouseleave', function () {
    // On mouse leave, only reset the scale to zoom out, but keep the last transform-origin
    mainImg.style.transform = 'scale(1)';
});

window.onload = function() {
    const productDetails = JSON.parse(localStorage.getItem('productDetails'));

    if (productDetails) {
        // Set main product details (as previously done)
        document.querySelector('.descriptionMainImg img').src = productDetails.img[0]; //default image

        function updateMainImage(newSrc) {
            // Fade out the main image
            document.querySelector('.descriptionMainImg img').style.opacity = 0;
    
            // Wait for the fade-out effect to complete (0.5s) then switch image and fade it back in
            setTimeout(() => {
                document.querySelector('.descriptionMainImg img').src = newSrc; // Change the image
                document.querySelector('.descriptionMainImg img').style.opacity = 1; // Fade it back in
            }, 200); // Match the timeout with the CSS transition duration
        }

        document.querySelectorAll('.small-img-col img').forEach((image, index) => {
            // Check if the index exists in the img array
            if (index < productDetails.img.length) {
                image.src = productDetails.img[index];
            }

            image.addEventListener("click", function() {
                updateMainImage(this.src);
            });
        });
        document.querySelector('.descriptionInfoHeader h2').innerText = productDetails.name;
        document.querySelector('.descriptionInfoHeader h3').innerText = productDetails.category;
        document.querySelector('.descriptionInfoDetails h4').innerText = `Price: R${productDetails.price}`;

        const sizeSelect = document.querySelector('#sizeSelect');
        const colourSelect = document.querySelector("#colourSelect");

        productDetails.sizes.forEach(size => {
            sizeSelect.innerHTML += `<option>${size}</option>`;
        });
        productDetails.colours.forEach(colour => {
            colourSelect.innerHTML += `<option>${colour}</option>`;
        });

        document.querySelector('.descriptionInfoDescription p').innerText = `${productDetails.description}.`;

        // Populate related items
        const relatedProductsContainer = document.querySelector('.relatedProducts');
        relatedProductsContainer.innerHTML = ''; // Clear any existing items

        // Filter related products (same category, but not the current product)
        const relatedProducts = cardsData.filter(product => product.category === productDetails.category && product.id !== productDetails.id); // Limit to 10 products

        // Display related products
        relatedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `<div><img src="${product.img}" alt="${product.name}" onclick="redirectToProduct(${product.id})"></div>`;
            relatedProductsContainer.appendChild(productElement);
        });

        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.addEventListener('click', function() {
            const quantityInput = document.getElementById('quantityInput');
            const quantity = parseInt(quantityInput.value, 10);

            // Check if the quantity is a valid number greater than 0
            if (quantity > 0) {
                addToCart(productDetails.id, quantity); // Call addToCart function
            } else {
                alert('Please enter a valid quantity');
            }
        });
    }

    loadCartCount(); // Load cart count
};

function loadCartCount() {
    updateCartCount(); // Load cart count on page load
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Make sure cart is initialized properly
    const totalItems = Object.values(cart).reduce((count, product) => count + product.quantity, 0);
    const cartCountElement = document.getElementById('cartCount'); // Ensure this is correctly targeted
    cartCountElement.innerText = totalItems;
}

function addToCart(productId, quantity) {
    const product = cardsData.find(card => card.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load existing cart
    const sizeSelect = document.querySelector('#sizeSelect');
    const colourSelect = document.querySelector('#colourSelect');
    
    const selectedSize = sizeSelect.value;
    const selectedColour = colourSelect.value;

    // Create a unique key using product id, selected size, and selected colour
    const cartKey = `${productId}_${selectedSize}_${selectedColour}`;

    if (product) {
        // Check if the product with the same size and colour already exists in the cart
        if (cart[cartKey]) {
            cart[cartKey].quantity += quantity; // Increase quantity if already in cart
        } else {
            // Add the product with its size and colour as a unique entry in the cart
            cart[cartKey] = {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                img: product.img[0],
                quantity: quantity, // Set quantity based on input
                size: selectedSize,
                colour: selectedColour
            };
        }

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        console.log(cart); // Debugging to check the updated cart
    }
}