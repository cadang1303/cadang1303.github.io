document.addEventListener("scroll", handleScroll);

var scrollToTopBtn = document.querySelector(".btn");

function handleScroll() {
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var ratio = 0.3;

  if ((document.documentElement.scrollTop / scrollableHeight ) > ratio) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}