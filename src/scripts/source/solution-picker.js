$(function() {
  const $solutionPicker = $('#solution-picker')

  $('#solutions').show()

  $solutionPicker.on('change', function() {
    const $value = $(this).val()
    $('div.solution-container').hide()
    $('#' + $value).show()
  })
})
