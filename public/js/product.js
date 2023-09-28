function customAlert(message) {
  const customAlertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');

  alertMessage.textContent = message;
  customAlertBox.style.display = 'block';

  setTimeout(() => {
    customAlertBox.style.display = 'none';
  }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.getElementById('addToCartButton');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', (event) => {
      event.preventDefault();

      const productId = parseInt(addToCartButton.getAttribute('data-product-id'), 10);
      const productName = document.getElementsByClassName('product-name')[0].textContent;
      const quantity = 1;
      const price = parseFloat(addToCartButton.getAttribute('data-product-price'));
      const imageUrl = addToCartButton.getAttribute('data-product-image-url');

      const data = {
        productId,
        productName,
        quantity,
        price,
        imageUrl,
      };

      fetch('/cart/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

        .then((response) => {
          if (response.ok) {
            customAlert('Product added to cart');
          } else {
            throw new Error('Error adding product to cart');
          }
        })
        .catch(() => {
          throw new Error('Error adding product to cart');
        });
    });
  }
});
