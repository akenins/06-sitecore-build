const globalController = (function($) {
  const global = {
    mpYouTubeOpts: {
      type: 'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src:
              '//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0',
          },
          youtube_short: {
            index: 'youtu.be/',
            id: 'youtu.be/',
            src:
              '//www.youtube.com/embed/%id%?autoplay=1&autohide=1&modestbranding=1&rel=0&showinfo=0',
          },
        },
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    },

    // Init global properties and actions: run on page ready
    init: function() {
      this.videomodals()
      this.inlinemodals()
    },

    // Activate Video Modals
    videomodals: function() {
      $('.video-link').magnificPopup(global.mpYouTubeOpts)
    },

    inlinemodals: function() {
      $('.inline-mfp').magnificPopup({
        type: 'inline',
        midClick: true,
      })
    },
  }

  return global
})(jQuery)

$(window).on('load', function() {
  globalController.init()
})
