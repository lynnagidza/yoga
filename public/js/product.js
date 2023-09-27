document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.getElementById('addToCartButton');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', (event) => {
      event.preventDefault();

      const productId = parseInt(addToCartButton.getAttribute('data-product-id'), 10);
      const quantity = 1;
      const price = parseFloat(addToCartButton.getAttribute('data-product-price'));
      const imageUrl = addToCartButton.getAttribute('data-product-image-url');

      const data = {
        productId,
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
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Product added to cart successfully';
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
