$(function () {
  const $hiddenSelect = $('#regions')
  const $regionSelect = $('.region-item')
  const $regionOptions = $regionSelect.find('.select-options')
  const $regionOption = $regionOptions.children('li')

  $regionOption.on('click', function (e) {
    let $value = $(this).attr('rel')
    console.log($regionOptions.find(`option[value=${$value}]`)) //.attr('selected')

    $hiddenSelect.change()
  })

  $hiddenSelect.on('change', function () {
    console.log('changed')
  })
})
