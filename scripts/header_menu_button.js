const headerButtonOpen = document.getElementById('openButton')
const headerButtonClose = document.getElementById('closeButton')
const mobileMenu = document.querySelector('.need_show')

headerButtonOpen.onclick = () => {
    mobileMenu.classList.replace('no_show', '.showing')
    headerButtonClose.classList.replace ('no_show', '.showing')
    headerButtonOpen.classList.replace('.showing', 'no_show')
}

headerButtonClose.onclick = () => {
    mobileMenu.classList.replace('.showing', 'no_show')
    headerButtonClose.classList.replace ('.showing', 'no_show')
    headerButtonOpen.classList.replace('no_show', '.showing')
}
