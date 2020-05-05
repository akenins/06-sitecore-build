let header = document.getElementById('global-header')

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

document.addEventListener('DOMContentLoaded', initHeadroom)
