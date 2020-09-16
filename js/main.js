var header = document.querySelector('.header-wrapper');
var burger = document.querySelector('.nav__burger');
var navItemLogo = document.querySelector('.nav__item--logo');
var headerInfo = document.querySelector('.header__info');
var burgerOpen = document.querySelector('.burger__open');
var burgerClosed = document.querySelector('.burger__closed');
var firstSelect = document.querySelector('.first-select');
var secondSelect = document.querySelector('.second-select');
var navItemSelect = document.querySelectorAll('.nav__item--select');
var selectList = document.querySelectorAll('.select-list');
var firstList = document.querySelector('.first-list');
var secondList = document.querySelector('.second-list');
var firstArrow = document.querySelector('.first-select svg');
var secondArrow = document.querySelector('.second-select svg');
var navDistribution = document.querySelector('.nav__distribution');
var contentForm = document.querySelector('.content__form');
var slide2 = document.querySelector('.slide-2');
var TIME_OUT = 300;

var generateMobileMenu = function () {
    var element = document.createElement('a');
    element.classList.add('header__logo');
    element.innerHTML = '<img class="nav__img" src="img/logo.png" srcset="img/logo@2x.png 2x" alt="">';
    headerInfo.insertAdjacentElement('afterbegin', element);
    navItemLogo.remove();
}

var moveSlideContent = function () {
    var fragment = document.createDocumentFragment();
    var element = contentForm.cloneNode(true);
    fragment.appendChild(element);
    slide2.innerHTML = '';
    slide2.appendChild(fragment);
    contentForm.remove();
}

var showList = function (element, select) {
    navDistribution.style.marginBottom = '141px';
    select.style.marginBottom = '150px';
    element.style.opacity = '1';
    element.style.display = 'block';
}

var hideList = function (element, select) {
    navDistribution.style.marginBottom = '';
    select.style.marginBottom = '';
    element.style.opacity = '0';
    element.style.display = 'none';
}

var checkClientWidth = function () {
    var width = document.body.clientWidth;
    if (width <= 768) {
        generateMobileMenu();
        moveSlideContent();
    }
}
checkClientWidth();

var onDocumentScroll = function () {
    var img = document.querySelector('.nav__img');
    var scrolled = window.pageYOffset;
    if (scrolled >= 10) {
        header.classList.add('scrolled');
        img.style.opacity = '0';
        img.src = 'img/scroll-logo.png';
        img.srcset = 'img/scroll-logo2x.png 2x';
        img.style.opacity = '1';
    } else {
        header.classList.remove('scrolled');
        img.style.opacity = '0';
        img.src = 'img/logo.png';
        img.srcset = 'img/logo2x.png 2x';
        img.style.opacity = '1';
    }
};

window.addEventListener('scroll', onDocumentScroll);
burger.addEventListener('click', function () {
    header.classList.toggle('menu-opened');
});
firstSelect.addEventListener('mouseover', function (e) {
    var target = e.target;
    if (target) {
        header.style.minHeight = '245px';
        firstArrow.style.transform = 'rotate(180deg)';
        setTimeout(function(){
            showList(firstList, firstSelect);
        }, TIME_OUT)
    }
});
firstSelect.addEventListener('mouseout', function (e) {
    var target = e.target;
    if (target) {
        firstArrow.style.transform = '';
        hideList(firstList, firstSelect);
        header.style.minHeight = '130px';
    }
});
secondSelect.addEventListener('mouseover', function (e) {
    var target = e.target;
    if (target) {
        header.style.minHeight = '245px';
        secondArrow.style.transform = 'rotate(180deg)';
        setTimeout(function(){
            showList(secondList, secondSelect);
        }, TIME_OUT)
    }
});
secondSelect.addEventListener('mouseout', function (e) {
    var target = e.target;
    if (target) {
        secondArrow.style.transform = '';
        hideList(secondList, secondSelect);
        header.style.minHeight = '130px';
    }
});


var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    initialSlide: 0,
    loop: true,

    breakpoints: {     
        480: {       
            width: 432
        }, 

        768: {       
            width: 720 
        },
        1920: {
            width: 1700
        }
    } , 

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})
