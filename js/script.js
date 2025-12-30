const header = document.getElementById("middleHeader");
const headerOffset = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add("sticky-active");
  } else {
    header.classList.remove("sticky-active");
  }
});
