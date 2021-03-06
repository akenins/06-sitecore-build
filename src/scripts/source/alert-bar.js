let alertBar = $('#alert-bar'),
  alertBarCloseButton = $('#alert-bar .alert-close'),
  alertCookie = Cookies.get('hitachi-alert'),
  header = document.getElementById('global-header'),
  hero = $('.hero'),
  blogHero = $('.blog-post'),
  initialHeight = header.offsetHeight

function onDocumentReady() {
  //Hide alert bar if cookie is set.
  if (!Cookies.set('hitachi-alert')) {
    alertBar.show()
    addAlertClasses()
  }
}

function closeAlertBar() {
  alertBar.slideUp()
  removeAlertClasses()
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

function addAlertClasses() {
  $(header).addClass('alert')
  hero.addClass('alert')
  blogHero.addClass('alert')
}

function removeAlertClasses() {
  $(header).removeClass('alert')
  hero.removeClass('alert')
  blogHero.removeClass('alert')
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
