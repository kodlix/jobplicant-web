(function () {
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };
  function fadeout() {
    document.querySelector('#loading-area').style.opacity = '0';
    document.querySelector('#loading-area').style.display = 'none';
  }
}
