$(function () {
  function pageRedirect(word) {
    window.location.href = window.location.origin + '/search?word=' + word
  }

  $('.gsearch').on(click, function () {
    pageRedirect($('#site-search-keyword').val())
  })

  $('#site-search-keyword').keypress(function (e) {
    if (e.which === 13) {
      pageRedirect($('#site-search-keyword').val)
    }
  })
})
