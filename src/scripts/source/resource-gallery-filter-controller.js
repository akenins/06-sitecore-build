$(function () {
  const $resourceType = $('#resource-type')
  const $resourceIndustry = $('#resource-industry')
  const $resourceSolutionArea = $('#resource-solution-area')

  const $resourceFilters = [
    $resourceType,
    $resourceIndustry,
    $resourceSolutionArea,
  ]

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

  $resourceFilters.forEach((filter) => {
    filter.on('change', function () {
      params.set('tag', $(this).val())

      // Swap for below once sorting by multiple tags is supported

      if ($(this).val() === 'default') {
        return false
      } else {
        window.location = `/resources-gallery?${params}`
      }

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
