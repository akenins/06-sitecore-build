function ClickyMenus(menu) {
  let container = menu.parentElement,
    currentMenuItem,
    i,
    len

  console.log(container)

  this.init = function () {
    menuSetup()
    document.addEventListener('click', closeOpenMenu)
  }

  function toggleOnMenuClick(e) {
    const button = e.currentTarget

    if (currentMenuItem && button !== currentMenuItem) {
      toggleSubmenu(currentMenuItem)
    }

    toggleSubmenu(button)
  }

  function toggleSubmenu(button) {
    const submenu = document.getElementById(
      button.getAttribute('aria-controls')
    )

    if ('true' === button.getAttribute('aria-expanded')) {
      button.setAttribute('aria-expanded', false)
      submenu.setAttribute('aria-hidden', true)
      currentMenuItem = false
    } else {
      button.setAttribute('aria-expanded', true)
      submenu.setAttribute('aria-hidden', false)
      preventOffScreenSubmenu(submenu)
      currentMenuItem = button
    }
  }

  function preventOffScreenSubmenu(submenu) {
    const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      parent = submenu.offsetParent,
      menuLeftEdge = parent.getBoundingClientRect().left,
      menuRightEdge = menuLeftEdge + submenu.offsetWidth

    if (menuRightEdge + 32 > screenWidth) {
      // adding 32 so it's not too close
      submenu.classList.add('sub-menu--right')
    }
  }

  function closeOnEscKey(e) {
    if (27 === e.keyCode) {
      // we're in a submenu item
      if (null !== e.target.closest('ul[aria-hidden="false"]')) {
        currentMenuItem.focus()
        toggleSubmenu(currentMenuItem)

        // we're on a parent item
      } else if ('true' === e.target.getAttribute('aria-expanded')) {
        toggleSubmenu(currentMenuItem)
      }
    }
  }

  function closeOpenMenu(e) {
    if (currentMenuItem && !e.target.closest('#' + container.id)) {
      toggleSubmenu(currentMenuItem)
    }
  }

  function menuSetup() {
    menu.classList.remove('no-js')

    menu.querySelectorAll('.submenu').forEach((submenu) => {
      const menuItem = submenu.parentElement
      console.log(menuItem)

      if ('undefined' !== typeof submenu) {
        let button = convertLinkToButton(menuItem)

        setUpAria(submenu, button)

        // bind event listener to button
        button.addEventListener('click', toggleOnMenuClick)
        menu.addEventListener('keyup', closeOnEscKey)
      }
    })
  }

  function convertLinkToButton(menuItem) {
    const link = menuItem.getElementsByTagName('a')[0],
      linkHTML = link.innerHTML,
      linkAtts = link.attributes,
      button = document.createElement('button')

    if (null !== link) {
      // set button content and attributes
      button.innerHTML = linkHTML.trim()
      for (i = 0, len = linkAtts.length; i < len; i++) {
        let attr = linkAtts[i]
        if ('href' !== attr.name) {
          button.setAttribute(attr.name, attr.value)
        }
      }

      menuItem.replaceChild(button, link)
    }

    return button
  }

  function setUpAria(submenu, button) {
    const submenuId = submenu.getAttribute('id')

    let id
    if (null === submenuId) {
      id =
        button.textContent.trim().replace(/\s+/g, '-').toLowerCase() +
        '-submenu'
    } else {
      id = menuItemId + '-submenu'
    }

    // set button ARIA
    button.setAttribute('aria-controls', id)
    button.setAttribute('aria-expanded', false)

    // set submenu ARIA
    submenu.setAttribute('id', id)
    submenu.setAttribute('aria-hidden', true)
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.clicky-nav-items')

  menus.forEach((menu) => {
    let clickyMenu = new ClickyMenus(menu)
    clickyMenu.init()
  })
})
