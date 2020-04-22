$(function () {
  const urlParameter = location.href.split('?tag=')[1]
  $(
    `.filter-column.filter-tab a[href^="/resources-gallery?tag=${urlParameter}"]`
  ).addClass('active')
})
