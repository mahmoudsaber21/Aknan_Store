let currentImageIndex = 0;
const images = document.querySelectorAll('.product-images img');

function showPreviousImage() {
    images[currentImageIndex].classList.remove('active-image');
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    images[currentImageIndex].classList.add('active-image');
}

function showNextImage() {
    images[currentImageIndex].classList.remove('active-image');
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    images[currentImageIndex].classList.add('active-image');
}
document.getElementById('showMoreButton').addEventListener('click', function() {
    var additionalProducts = document.querySelectorAll('.product-row:nth-child(n+3)');
    for (var i = 0; i < additionalProducts.length; i++) {
        additionalProducts[i].style.display = 'flex';
    }
    document.getElementById('additionalProducts').style.display = 'block';
});
