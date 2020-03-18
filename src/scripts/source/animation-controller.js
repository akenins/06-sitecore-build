if (IntersectionObserver) {
  const callback = entries => {
    entries.forEach(entry => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains('animated')
      ) {
        entry.target.classList.add('animated')
      } else if (!entry.isIntersecting) {
        entry.classList.remove('animated')
      }
    })
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.2,
  })

  const items = document.querySelectorAll('img[data-ios]')
  items.forEach(item => {
    item.classList.add('animation')
    observer.observe(item)
  })
}
