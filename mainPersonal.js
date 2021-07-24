function toggleDarkMode() {
  console.log("hello");
  var bodyElement = document.getElementById("mainBackground")
  if (bodyElement.style.background == 'black' && bodyElement.style.color == 'white') {
    bodyElement.style.background = '#e9edc9';
    bodyElement.style.color = 'black';
  } else {
    bodyElement.style.background = 'black';
    bodyElement.style.color = 'white';
  }
}
