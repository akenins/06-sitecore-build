$(function() {
  const popupWidth = 768
  const popupHeight = popupWidth / (16 / 9)
  let sharePopoverLink = $('.share')

  jQuery(document).on('click', '.social-share-link', onClickSocialLink)
  jQuery(document).on('click', '.share', showSocialLinkPopover)

  function onClickSocialLink(e) {
    let clicked = e.currentTarget

    e.preventDefault()

    window.open(
      clicked.href,
      '_blank',
      `width=${popupWidth}, height=${popupHeight}`
    )
    return false
  }

  function showSocialLinkPopover() {
    sharePopoverLink.children('.share-popover').fadeToggle(100)
  }

  jQuery(document).mouseup(function(e) {
    if (
      !sharePopoverLink.is(e.target) &&
      sharePopoverLink.has(e.target).length === 0
    ) {
      sharePopoverLink.children('.share-popover').fadeOut(100)
    }
  })
})
