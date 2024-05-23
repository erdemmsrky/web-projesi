const shoeSlider = document.querySelector('.shoe-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = shoeSlider.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, idx) => {
        if (idx === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// İlk resmi göster
showImage(currentIndex);


.category-liste {
    text-align: center;
    margin-top: 10px;
}

.category-liste div {
    margin: 5px;
    padding: 5px 10px;
    font-size: 14px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
}
