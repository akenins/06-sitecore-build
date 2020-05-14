let MobileNavController = (function ($) {
  let mobileNav,
    mobileNavSelector = '#mobile-nav',
    mobileNavToggleButton,
    mobileNavToggleButtonSelector = '#mobile-nav-toggle',
    mobileNavActiveAreaSelector = '.mobile-nav',
    itemToggleSelector = '.mobile-nav-arrow',
    subitemToggleSelector = '.mobile-subnav-arrow',
    openClass = 'mobile-nav-open'

  function onDocumentReady() {
    mobileNav = $(mobileNavSelector)
    mobileNavToggleButton = $(mobileNavToggleButtonSelector)
    itemToggleSelector = $(itemToggleSelector)
    subitemToggleSelector = $(subitemToggleSelector)
  }

  function activate() {
    listenForEvents()
  }

  function deactivate() {
    close()
    ignoreEvents()
  }

  function listenForEvents() {
    mobileNavToggleButton.on('click', onClickMenuToggle)
    mobileNav.on('click', itemToggleSelector, onClickMenuItemToggle)
    mobileNav.on('click', subitemToggleSelector, onClickMenuSubitemToggle)
  }

  function ignoreEvents() {
    mobileNavToggleButton.off('click', onClickMenuToggle)
    mobileNav.off('click', itemToggleSelector, onClickMenuItemToggle)
  }

  function onDocumentClick(e) {
    let clicked = $(e.target)

    // Clicking outside the menu immediately closes it
    if (clicked.closest(mobileNavActiveAreaSelector).length === 0) {
      close()
      mobileNav.removeClass('mobile-nav-open')
      mobileNavToggleButton.removeClass('toggled')
    }
  }

  function onClickMenuItemToggle(e) {
    let clicked = $(e.target),
      menuItem = clicked.closest('.mobile-nav-item'),
      subMenu = menuItem.find('> .mobile-dropdown'),
      itemToggle = menuItem.find('> .mobile-nav-arrow')

    itemToggle.toggleClass('active')
    subMenu.stop(true, false).slideToggle()
  }

  function onClickMenuSubitemToggle(e) {
    let clicked = $(e.target),
      menuItem = clicked.closest('.mobile-nav-subitem'),
      subMenu = menuItem.find('> .mobile-dropdown'),
      itemToggle = menuItem.find('> .mobile-subnav-arrow')

    itemToggle.toggleClass('active')
    subMenu.stop(true, false).slideToggle()
  }

  function onClickMenuToggle(e) {
    if (mobileNav.hasClass(openClass)) {
      mobileNav.removeClass('mobile-nav-open')
      mobileNavToggleButton.removeClass('toggled')
      close()
    } else {
      mobileNav.addClass('mobile-nav-open')
      mobileNavToggleButton.addClass('toggled')
      open()
    }

    e.stopImmediatePropagation()
  }

  function open() {
    $(document).on('click', onDocumentClick)
    mobileNav.slideDown()
  }

  function close() {
    $(document).off('click', onDocumentClick)
    mobileNav.slideUp()
    $('.sub-menu', mobileNav).slideUp()
    $('.menu-item', mobileNav).removeClass('open')
  }

  document.addEventListener('DOMContentLoaded', onDocumentReady)

  $(activate)
})(jQuery)

export default MobileNavController
