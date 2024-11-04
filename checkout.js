// Function to load the cart from localStorage and display it on the checkout page
// Function to load the cart from localStorage and display it on the checkout page
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartTable = document.querySelector('.cart-page table');
  let clearCartBtn = document.getElementById('clearCartBtn');
  let emptyCartNotify = document.querySelector(".emptyCartNotify span");
  let totalItems = 0;
  let totalPrice = 0;

  if (Object.keys(cart).length === 0) {
      clearCartBtn.style.display = 'none';
      emptyCartNotify.style.display = "block";
  } else {
      clearCartBtn.style.display = 'flex';
      emptyCartNotify.style.display = "none";
  }

  cartTable.innerHTML = `
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Size</th>
      <th>Colour</th>
      <th>Subtotal</th>
    </tr>
  `;

  // Loop through the cart and create rows for each product
  Object.values(cart).forEach(product => {
    const subtotal = product.price * product.quantity;
    totalItems += product.quantity;
    totalPrice += subtotal;

    // Find the product in cardsData to get available sizes and colours
    const productData = cardsData.find(p => p.id === product.id);

    if (!productData) {
        console.error(`Product data not found for product ID: ${product.id}`);
        return;
    }

    const sizeOptions = productData.sizes.map(size => 
      `<option value="${size}" ${size === product.size ? 'selected' : ''}>${size}</option>`
    ).join('');

    const colourOptions = productData.colours.map(colour => 
      `<option value="${colour}" ${colour === product.colour ? 'selected' : ''}>${colour}</option>`
    ).join('');

    const row = `
  <tr id="product-${product.id}">
    <td>
      <div class="cart-info">
        <img src="${product.img}" alt="${product.name}">
        <div class="cartInfo">
          <p>${product.name}</p>
          <small>Price: R${product.price}</small>
          <a href="#" onclick="removeFromCart(${product.id})">Remove</a>
        </div>
      </div>
    </td>
    <td><input type="number" value="${product.quantity}" min="1" onchange="updateQuantity(${product.id}, this.value)"></td>
    <td>
      <select id="cartSizeSelect-${product.id}" onchange="updateProductSize(${product.id}, this.value)">
        ${sizeOptions}
      </select>
    </td>
    <td>
      <select id="cartColourSelect-${product.id}" onchange="updateProductColour(${product.id}, this.value)">
        ${colourOptions}
      </select>
    </td>
    <td id="subtotal-${product.id}">R${subtotal.toFixed(2)}</td>
  </tr>
`;

    cartTable.innerHTML += row;
  });

  updateCartSummary(totalItems, totalPrice);
}

// Function to update the product size in the cart
function updateProductSize(productId, newSize) {
const cart = JSON.parse(localStorage.getItem('cart')) || {};
if (cart[productId]) {
  console.log(`Updating size for product ID: ${productId}, newSize: ${newSize}`);
  cart[productId].size = newSize; // Update the size in the cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
  console.log('Cart updated:', cart);
} else {
  console.error(`Product ID ${productId} not found in cart`);
}
}

// Function to update the product colour in the cart
function updateProductColour(productId, newColour) {
const cart = JSON.parse(localStorage.getItem('cart')) || {};
if (cart[productId]) {
  console.log(`Updating colour for product ID: ${productId}, newColour: ${newColour}`);
  cart[productId].colour = newColour; // Update the colour in the cart
  localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
  console.log('Cart updated:', cart);
} else {
  console.error(`Product ID ${productId} not found in cart`);
}
}

function clearCart() {
  const confirmClear = confirm("Are you sure you want to clear the cart?");
  if (confirmClear) {
    localStorage.setItem('cart', JSON.stringify({}));
    loadCart();
    updateCartCount();
  }
}
  
  // Function to update the cart summary (totals) on the checkout page
  function updateCartSummary(totalItems, totalPrice) {
    document.querySelector('.total-price table').innerHTML = `
      <tr>
        <td>Subtotal</td>
        <td>R${totalPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td>R${(totalPrice * 0.15).toFixed(2)}</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>R${(totalPrice * 1.15).toFixed(2)}</td>
      </tr>
    `;
  
    // Update the cart item count display
    const cartCountElement = document.getElementById('cartItemCount');
    if (cartCountElement) {
      cartCountElement.textContent = totalItems;
    }
  }
  
  // Function to remove a specific item from the cart
  function removeFromCart(productId) {
    // Load the current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const sizeSelect = document.querySelector('#cartSizeSelect');
    const colourSelect = document.querySelector('#cartColourSelect');
    
    const selectedSize = sizeSelect.value;
    const selectedColour = colourSelect.value;

    console.log(sizeSelect.value);
    

    // Create a unique key using product id, selected size, and selected colour
    const cartKey = `${productId}_${selectedSize}_${selectedColour}`;
    // Check if the product exists in the cart
    if (cart[cartKey]) {
        // Remove the product from the cart
        delete cart[cartKey];
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart(); // Reload the cart display
        updateCartCount(); // Update cart count
    }
}
  
  // Function to update quantity and recalculate subtotals and totals
  function updateQuantity(productId, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
  
    // Check if product exists and update quantity
    if (cart[productId]) {
      cart[productId].quantity = parseInt(newQuantity);
  
      // Update subtotal for the specific product
      const newSubtotal = cart[productId].price * cart[productId].quantity;
      document.getElementById(`subtotal-${productId}`).textContent = `R${newSubtotal.toFixed(2)}`;
  
      // Save updated cart back to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      // Recalculate total items and total price
      let totalItems = 0;
      let totalPrice = 0;
      Object.values(cart).forEach(product => {
        totalItems += product.quantity;
        totalPrice += product.price * product.quantity;
      });
  
      // Update total cart summary
      updateCartSummary(totalItems, totalPrice);
      updateCartCount();
    }
  }
  
  // Function to update cart count and store it in localStorage
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartCount = 0;
  
    // Calculate the total quantity of items in the cart
    Object.values(cart).forEach(product => {
      cartCount += product.quantity;
    });
  
    // Update the cart count in the HTML
    document.getElementById('cartCount').textContent = cartCount;
  
    // Store the cart count in localStorage
    localStorage.setItem('cartCount', cartCount);
  }
  
  // Function to load cart count on page load
  function loadCartCount() {
    const cartCount = localStorage.getItem('cartCount') || 0;
    document.getElementById('cartCount').textContent = cartCount;
    document.getElementById('cartItemCount').textContent = cartCount;
  }
  
  // Load cart and cart count when the page loads
  window.onload = () => {
    loadCart();
    loadCartCount();
  };

document.getElementById("checkout").addEventListener("click", () => {
  console.log(cart);
});