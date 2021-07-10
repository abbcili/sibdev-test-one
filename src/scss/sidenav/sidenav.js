const sidenav = document.querySelector('.sidenav'),
    toggle = sidenav.querySelector('.sidenav__toggle'),
    logo = sidenav.querySelector('.sidenav__logo'),
    link = sidenav.querySelectorAll('.sidenav__link'),
    headerText = document.querySelector('.header__text'),
    header = document.querySelector('.header'),
    content = document.querySelector('.content')



toggle.addEventListener('click', () => {
    if (toggle.classList.contains('_active')) {
        toggle.classList.remove('_active');
        sidenav.classList.remove('_open');
        sidenav.classList.add('_close');
        logo.classList.add('_close');
        header.classList.add('_close');
        content.classList.add('_close');
        link.forEach(item => item.classList.add('_close'))

    } else {
        toggle.classList.add('_active');
        sidenav.classList.remove('_close');
        sidenav.classList.add('_open');
        logo.classList.remove('_close');
        link.forEach(item => item.classList.remove('_close'));
        header.classList.remove('_close');
        content.classList.remove('_close');
    }
})

link.forEach(item => {
    item.addEventListener('click', () => {
        if(!item.classList.contains('_active')){
            link.forEach(item => item.classList.remove('_active'));
            item.classList.add('_active');
            headerText.textContent = item.textContent;
        }
    })
})