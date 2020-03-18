// $(document).ready(function() {
//   let mobileNav,
//     mobileNavSelector = '#mobile-nav',
//     mobileNavToggleButton,
//     mobileNavToggleButtonSelector = '#mobile-nav-toggle',
//     mobileNavActiveAreaSelector = '.mobile-nav-dropdown',
//     itemToggleSelector = '.mobile-nav-arrow',
//     openClass = 'mobile-nav-open',
//     body = $(document.body)

//   function onDocumentReady() {
//     mobileNav = $(mobileNavSelector)
//     mobileNavToggleButton = $(mobileNavToggleButtonSelector)
//     console.log('running')
//   }

//   function activate() {
//     listenForEvents()
//   }

//   function deactivate() {
//     close()
//     ignoreEvents()
//   }

//   function listenForEvents() {
//     mobileNavToggleButton.on('click', onClickMenuToggle)
//     mobileNav.on('click', itemToggleSelector, onClickMenuItemToggle)
//   }

//   function ignoreEvents() {
//     mobileNavToggleButton.off('click', onClickMenuToggle)
//     mobileNav.off('click', itemToggleSelector, onClickMenuItemToggle)
//   }

//   function onDocumentClick(e) {
//     let clicked = $(e.target)

//     // Clicking outside the menu immediately closes it
//     if (clicked.closest(mobileNavActiveAreaSelector).length === 0) {
//       close()
//     }
//   }

//   function onClickMenuItemToggle(e) {
//     let clicked = $(e.target),
//       menuItem = clicked.closest('.menu-item'),
//       subMenu = menuItem.find('> .sub-menu')

//     menuItem.toggleClass('open')
//     subMenu.stop(true, false).slideToggle
//   }

//   function onClickMenuToggle(e) {
//     if (body.hasClass(openClass)) {
//       close()
//     } else {
//       open()
//     }

//     e.stopImmediatePropagation()
//   }

//   function open() {
//     $(document).on('click', onDocumentClick)
//     body.addClass(openClass)
//   }

//   function close() {
//     $(document).off('click', onDocumentClick)
//     body.removeClass(openClass)
//     $('.sub-menu', mobileNav).slideUp()
//     $('.menu-item', mobileNav).removeClass('open')
//   }

//   document.addEventListener('DOMContentLoaded', onDocumentReady)

//   return {
//     activate,
//     deactivate,
//   }
// })
