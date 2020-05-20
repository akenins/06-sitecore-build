let MobileSearchController = (function ($) {
  let mobileSearch,
    mobileSearchSelector = '#mobile-search',
    mobileSearchToggleButton,
    mobileSearchToggleButtonSelector = '#mobile-search-toggle',
    mobileSearchActiveAreaSelector = '.mobile-search',
    openClass = 'mobile-search-open'

  function onDocumentReady() {
    mobileSearch = $(mobileSearchSelector)
    mobileSearchToggleButton = $(mobileSearchToggleButtonSelector)
  }

  function activate() {
    listenForEvents()
  }

  function listenForEvents() {
    mobileSearchToggleButton.on('click', onClickSearchToggle)
  }

  function onDocumentClick(e) {
    let clicked = $(e.target)
    if (clicked.closest(mobileSearchActiveAreaSelector).length === 0) {
      close()
      mobileSearch.removeClass(openClass)
    }
  }

  function onClickSearchToggle(e) {
    if (mobileSearch.hasClass(openClass)) {
      mobileSearch.removeClass(openClass)
      close()
    } else {
      mobileSearch.addClass(openClass)
      open()
    }

    e.stopImmediatePropagation()
  }

  function open() {
    $(document).on('click', onDocumentClick)
    mobileSearch.slideDown()
  }

  function close() {
    $(document).off('click', onDocumentClick)
    mobileSearch.slideUp()
  }

  document.addEventListener('DOMContentLoaded', onDocumentReady)

  $(activate)
})(jQuery)

export default MobileSearchController
