const iconMenu = document.querySelector('.header__icon')
const menuBody = document.querySelector('.header__menu')
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}
// End of Burger

const scrollLink = document.querySelectorAll('.intro__scroll[data-goto]')
if (scrollLink.length > 0) {
  scrollLink.forEach((el) => {
    el.addEventListener('click', onScrollLinkClick)
  })

  function onScrollLinkClick(e) {
    const scrollLink = e.target
    if (scrollLink.dataset.goto && document.querySelector(scrollLink.dataset.goto)) {
      const gotoBlock = document.querySelector(scrollLink.dataset.goto)
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector('header').offsetHeight

      window.scrollTo({
        top: gotoBlockValue + 100,
        behavior: 'smooth',
      })
      e.preventDefault()
    }
  }
}
// End of Scroll
