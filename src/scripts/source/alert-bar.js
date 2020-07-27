let alertBar = $('#alert-bar'),
  alertBarCloseButton = $('#alert-bar .alert-close'),
  alertCookie = Cookies.get('hitachi-alert'),
  header = document.getElementById('global-header'),
  hero = $('.hero .container .heading-container'),
  initialHeight = header.offsetHeight

function onDocumentReady() {
  //Hide alert bar if cookie is set.
  $(header).addClass('alert')
  if (Cookies.set('hitachi-alert')) {
    alertBar.hide()
  } else {
    alertBar.show()
    hero.addClass('alert')
  }
  resetHeaderHeight()
  console.log(hero)
}

function closeAlertBar() {
  alertBar.slideUp()
  $(header).removeClass('alert')
  hero.removeClass('alert')
}

function setAlertBarDisabledCookie() {
  if (alertCookie === undefined) {
    // Set cookie so we don't see the alert on every page load
    Cookies.set('hitachi-alert', '1')
    setTimeout(function () {
      alertBar.addClass('disabled')
    }, 500)
  }
}

function resetHeaderHeight() {
  initialHeight = header.offsetHeight
  console.log(initialHeight)
  $('').css('background-color', 'green')
}

alertBarCloseButton.on('click', function (e) {
  if (e.currentTarget.tagName === 'a') {
    e.preventDefault()
  }
  closeAlertBar()
  setAlertBarDisabledCookie()
  return false
})

$(onDocumentReady)
