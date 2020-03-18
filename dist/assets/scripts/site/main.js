if (IntersectionObserver) {
  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
        entry.target.classList.add('animated');
      } else if (!entry.isIntersecting) {
        entry.classList.remove('animated');
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.2
  });
  const items = document.querySelectorAll('img[data-ios]');
  items.forEach(item => {
    item.classList.add('animation');
    observer.observe(item);
  });
}
$(document).ready(function () {
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true
  });
  $('.highlights').flickity({
    cellAlign: 'left',
    contain: true
  });
  $('.challenges').flickity({
    cellAlign: 'left',
    contain: 'true'
  });
  $('.feature-container').flickity({
    cellAlign: 'left',
    contain: 'true'
  });
  const $carousel = $('.carousel');
  const $cellButtonGroup = $('.button-group--cells');
  const $prev = $('.button--previous');
  const $next = $('.button--next');
  const $pagers = $('.button-group.button-group--cells'); // generate numbered buttons equal to the number of slides

  for (i = 1; i <= $carousel.children.length; i++) {
    $pagers.append('<button class="button">' + i + '</button>');
  } // add attributes and classes after navigation buttons have been initialized


  $carousel.on('ready.flickity', function () {
    $prev.attr('disabled', 'disabled');
    $pagers.children(':first-child').addClass('is-selected');
  });
  $carousel.flickity({
    prevNextButtons: false,
    pageDots: false
  });
  const flkty = $carousel.data('flickity');
  const $pager = $pagers.find('button');
  $carousel.on('select.flickity', function () {
    $pager.filter('.is-selected').removeClass('is-selected');
    $pager.eq(flkty.selectedIndex).addClass('is-selected'); // enable/disable next/previous buttons

    if (!flkty.slides[flkty.selectedIndex - 1]) {
      $prev.attr('disabled', 'disabled');
      $next.removeAttr('disabled');
    } else if (!flkty.slides[flkty.selectedIndex + 1]) {
      $next.attr('disabled', 'disabled');
      $prev.removeAttr('disabled');
    } else {
      $prev.removeAttr('disabled');
      $next.removeAttr('disabled');
    }
  });
  $cellButtonGroup.on('click', '.button', function () {
    const index = $(this).index();
    $carousel.flickity('select', index);
  }); // previous

  $prev.on('click', function () {
    $carousel.flickity('previous');
  }); // next

  $next.on('click', function () {
    $carousel.flickity('next');
  });
});
$(document).ready(function () {
  let inputFieldSelector = $('input.mktoField'),
      selectFields = document.getElementsByTagName('select');
  inputFieldSelector.on('focus blur', toggleFocus);
  inputFieldSelector.on('change keyup', checkForMktoFieldValue);
  checkForChildNodes();

  function toggleFocus(e) {
    if (e.type == 'focus') {
      $(this).siblings('.mktoLabel').addClass('mktoFieldFocused');
    } else {
      $(this).siblings('.mktoLabel').removeClass('mktoFieldFocused');
    }
  }

  function checkForMktoFieldValue() {
    if (inputFieldSelector.val().length > 0) {
      $(this).siblings('.mktoLabel').addClass('mktoFieldContainsData');
    } else {
      $(this).siblings('.mktoLabel').removeClass('mktoFieldContainsData');
    }
  }

  function checkForChildNodes() {
    if (selectFields.length > 0) {
      $('select').siblings('.mktoLabel').addClass('mktoFieldContainsData');
    }
  }
});
const globalController = function ($) {
  const global = {
    mpYouTubeOpts: {
      type: 'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: '//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0'
          },
          youtube_short: {
            index: 'youtu.be/',
            id: 'youtu.be/',
            src: '//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0'
          }
        }
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    },
    // Init global properties and actions: run on page ready
    init: function () {
      this.videomodals();
      this.inlinemodals();
    },
    // Activate Video Modals
    videomodals: function () {
      $('.video-link').magnificPopup(global.mpYouTubeOpts);
    },
    inlinemodals: function () {
      $('.inline-mfp').magnificPopup({
        type: 'inline',
        midClick: true
      });
    }
  };
  return global;
}(jQuery);

jQuery(document).ready(function () {
  globalController.init();
});
// $(document).ready(function() {
//   let mobileNav,
//     mobileNavSelector = '#mobile-nav',
//     mobileNavToggleButton,
//     mobileNavToggleButtonSelector = '#mobile-nav-toggle',
//     mobileNavActiveAreaSelector = '.mobile-nav-dropdown',
//     itemToggleSelector = '.mobile-nav-arrow',
//     openClass = 'mobile-nav-open',
//     body = $(document.body)
//   function onDocumentReady() {
//     mobileNav = $(mobileNavSelector)
//     mobileNavToggleButton = $(mobileNavToggleButtonSelector)
//     console.log('running')
//   }
//   function activate() {
//     listenForEvents()
//   }
//   function deactivate() {
//     close()
//     ignoreEvents()
//   }
//   function listenForEvents() {
//     mobileNavToggleButton.on('click', onClickMenuToggle)
//     mobileNav.on('click', itemToggleSelector, onClickMenuItemToggle)
//   }
//   function ignoreEvents() {
//     mobileNavToggleButton.off('click', onClickMenuToggle)
//     mobileNav.off('click', itemToggleSelector, onClickMenuItemToggle)
//   }
//   function onDocumentClick(e) {
//     let clicked = $(e.target)
//     // Clicking outside the menu immediately closes it
//     if (clicked.closest(mobileNavActiveAreaSelector).length === 0) {
//       close()
//     }
//   }
//   function onClickMenuItemToggle(e) {
//     let clicked = $(e.target),
//       menuItem = clicked.closest('.menu-item'),
//       subMenu = menuItem.find('> .sub-menu')
//     menuItem.toggleClass('open')
//     subMenu.stop(true, false).slideToggle
//   }
//   function onClickMenuToggle(e) {
//     if (body.hasClass(openClass)) {
//       close()
//     } else {
//       open()
//     }
//     e.stopImmediatePropagation()
//   }
//   function open() {
//     $(document).on('click', onDocumentClick)
//     body.addClass(openClass)
//   }
//   function close() {
//     $(document).off('click', onDocumentClick)
//     body.removeClass(openClass)
//     $('.sub-menu', mobileNav).slideUp()
//     $('.menu-item', mobileNav).removeClass('open')
//   }
//   document.addEventListener('DOMContentLoaded', onDocumentReady)
//   return {
//     activate,
//     deactivate,
//   }
// })
let mainMenu,
    mainMenuSelector = '.menu.nav-items, .menu.utility-nav-items',
    itemSelector = 'li.has-dropdown',
    subItemSelector = '.menu-item.sub-item',
    searchForm,
    searchFormSelector = '.global-site-search',
    displaySearchSelector = '.open-global-search',
    hideSearchSelector = '.close-global-search',
    defaultItem,
    activeItem,
    showItemDelay = 150,
    hideItemDelay = 300,
    hideItemTimeout,
    showItemTimeout,
    fadeOptions = {
  duration: 300,
  easing: 'swing'
};

function onDocumentReady() {
  mainMenu = $(mainMenuSelector);
  searchForm = $(searchFormSelector);
  $(subItemSelector).hover(function () {
    $(this).addClass('active');
  }, function () {
    $(this).removeClass('active');
  });
}

function activate() {
  listenForEvents();
}

function deactivate() {
  setActiveItem(null);
  ignoreEvents();
}

function listenForEvents() {
  var doc = $(document);
  mainMenu.on('mouseenter', itemSelector, onMouseEnterItem);
  mainMenu.on('mouseleave', itemSelector, onMouseLeaveItem);
  $(displaySearchSelector).on('click', onClickDisplaySearch);
  doc.on('click touchend', onDocumentClick);
  doc.on('click', hideSearchSelector, onClickHideSearch);
  mainMenu.on('touchend', itemSelector, onTouchItem);
  $(window).on('scroll', onScroll);
}

function ignoreEvents() {
  var doc = $(document);
  mainMenu.off('mouseenter', itemSelector, onMouseEnterItem);
  mainMenu.off('mouseleave', itemSelector, onMouseLeaveItem);
  $(displaySearchSelector).off('click', onClickDisplaySearch);
  doc.off('click touchend', onDocumentClick);
  doc.off('click', hideSearchSelector, onClickHideSearch);
  mainMenu.off('touchend', itemSelector, onTouchItem);
  $(window).off('scroll', onScroll);
}

function onScroll() {
  setActiveItem(null);
}

function onTouchItem(e) {
  var touchedTopLevelItem = $(e.currentTarget);
  var subnav = touchedTopLevelItem.find('.dropdown'); // On touch devices, when I touch a top-level item it should
  // display the subitem. If it's already doing that, it should
  // follow the link

  if (subnav.length > 0 && !subnav.is(':visible')) {
    setActiveItem(touchedTopLevelItem);
    e.preventDefault();
    return false;
  }
}

function onClickDisplaySearch() {
  searchForm.fadeIn(null, function () {
    $('#site-search-keyword').focus();
  });
}

function onClickHideSearch() {
  searchForm.fadeOut();
  return false;
}

function onDocumentClick(e) {
  var clicked = $(e.target); //Clicking outside the main menu immediately closes the active item

  if (clicked.closest(mainMenuSelector).length === 0) {
    setActiveItem(null);
    onClickHideSearch();
  }
}

function onMouseEnterItem(e) {
  var item = $(e.currentTarget);
  clearTimeout(hideItemTimeout);
  showItemTimeout = setTimeout(function () {
    setActiveItem(item);
  }, showItemDelay);
}

function onMouseLeaveItem(e) {
  clearTimeout(showItemTimeout);
  hideItemTimeout = setTimeout(function () {
    setActiveItem(null);
  }, hideItemDelay);
}

function setActiveItem(menuItem) {
  clearTimeout(hideItemTimeout);

  if (activeItem !== menuItem) {
    if (activeItem) {
      activeItem.find('.primary-link').removeClass('active');
      activeItem.find('.dropdown').stop(true, false).fadeOut(fadeOptions);
    }

    if (menuItem) {
      menuItem.find('.primary-link').addClass('active');
      menuItem.find('.dropdown').stop(true, false).fadeIn(fadeOptions);
    }

    activeItem = menuItem;
  }
}

$(onDocumentReady);
$(activate);
$(function () {
  const popupWidth = 768;
  const popupHeight = popupWidth / (16 / 9);
  let sharePopoverLink = $('.share');
  jQuery(document).on('click', '.social-share-link', onClickSocialLink);
  jQuery(document).on('click', '.share', showSocialLinkPopover);

  function onClickSocialLink(e) {
    let clicked = e.currentTarget;
    e.preventDefault();
    window.open(clicked.href, '_blank', `width=${popupWidth}, height=${popupHeight}`);
    return false;
  }

  function showSocialLinkPopover() {
    sharePopoverLink.children('.share-popover').fadeToggle(100);
  }

  jQuery(document).mouseup(function (e) {
    if (!sharePopoverLink.is(e.target) && sharePopoverLink.has(e.target).length === 0) {
      sharePopoverLink.children('.share-popover').fadeOut(100);
    }
  });
});
$(function () {
  const $solutionPicker = $('#solution-picker');
  $('#solutions').show();
  $solutionPicker.on('change', function () {
    const $value = $(this).val();
    $('div.solution-container').hide();
    $('#' + $value).show();
  });
});
let header = document.getElementById('global-header');
let headroomOptions = {
  offset: 0,
  tolerance: 10,
  classes: {
    initial: 'headroom animated',
    pinned: 'headroom--pinned',
    unpinned: 'headroom--unpinned'
  }
};
let headroom = new Headroom(header, headroomOptions);
headroom.init();
//# sourceMappingURL=main.js.map
