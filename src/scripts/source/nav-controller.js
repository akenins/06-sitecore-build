let NavController = (function($) {
  let mainMenu,
    mainMenuSelector = '.menu.nav-items, .menu.utility-nav-items',
    itemSelector = 'li.has-dropdown',
    subItemSelector = '.menu-item.sub-item',
    searchForm,
    searchFormSelector = '.global-site-search',
    displaySearchSelector = '.open-global-search',
    hideSearchSelector = '.close-global-search',
    defaultItem,
    activeItem,
    showItemDelay = 150,
    hideItemDelay = 300,
    hideItemTimeout,
    showItemTimeout,
    fadeOptions = {
      duration: 300,
      easing: 'swing',
    }

  function onDocumentReady() {
    mainMenu = $(mainMenuSelector)
    searchForm = $(searchFormSelector)

    $(subItemSelector).hover(
      function() {
        $(this).addClass('active')
      },
      function() {
        $(this).removeClass('active')
      }
    )
  }

  function activate() {
    listenForEvents()
  }

  function deactivate() {
    setActiveItem(null)
    ignoreEvents()
  }

  function listenForEvents() {
    var doc = $(document)
    mainMenu.on('mouseenter', itemSelector, onMouseEnterItem)
    mainMenu.on('mouseleave', itemSelector, onMouseLeaveItem)
    $(displaySearchSelector).on('click', onClickDisplaySearch)
    doc.on('click touchend', onDocumentClick)
    doc.on('click', hideSearchSelector, onClickHideSearch)
    mainMenu.on('touchend', itemSelector, onTouchItem)
    $(window).on('scroll', onScroll)
  }

  function ignoreEvents() {
    var doc = $(document)
    mainMenu.off('mouseenter', itemSelector, onMouseEnterItem)
    mainMenu.off('mouseleave', itemSelector, onMouseLeaveItem)
    $(displaySearchSelector).off('click', onClickDisplaySearch)
    doc.off('click touchend', onDocumentClick)
    doc.off('click', hideSearchSelector, onClickHideSearch)
    mainMenu.off('touchend', itemSelector, onTouchItem)
    $(window).off('scroll', onScroll)
  }

  function onScroll() {
    setActiveItem(null)
  }

  function onTouchItem(e) {
    var touchedTopLevelItem = $(e.currentTarget)
    var subnav = touchedTopLevelItem.find('.dropdown')

    // On touch devices, when I touch a top-level item it should
    // display the subitem. If it's already doing that, it should
    // follow the link
    if (subnav.length > 0 && !subnav.is(':visible')) {
      setActiveItem(touchedTopLevelItem)

      e.preventDefault()
      return false
    }
  }

  function onClickDisplaySearch() {
    searchForm.fadeIn(null, function() {
      $('#site-search-keyword').focus()
    })
  }

  function onClickHideSearch() {
    searchForm.fadeOut()

    return false
  }

  function onDocumentClick(e) {
    var clicked = $(e.target)

    //Clicking outside the main menu immediately closes the active item
    if (clicked.closest(mainMenuSelector).length === 0) {
      setActiveItem(null)
      onClickHideSearch()
    }
  }

  function onMouseEnterItem(e) {
    var item = $(e.currentTarget)
    clearTimeout(hideItemTimeout)
    showItemTimeout = setTimeout(function() {
      setActiveItem(item)
    }, showItemDelay)
  }

  function onMouseLeaveItem(e) {
    clearTimeout(showItemTimeout)
    hideItemTimeout = setTimeout(function() {
      setActiveItem(null)
    }, hideItemDelay)
  }

  function setActiveItem(menuItem) {
    clearTimeout(hideItemTimeout)

    if (activeItem !== menuItem) {
      if (activeItem) {
        activeItem.find('.primary-link').removeClass('active')
        activeItem
          .find('.dropdown')
          .stop(true, false)
          .fadeOut(fadeOptions)
      }
      if (menuItem) {
        menuItem.find('.primary-link').addClass('active')
        menuItem
          .find('.dropdown')
          .stop(true, false)
          .fadeIn(fadeOptions)
      }
      activeItem = menuItem
    }
  }

  $(onDocumentReady)
  $(activate)
})(jQuery)

export default NavController
