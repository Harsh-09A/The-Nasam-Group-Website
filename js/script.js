const header = document.getElementById("middleHeader");
const headerOffset = header.offsetTop - 85;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add("sticky-activate");
  } else {
    header.classList.remove("sticky-activate");
  }
});
