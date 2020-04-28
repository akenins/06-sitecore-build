$(document).ready(function () {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
  })

  $('.highlights').flickity({
    cellAlign: 'left',
    contain: true,
  })

  $('.challenges').flickity({
    cellAlign: 'left',
    contain: true,
  })

  $('.feature-container').flickity({
    cellAlign: 'left',
    contain: true,
  })

  $('.timeline-container').flickity({
    pageDots: false,
    prevNextButtons: true,
  })

  $('.timeline-nav').flickity({
    asNavFor: '.timeline-container',
    prevNextButtons: false,
    pageDots: false,
    draggable: false,
  })

  const $carousel = $('.carousel')
  const $cellButtonGroup = $('.button-group--cells')
  const $prev = $('.button--previous')
  const $next = $('.button--next')
  const $pagers = $('.button-group.button-group--cells')

  // generate numbered buttons equal to the number of slides
  for (let i = 1; i <= $carousel.find('.carousel-cell').length; i++) {
    $pagers.append('<button class="button">' + i + '</button>')
  }

  // add attributes and classes after navigation buttons have been initialized
  $carousel.on('ready.flickity', function () {
    $prev.attr('disabled', 'disabled')
    $pagers.children(':first-child').addClass('is-selected')
  })

  $carousel.flickity({
    prevNextButtons: false,
    pageDots: false,
  })

  const flkty = $carousel.data('flickity')
  const $pager = $pagers.find('button')

  $carousel.on('select.flickity', function () {
    $pager.filter('.is-selected').removeClass('is-selected')
    $pager.eq(flkty.selectedIndex).addClass('is-selected')

    // enable/disable next/previous buttons
    if (!flkty.slides[flkty.selectedIndex - 1]) {
      $prev.attr('disabled', 'disabled')
      $next.removeAttr('disabled')
    } else if (!flkty.slides[flkty.selectedIndex + 1]) {
      $next.attr('disabled', 'disabled')
      $prev.removeAttr('disabled')
    } else {
      $prev.removeAttr('disabled')
      $next.removeAttr('disabled')
    }
  })

  $cellButtonGroup.on('click', '.button', function () {
    const index = $(this).index()
    $carousel.flickity('select', index)
  })

  // previous
  $prev.on('click', function () {
    $carousel.flickity('previous')
  })

  // next
  $next.on('click', function () {
    $carousel.flickity('next')
  })
})
