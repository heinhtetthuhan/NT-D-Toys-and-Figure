const seeMoreBtn = document.getElementById('welcomeButton');
const categoryContainer = document.getElementById('categoryContainer');

seeMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (categoryContainer.style.display === 'flex') {
        categoryContainer.style.display = 'none';
    } else {
        categoryContainer.style.display = 'flex';
    }
});