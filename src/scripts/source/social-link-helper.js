let SocialLinkHelper = (function ($) {
  const popupWidth = 768
  const popupHeight = popupWidth / (16 / 9)
  let popoverLinkSelector = '.share',
    popoverLink,
    socialShareLinkSelector = '.social-share-link',
    socialShareLink,
    sharePopoverSelector = '.share-popover',
    sharePopover

  function onDocumentReady() {
    popoverLink = $(popoverLinkSelector)
    socialShareLink = $(socialShareLinkSelector)
    sharePopover = $(sharePopoverSelector)
  }

  function activate() {
    listenForEvents()
  }

  function listenForEvents() {
    socialShareLink.on('click', onClickSocialLink)
    popoverLink.on('click', showSocialLinkPopover)
  }

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
    $(this).find(sharePopover).fadeToggle(100)
  }

  jQuery(document).mouseup(function (e) {
    if (!popoverLink.is(e.target) && popoverLink.has(e.target).length === 0) {
      popoverLink.find(sharePopover).fadeOut(100)
    }
  })

  document.addEventListener('DOMContentLoaded', onDocumentReady)
  $(activate)
})(jQuery)

export default SocialLinkHelper
