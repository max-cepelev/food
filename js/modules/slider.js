function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

    // slider

    const   slides = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            currentSlide = document.querySelector(currentCounter),
            totalSlides = document.querySelector(totalCounter),
            prevSlide = document.querySelector(prevArrow),
            nextSlide = document.querySelector(nextArrow),
            slidesWrapper = document.querySelector(wrapper),
            slidesField = document.querySelector(field),
            width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    // Функция подстановки ноля к цифрам меньше 10:
    function addZeroToSlideNumber() {
        if (slides.length < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }
    }

    // Функция преобразования строки в число
    function getNumber(str) {
        return +str.replace(/\D/g, '');
    }

    // Функция установки offset для показа слайда
    function setOffset() {
        if (offset === getNumber(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += getNumber(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    // Функция изменения точек навигации слайдера
    function moveDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    if (slides.length < 10) {
        totalSlides.textContent = `0${slides.length}`;
    } else {
        totalSlides.textContent = slides.length;
    }

    addZeroToSlideNumber();

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const   indicators = document.createElement('ol'),
            dots = [];

    indicators.classList.add('carousel-indicators');

    slider.append(indicators);

    for (let i=0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }


    nextSlide.addEventListener('click', () => {

        setOffset();

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        addZeroToSlideNumber();

        moveDots();
    });

    prevSlide.addEventListener('click', () => {

        setOffset();

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        addZeroToSlideNumber();

        moveDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            addZeroToSlideNumber();

            moveDots();
        });
    });
}

export default slider;