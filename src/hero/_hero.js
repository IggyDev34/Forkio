const linesBtn = document.querySelector('#arr-btn')
const crossBtn = document.querySelector('#cross-btn')
const nav = document.querySelector('.hero-dropdown')

function toggleMenu() {
    linesBtn.classList.toggle('active');
    crossBtn.classList.toggle('active');
    nav.classList.toggle('active-dropdown')
}

function removeMenu() {
    linesBtn.classList.add('active');
    crossBtn.classList.remove('active');
    nav.classList.remove('active-dropdown')
}


linesBtn.addEventListener('click', toggleMenu);
crossBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', (e) => {
    if (
        e.target !== linesBtn
        && e.target !== crossBtn
        && !e.target.classList.contains('hero-nav__line')
        && !e.target.classList.contains('hero-nav__cross')
    ) {
        removeMenu();
    }
})


