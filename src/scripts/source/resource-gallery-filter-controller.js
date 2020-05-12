$(function () {
  let url = new URL(document.location) // Gets current URL
  let params = new URLSearchParams(url.search) // Extracts all parameters from url string
  let tags = params.getAll('tag') // Creates an array of all "tag" parameters

  if (tags.length !== 0) {
    $('#clear-filters').append(
      `<a href="/resources" class="chip">Clear Filters</a>`
    )
  }

  tags.map((tag) => {
    $('#active-filters').append(`<span class="chip filter">${tag}</span>`)
  })

  $('.select').each(function () {
    const $selectOption = $(this).find('.select-options').children('li')

    $selectOption.on('click', function (e) {
      let $value = $(this).attr('rel')
      console.log($value)
      params.set('tag', $value)

      if ($value === 'default') {
        return false
      } else {
        window.location = `/resources-gallery?${params}`
      }

      // Swap for below once sorting by multiple tags is supported

      // if ($(this).val() === 'default') {
      //   return false
      // } else {
      //   window.location = `/resources?${params}`
      // }

      // Uncomment once sorting by multiple tags is supported
      //
      // if (tags.length === 0) {
      //   window.location = `${url}?${params}`
      // } else if ($(this).val() === 'default') {
      //   return false
      // } else {
      //   window.location = `${url}&${params}`
      // }
    })
  })
})
