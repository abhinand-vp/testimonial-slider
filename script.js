const slider = document.getElementById('slider');
let isAnimating = false;

function slide() {
    if (isAnimating) return;
    isAnimating = true;

    slider.style.transition = 'transform 1s linear';
    slider.style.transform = 'translateX(-16.66%)';

    setTimeout(() => {
        slider.style.transition = 'none'; 
        slider.style.transform = 'translateX(0)'; 
        const firstCard = slider.firstElementChild;
        slider.appendChild(firstCard);

        isAnimating = false;
    }, 1000);
}

setInterval(slide, 2000);
