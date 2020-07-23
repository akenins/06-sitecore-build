let alertBar = $('#alert-bar'),
  alertBarCloseButton = $('#alert-bar .alert-close'),
  alertCookie = Cookies.get('hitachi-alert'),
  header = document.getElementById('global-header'),
  initialHeight = header.offsetHeight

function onDocumentReady() {
  //Hide alert bar if cookie is set.
  $(header).addClass('alert')
  //   if (Cookies.set('hitachi-alert')) {
  //     alertBar.hide()
  //   } else {
  //     alertBar.show()
  //   }
  //   resetHeaderHeight()
}

function closeAlertBar() {
  alertBar.slideUp()
  $(header).removeClass('alert')
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
