function addToCart(productId, quantity, price) {
  fetch('/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, quantity, price }),
  })
    .then((response) => {
      if (response.status === 201) {
      } else {
        console.error('Failed to add item to cart');
      }
    })
    .catch((error) => {
      console.error('Error adding item to cart:', error);
    });
}

function removeFromCart(itemId) {
  fetch(`/cart/remove/${itemId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 204) {
      } else {
        console.error('Failed to remove item from cart');
      }
    })
    .catch((error) => {
      console.error('Error removing item from cart:', error);
    });
}

function decreaseQuantity(itemId) {
  fetch(`/cart/decrease/${itemId}`, {
    method: 'POST',
  })
    .then((response) => {
      if (response.status === 200) {
        const quantityElement = document.getElementById(`quantity-${itemId}`);
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
          currentQuantity--;
          quantityElement.textContent = currentQuantity;
        }
      } else {
        console.error('Failed to decrease item quantity on the server');
      }
    })
    .catch((error) => {
      console.error('Error decreasing item quantity:', error);
    });
}

function increaseQuantity(itemId) {
  fetch(`/cart/increase/${itemId}`, {
    method: 'POST',
  })
    .then((response) => {
      if (response.status === 200) {
        const quantityElement = document.getElementById(`quantity-${itemId}`);
        let currentQuantity = parseInt(quantityElement.textContent);
        currentQuantity++;
        quantityElement.textContent = currentQuantity;
      } else {
        console.error('Failed to increase item quantity on the server');
      }
    })
    .catch((error) => {
      console.error('Error increasing item quantity:', error);
    });
}
