function showSection(category) {
    const sections = document.querySelectorAll('.category');

    sections.forEach(section => {
        if (section.id === category || category === 'all') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}                                         
