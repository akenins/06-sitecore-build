$(document).ready(function () {
  $('#easyPaginate').easyPaginate({
    paginateElement: 'article',
    elementsPerPage: 1,
    effect: 'default',
    condense: true,
  })

  $('.easyPaginateNav').appendTo('#easyPagenatNav')
})
