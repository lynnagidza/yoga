const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('shippingCity');
const deliveryFeeElement = document.getElementById('deliveryFee');
const grandTotalElement = document.querySelector('.total-price');

function populateCitiesAndCalculateTotal() {
  const selectedCountry = countrySelect.value;
  if (selectedCountry === '') {
    // If no country is selected, reset the city dropdown and update totals
    citySelect.innerHTML = '<option value="" selected disabled hidden>Select Town/City</option>';
    deliveryFeeElement.textContent = '$0.00';
    grandTotalElement.textContent = '$0.00';
    return;
  }

  // Fetch updated data based on the selected country
  fetch(`/checkout/getUpdatedData?country=${selectedCountry}`)
    .then((response) => response.json())
    .then((data) => {
      citySelect.innerHTML = '<option value="" selected disabled hidden>Select Town/City</option>';
      data.filteredCities.forEach((city) => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        citySelect.appendChild(option);
      });
      deliveryFeeElement.textContent = `$${data.deliveryFee.toFixed(2)}`;
      grandTotalElement.textContent = `$${data.grandTotal.toFixed(2)}`;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

countrySelect.addEventListener('change', populateCitiesAndCalculateTotal);

// Initialize the city dropdown and totals when the page loads
populateCitiesAndCalculateTotal();
