$(function () {
  $('.job-gallery').each(function () {
    let searchFilter = '',
      $departmentPicker = $('.department-picker'),
      filters = [],
      countryQuery,
      departmentQuery,
      regionNames = new Intl.DisplayNames(['en'], { type: 'region' }),
      countries = [],
      departments = []

    // Initial API call, returns jobs and dropdown filter values, refactor to smaller functions
    $.get(
      'https://api.smartrecruiters.com/v1/companies/HitachiSolutions/postings?',
      function (res) {
        res.content.map((posting) => {
          $('.job-container').append(
            `<div class="job-posting"><div class="remote">${
              posting.location.remote
                ? '<span class="tooltip" aria-label="Remote roles require residency in the listed country."><img src="../assets/images/svg/remote-globe.svg" /></span>'
                : '<span />'
            }</div><div class="position">
                <a href="https://jobs.smartrecruiters.com/HitachiSolutions/${
                  posting.id
                }">${posting.name}</a>
              </div><div class="team">${
                posting.department.label
              }</div><div class="location">${regionNames.of(
              posting.location.country.toString().toUpperCase()
            )}</div></div>`
          )
          countries.push(posting.location.country)
          departments.push({
            label: posting.department.label,
            id: posting.department.id,
          })
        })

        let departmentSet = new Set()
        let uniqueDepartments = departments.filter((el) => {
          const duplicate = departmentSet.has(el.id)
          departmentSet.add(el.id)
          return !duplicate
        })
        countries.filter(getUniqueValues).map((country) => {
          let countryString = country.toString().toUpperCase()
          $('<option />', {
            value: country,
            text: regionNames.of(countryString),
          }).appendTo($('#country-picker'))
          $('<li />', {
            text: regionNames.of(countryString),
            rel: country,
            class: 'select-option',
          }).appendTo($('#country-picker').next('.select-styled').next('ul'))
        })
        uniqueDepartments.map((department) => {
          $('<option />', {
            value: department.id,
            text: department.label,
          }).appendTo($('#department-picker'))
          $('#department-picker + .select-styled + ul').append(
            `<li rel=${department.id} class="select-option">${department.label}</li>`
          )
        })

        const $countryPicker = $('.country-picker')
        const $countrySelectOption = $countryPicker
          .find('.select-options')
          .children('li')

        $countrySelectOption.on('click', function (e) {
          $countryPicker.find('.select-styled').text($(this).text())
          $countryPicker.find('select').val($(this).attr('rel'))
        })

        const $departmentPicker = $('.department-picker')
        const $departmentSelectOption = $departmentPicker
          .find('.select-options')
          .children('li')

        $departmentSelectOption.on('click', function () {
          $departmentPicker
            .find(`option[value=${$(this).attr('rel')}]`)
            .attr('selected', function (index, attr) {
              return attr == 'selected' ? null : 'selected'
            })
          $departmentPicker.find('#department-picker').change()
        })
      }
    )

    // Collects search box value for updated API call
    $(document).on('change', 'input[type="search"]', function () {
      searchFilter = $(this).val()
    })

    // Creates array of departments for updated API call
    $(document).on('change', '#department-picker', function () {
      $(this)
        .find('option:selected')
        .each(function () {
          let optionValue = $(this).attr('value')
          let optionLabel = $(this).text()
          // Only add the selected item to the array if the value doesn't exist
          if (!filters.includes(optionValue) && optionValue !== undefined) {
            $('.filter-results').append(
              `<div class="chip" data-value="${optionValue}">${optionLabel}<i class="icon icon-close-1"></i></div>`
            )
            filters.push(optionValue)
            console.log(filters)
          } else {
            return false
          }
        })
      updateDepartmentDropdown($departmentPicker)
    })

    $(document).on('click', '.chip', function () {
      removeFilterFromArray($(this))
      updateDepartmentDropdown($departmentPicker)
    })

    $(document).on('click', '#job-search', function () {
      emptyJobContainer()
      $('#country-picker')
        .find('option:selected')
        .each(function () {
          return (countryQuery = $(this).attr('value'))
        })
      departmentQuery = filters.join('&department=')

      $.get(
        `https://api.smartrecruiters.com/v1/companies/HitachiSolutions/postings?q=${searchFilter}&country=${countryQuery}&department=${departmentQuery}`,
        function (res) {
          console.log(res.content.length)
          if (!res.content.length == 0) {
            res.content.map((posting) => {
              $('.job-container').append(
                `<div class="job-posting"><div class="remote">${
                  posting.location.remote
                    ? '<img src="../assets/images/svg/remote-globe.svg" />'
                    : '<span />'
                }</div><div class="position">
                  <a href="https://jobs.smartrecruiters.com/HitachiSolutions/${
                    posting.id
                  }">${posting.name}</a>
                </div><div class="team">${
                  posting.department.label
                }</div><div class="location">${regionNames.of(
                  posting.location.country.toString().toUpperCase()
                )}</div></div>`
              )
            })
          } else {
            $('.job-container').append(
              `<div class="job-posting"><h2>No Results Found.</h2></div>`
            )
          }
        }
      )
      return false
    })

    const emptyJobContainer = () => {
      $('.job-container').empty()
    }

    const getUniqueValues = (value, index, self) => {
      return self.indexOf(value) === index
    }

    const removeFilterFromArray = (el) => {
      let filter = filters.indexOf(el.attr('data-value'))
      if (filter > -1) {
        filters.splice(filter, 1)
        el.remove()
      }
    }

    const updateDepartmentDropdown = (el) => {
      el.find('.select-styled').text(function () {
        if (filters.length === 1) {
          return `${filters.length} Team Selected`
        } else if (filters.length > 1) {
          return `${filters.length} Teams Selected`
        } else {
          return `Select Teams`
        }
      })
    }
  })
})
