const header = document.querySelector('.header-wrapper'),
      burger = document.querySelector('.nav__burger'),
      navItemLogo = document.querySelector('.nav__item--logo'),
      headerInfo = document.querySelector('.header__info'),
      burgerOpen = document.querySelector('.burger__open'),
      burgerClosed = document.querySelector('.burger__closed'),
      navItemSelect = document.querySelector('.nav__item--select'),
      firstSelect = document.querySelector('.first-select'),
      secondSelect = document.querySelector('.second-select'),
      firstArrow = document.querySelector('.first-select svg'),
      secondArrow = document.querySelector('.second-select svg'),
      firstList = document.querySelector('.first-list'),
      secondList = document.querySelector('.second-list'),
      contentForm = document.querySelector('.content__form'),
      slide2 = document.querySelector('.slide-2'),
      nav = document.querySelector('.nav__list'),
      navLinkDistribution = document.querySelector('.nav__link--distribution'),
      TIME_OUT = 500;

const generateMobileMenu = () => {
    let element = document.createElement('a');
    element.classList.add('header__logo');
    element.innerHTML = '<img class="nav__img" src="img/logo.png" srcset="img/logo2x.png 2x" alt="">';
    headerInfo.insertAdjacentElement('afterbegin', element);
    navItemLogo.remove();
}

const moveSlideContent = () => {
    let fragment = document.createDocumentFragment();
    let element = contentForm.cloneNode(true);
    fragment.appendChild(element);
    slide2.innerHTML = '';
    slide2.appendChild(fragment);
    contentForm.remove();
}

const checkClientWidth = () => {
    let width = document.body.clientWidth;
    if (width <= 768) {
        generateMobileMenu();
        moveSlideContent();
    }
    if (width <= 480) {
        navLinkDistribution.style.display = 'none';
    }
}
checkClientWidth();

const onDocumentScroll = () => {
    let img = document.querySelector('.nav__img');
    let scrolled = window.pageYOffset;
    if (scrolled > 0) {
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

const onSelectClick = (target) => {
    if (target.closest('.first-select')) {
        header.classList.toggle('select-opened');
        setTimeout(() => {
            firstSelect.classList.toggle('opened');
            firstList.classList.toggle('visible');
            firstArrow.classList.toggle('active');
        }, TIME_OUT);
    }
    if (target.closest('.second-select')) {
        secondSelect.classList.toggle('opened');
        secondList.classList.toggle('visible');
        secondArrow.classList.toggle('active');
        setTimeout(() => {
            header.classList.toggle('select-opened');
        }, TIME_OUT);
    }
} 

window.addEventListener('scroll', onDocumentScroll);
burger.addEventListener('click', () => {
    header.classList.toggle('menu-opened');
});
nav.addEventListener('click', (e) => {
    let target = e.target;
    e.preventDefault();
    onSelectClick(target);
});

const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    initialSlide: 0,
    loop: true,
    preventClicks: true,

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
        prevEl: '.swiper-button-disabled',
    }
})

