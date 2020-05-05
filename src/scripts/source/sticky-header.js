let stickyHeader = (function ($) {
  let headroom,
    header = document.getElementById('global-header')

  function init() {
    initHeadroom()
  }

  function initHeadroom() {
    headroom = new Headroom(header, {
      offset: 50,
      tolerance: 10,
      classes: {
        initial: 'headroom animated',
        pinned: 'headroom--pinned',
        unpinned: 'headroom--unpinned',
      },
    })

    headroom.init()
  }

  document.addEventListener('DOMContentLoaded', init, false)
})(jQuery)

export default stickyHeader
