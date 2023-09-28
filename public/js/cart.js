function removeFromCart(itemId) {
  console.log('removeFromCart here');
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
  console.log('Decrease quantity function called for itemId:', itemId);
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
  console.log('Increase quantity function called for itemId:', itemId);
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
  const decreaseButtons = document.querySelectorAll('.decrease-button');
  const increaseButtons = document.querySelectorAll('.increase-button');
  const removeButtons = document.querySelectorAll('.remove-button');

  decreaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-item-id');
      decreaseQuantity(itemId);
    });
  });

  increaseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-item-id');
      increaseQuantity(itemId);
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-item-id');
      removeFromCart(itemId);
    });
  });
});
