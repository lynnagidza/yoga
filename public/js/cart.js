function removeFromCart(itemId) {
  fetch(`/cart/remove/${itemId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 204) {
        window.location.reload();
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
        window.location.reload();
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
        window.location.reload();
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
  const proceed2checkout = document.querySelector('.proceed-to-checkout');

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

  proceed2checkout.addEventListener('click', () => {
    window.location.href = '/checkout';
  });
});
