var header = document.querySelector('.header-wrapper');
var hoveredSelect = document.querySelector('.nav__item--select');
var list = document.querySelector('.select-list');

var onDocumentScroll = function () {
    var img = document.querySelector('.nav__img');
    var scrolled = window.pageYOffset;
    if (scrolled >= 10) {
        header.classList.add('scrolled');
        img.style.opacity = '0';
        img.src = 'img/scroll-logo.png';
        img.srcset = 'img/scroll-logo@2x.png 2x';
        img.style.opacity = '1';
    } else {
        header.classList.remove('scrolled');
        img.style.opacity = '0';
        img.src = 'img/logo.png';
        img.srcset = 'img/logo@2x.png 2x';
        img.style.opacity = '1';
    }
};

hoveredSelect.addEventListener('mouseover', function (e) {
    header.style.minHeight = '300px';
    setTimeout(function () {
        list.style.opacity = '1';
        list.style.display = 'block';
    }, 500)
});
hoveredSelect.addEventListener('mouseout', function () {
    header.style.minHeight = '130px';
    list.style.opacity = '0';
    list.style.display = 'none';
});
window.addEventListener('scroll', onDocumentScroll);

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 60,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
