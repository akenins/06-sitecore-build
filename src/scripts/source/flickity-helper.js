$(document).ready(function () {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
  })

  $('.highlights').flickity({
    cellAlign: 'left',
    contain: true,
    arrowShape:
      'M72.6,48h-39l15.1-12.7c0.9-0.6,1.2-1.8,0.7-2.7c-0.6-1-1.9-1.3-2.9-0.7L26.1,48.4c-1.1,0.8-1.1,2.5,0,3.3L46.5,68c0.4,0.2,0.8,0.4,1.1,0.4c0.7,0,1.4-0.4,1.8-1.1c0.5-0.9,0.1-2-0.7-2.6L33.6,52h39.1c1.2,0,2.2-1.1,2-2.3C74.5,48.7,73.6,48,72.6,48z',
  })

  $('.challenges').flickity({
    cellAlign: 'left',
    contain: true,
  })

  $('.feature-container').flickity({
    cellAlign: 'left',
    contain: true,
    arrowShape:
      'M72.6,48h-39l15.1-12.7c0.9-0.6,1.2-1.8,0.7-2.7c-0.6-1-1.9-1.3-2.9-0.7L26.1,48.4c-1.1,0.8-1.1,2.5,0,3.3L46.5,68c0.4,0.2,0.8,0.4,1.1,0.4c0.7,0,1.4-0.4,1.8-1.1c0.5-0.9,0.1-2-0.7-2.6L33.6,52h39.1c1.2,0,2.2-1.1,2-2.3C74.5,48.7,73.6,48,72.6,48z',
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
