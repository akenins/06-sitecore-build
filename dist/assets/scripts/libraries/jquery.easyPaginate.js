;(function ($) {
  $.fn.easyPaginate = function (options) {
    var defaults = {
      paginateElement: 'li',
      hashPage: 'page',
      elementsPerPage: 10,
      effect: 'default',
      slideOffset: 200,
      firstButton: true,
      firstButtonText: '<<',
      lastButton: true,
      lastButtonText: '>>',
      prevButton: true,
      prevButtonText: '<',
      nextButton: true,
      nextButtonText: '>',
    }

    return this.each(function (instance) {
      var plugin = {}
      plugin.el = $(this)
      plugin.el.addClass('easyPaginateList')

      plugin.settings = {
        pages: 0,
        objElements: Object,
        currentPage: 1,
      }

      var getNbOfPages = function () {
        return Math.ceil(
          plugin.settings.objElements.length / plugin.settings.elementsPerPage
        )
      }

      var displayNav = function () {
        htmlNav = '<div class="easyPaginateNav pgn-button-row">'
        const {
          firstButton,
          firstButtonText,
          prevButton,
          prevButtonText,
          pages,
          hashPage,
          nextButton,
          nextButtonText,
          lastButton,
          lastButtonText,
        } = plugin.settings

        if (firstButton) {
          htmlNav += `<a href="#${hashPage}:1" title="First page" rel="1" class="first pgn-button pgn-button--previous">${firstButtonText}</a>`
        }

        if (prevButton) {
          htmlNav += `<a href="" title="Previous" class="prev pgn-button pgn-button--previous">${prevButtonText}</a>`
        }

        if (pages >= 10) {
          for (i = 1; i <= pages; i++) {
            if (i <= 6 || i >= pages - 1) {
              htmlNav += `<a href="#${hashPage}:${i}" title="Page ${i}" rel="${i}" class="page pgn-button">${i}</a>`
            } else if (i === 7) {
              htmlNav += `<a href="javascript:void(0);" class="pgn-button">&hellip;</a>`
            }
          }
        } else {
          for (i = 1; i <= pages; i++) {
            htmlNav += `<a href="#${hashPage}:${i}" title="Page ${i}" rel="${i}" class="page pgn-button">${i}</a>`
          }
        }

        if (nextButton) {
          htmlNav += `<a href="" title="Next" class="next pgn-button pgn-button--next">${nextButtonText}</a>`
        }

        if (lastButton) {
          htmlNav += `<a href="#${hashPage}:${pages}" title="First page" rel="${pages}" class="first pgn-button pgn-button--previous">${lastButtonText}</a>`
        }

        htmlNav += '</div>'
        plugin.nav = $(htmlNav)
        plugin.nav.css({
          width: plugin.el.width(),
        })
        plugin.el.after(plugin.nav)

        var elSelector = '#' + plugin.el.get(0).id + ' + '
        $(
          elSelector +
            ' .easyPaginateNav a.page,' +
            elSelector +
            ' .easyPaginateNav a.first,' +
            elSelector +
            ' .easyPaginateNav a.last'
        ).on('click', function (e) {
          e.preventDefault()
          displayPage($(this).attr('rel'))
        })

        $(elSelector + ' .easyPaginateNav a.prev').on('click', function (e) {
          e.preventDefault()
          page =
            plugin.settings.currentPage > 1
              ? parseInt(plugin.settings.currentPage) - 1
              : 1
          displayPage(page)
        })

        $(elSelector + ' .easyPaginateNav a.next').on('click', function (e) {
          e.preventDefault()
          page =
            plugin.settings.currentPage < plugin.settings.pages
              ? parseInt(plugin.settings.currentPage) + 1
              : plugin.settings.pages
          displayPage(page)
        })
      }

      var displayPage = function (page, forceEffect) {
        if (plugin.settings.currentPage != page) {
          plugin.settings.currentPage = parseInt(page)
          offsetStart = (page - 1) * plugin.settings.elementsPerPage
          offsetEnd = page * plugin.settings.elementsPerPage
          if (typeof forceEffect != 'undefined') {
            eval(
              'transition_' +
                forceEffect +
                '(' +
                offsetStart +
                ', ' +
                offsetEnd +
                ')'
            )
          } else {
            eval(
              'transition_' +
                plugin.settings.effect +
                '(' +
                offsetStart +
                ', ' +
                offsetEnd +
                ')'
            )
          }

          plugin.nav.find('.current').removeClass('current')
          plugin.nav.find('a.page:eq(' + (page - 1) + ')').addClass('current')

          switch (plugin.settings.currentPage) {
            case 1:
              $('.easyPaginateNav a', plugin).removeClass('disabled')
              $(
                '.easyPaginateNav a.first, .easyPaginateNav a.prev',
                plugin
              ).addClass('disabled')
              break
            case plugin.settings.pages:
              $('.easyPaginateNav a', plugin).removeClass('disabled')
              $(
                '.easyPaginateNav a.last, .easyPaginateNav a.next',
                plugin
              ).addClass('disabled')
              break
            default:
              $('.easyPaginateNav a', plugin).removeClass('disabled')
              break
          }
        }
      }

      var transition_default = function (offsetStart, offsetEnd) {
        plugin.currentElements.hide()
        plugin.currentElements = plugin.settings.objElements
          .slice(offsetStart, offsetEnd)
          .clone()
        plugin.el.html(plugin.currentElements)
        plugin.currentElements.show()
      }

      var transition_fade = function (offsetStart, offsetEnd) {
        plugin.currentElements.fadeOut()
        plugin.currentElements = plugin.settings.objElements
          .slice(offsetStart, offsetEnd)
          .clone()
        plugin.el.html(plugin.currentElements)
        plugin.currentElements.fadeIn()
      }

      var transition_slide = function (offsetStart, offsetEnd) {
        plugin.currentElements.animate(
          {
            'margin-left': plugin.settings.slideOffset * -1,
            opacity: 0,
          },
          function () {
            $(this).remove()
          }
        )

        plugin.currentElements = plugin.settings.objElements
          .slice(offsetStart, offsetEnd)
          .clone()
        plugin.currentElements.css({
          'margin-left': plugin.settings.slideOffset,
          display: 'block',
          opacity: 0,
          'min-width': plugin.el.width() / 2,
        })
        plugin.el.html(plugin.currentElements)
        plugin.currentElements.animate({
          'margin-left': 0,
          opacity: 1,
        })
      }

      var transition_climb = function (offsetStart, offsetEnd) {
        plugin.currentElements.each(function (i) {
          var $objThis = $(this)
          setTimeout(function () {
            $objThis.animate(
              {
                'margin-left': plugin.settings.slideOffset * -1,
                opacity: 0,
              },
              function () {
                $(this).remove()
              }
            )
          }, i * 200)
        })

        plugin.currentElements = plugin.settings.objElements
          .slice(offsetStart, offsetEnd)
          .clone()
        plugin.currentElements.css({
          'margin-left': plugin.settings.slideOffset,
          display: 'block',
          opacity: 0,
          'min-width': plugin.el.width() / 2,
        })
        plugin.el.html(plugin.currentElements)
        plugin.currentElements.each(function (i) {
          var $objThis = $(this)
          setTimeout(function () {
            $objThis.animate({
              'margin-left': 0,
              opacity: 1,
            })
          }, i * 200)
        })
      }

      plugin.settings = $.extend({}, defaults, options)

      plugin.currentElements = $([])
      plugin.settings.objElements = plugin.el.find(
        plugin.settings.paginateElement
      )
      plugin.settings.pages = getNbOfPages()
      if (plugin.settings.pages > 1) {
        plugin.el.html()

        // Here we go
        displayNav()

        page = 1
        if (
          document.location.hash.indexOf(
            '#' + plugin.settings.hashPage + ':'
          ) != -1
        ) {
          page = parseInt(
            document.location.hash.replace(
              '#' + plugin.settings.hashPage + ':',
              ''
            )
          )
          if (page.length <= 0 || page < 1 || page > plugin.settings.pages) {
            page = 1
          }
        }

        displayPage(page, 'default')
      }
    })
  }
})(jQuery)
