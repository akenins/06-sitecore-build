let header = document.getElementById('global-header')
let headroomOptions = {
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
