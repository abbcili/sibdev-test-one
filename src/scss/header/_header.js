const headerText = document.querySelector('.header__text');
const headerInput = document.querySelector('.header__input');

document.addEventListener('scroll', () => {

    if(window.pageYOffset > 0){
        headerText.classList.add('_hide');
        headerInput.classList.add('_displace');
    } else {
        headerText.classList.remove('_hide');
        headerInput.classList.remove('_displace');
    }
})