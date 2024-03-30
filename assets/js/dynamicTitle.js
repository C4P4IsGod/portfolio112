window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })