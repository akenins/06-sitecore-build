$(document).ready(function () {
  let $gSearch = $('.gsearch'),
    $searchKeyword = $('#site-search-keyword')

  function pageRedirect(word) {
    window.location.href = window.location.origin + '/search?word=' + word
  }

  $gSearch.on('click', function () {
    pageRedirect($searchKeyword.val())
  })

  $searchKeyword.keypress(function (e) {
    if (e.which == 13) {
      pageRedirect($searchKeyword.val())
    }
  })
})
