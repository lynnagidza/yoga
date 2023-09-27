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
        // Do something if successful
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
        // Do something if successful
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
        let currentQuantity = parseInt(quantityElement.textContent, 10);
        if (currentQuantity > 1) {
          currentQuantity -= 1;
          quantityElement.textContent = currentQuantity.toString();
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
        let currentQuantity = parseInt(quantityElement.textContent, 10);
        currentQuantity += 1;
        quantityElement.textContent = currentQuantity.toString();
      } else {
        console.error('Failed to increase item quantity on the server');
      }
    })
    .catch((error) => {
      console.error('Error increasing item quantity:', error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded! 🚀');
  const buttons = document.querySelectorAll('.btn-primary');

  buttons.forEach((button) => {
    const { itemId } = button.dataset;

    // Check if the button has a data-item-id attribute
    if (itemId) {
      button.addEventListener('click', () => {
        // Determine the action based on the button's ID
        if (button.id.startsWith('decreaseButton')) {
          decreaseQuantity(itemId);
        } else if (button.id.startsWith('increaseButton')) {
          increaseQuantity(itemId);
        } else if (button.id.startsWith('removeButton')) {
          removeFromCart(itemId);
        }
      });
    }
  });
});
