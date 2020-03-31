$(document).ready(function() {
  $('#easyPaginate').easyPaginate({
    paginateElement: 'article',
    elementsPerPage: 5,
    effect: 'climb',
  })

  $('.easyPaginateNav').appendTo('#easyPagenatNav')
})
