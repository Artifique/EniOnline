document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    
    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        const offset = currentIndex * (slideWidth + 20); // 20 is the total padding (10 + 10)
        slider.style.transform = `translateX(-${offset}px)`;
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
});
