function stickyHeader() {
  let header = document.getElementById('global-header'),
    initialHeight = header.offsetHeight,
    headroomOptions = {
      offset: 0,
      tolerance: 10,
      classes: {
        initial: 'headroom animated',
        pinned: 'headroom--pinned',
        unpinned: 'headroom--unpinned',
      },
    }

  let headroom = new Headroom(header, headroomOptions)

  headroom.init()

  // Alert Bar
  let alertBar = $('#alert-bar')

  //Hide alert bar if cookie is set.
  if (Cookies.set('hitachi-alert')) {
    alertBar.hide()
    alertBar.addClass('disabled')
  } else {
    alertBar.show()
  }

  $('#alert-bar .alert-close').on('click', function (e) {
    if (e.currentTarget.tagName === 'a') {
      e.preventDefault()
    }
    $('#alert-bar').slideUp()
    let alertCookie = Cookies.get('hitachi-alert')
    if (alertCookie === undefined) {
      // Set cookie so we don't see the alert on every page load
      Cookies.set('hitachi-alert', '1')
      setTimeout(function () {
        alertBar.addClass('disabled')
      }, 500)
    }
    return false
  })
}

document.addEventListener('DOMContentLoaded', stickyHeader)
