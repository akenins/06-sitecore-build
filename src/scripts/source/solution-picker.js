$(function () {
  const $solutionPicker = $('.solution-picker')
  const $selectOptions = $solutionPicker.find('.select-options')
  const $selectOption = $selectOptions.children('li')

  $selectOption.on('click', function (e) {
    let $value = $(this).attr('rel')
    $('div.solution-container').hide()
    $(`#${$value}`).show()
  })
})
