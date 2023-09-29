// JavaScript to handle category filtering
const categoryCarousel = document.getElementById('category-carousel');

// Function to show/hide categories based on the selected filter
function filterCategories(filter) {
  const carouselItems = categoryCarousel.querySelectorAll('.carousel-item');

  carouselItems.forEach((item) => {
    const section = item.getAttribute('data-section');
    const itemStyle = item.style;

    if (filter === 'All' || filter === section) {
      itemStyle.display = 'block';
    } else {
      itemStyle.display = 'none';
    }
  });

  // Reset the carousel to the first visible category
  categoryCarousel.querySelector('.carousel-inner .carousel-item:first-child').classList.add('active');
}

// Initially, show all categories
filterCategories('All');

// Handle filter selection (e.g., when a user clicks a filter button)
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    filterCategories(filter);
  });
});
