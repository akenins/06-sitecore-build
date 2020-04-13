$(document).ready(function () {
  $('#easyPaginate').easyPaginate({
    paginateElement: 'article',
    elementsPerPage: 1,
    effect: 'default',
  })

  $('.easyPaginateNav').appendTo('#easyPagenatNav')
})
