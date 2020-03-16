$(document).ready(function() {
  let inputFieldSelector = $('input.mktoField'),
    selectFields = document.getElementsByTagName('select')

  inputFieldSelector.on('focus blur', toggleFocus)
  inputFieldSelector.on('change keyup', checkForMktoFieldValue)
  checkForChildNodes()

  function toggleFocus(e) {
    if (e.type == 'focus') {
      $(this)
        .siblings('.mktoLabel')
        .addClass('mktoFieldFocused')
    } else {
      $(this)
        .siblings('.mktoLabel')
        .removeClass('mktoFieldFocused')
    }
  }

  function checkForMktoFieldValue() {
    if (inputFieldSelector.val().length > 0) {
      $(this)
        .siblings('.mktoLabel')
        .addClass('mktoFieldContainsData')
    } else {
      $(this)
        .siblings('.mktoLabel')
        .removeClass('mktoFieldContainsData')
    }
  }

  function checkForChildNodes() {
    if (selectFields.length > 0) {
      $('select')
        .siblings('.mktoLabel')
        .addClass('mktoFieldContainsData')
    }
  }
})
