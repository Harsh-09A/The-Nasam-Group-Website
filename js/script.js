const header = document.getElementById("middleHeader");
const headerOffset = header.offsetTop - 85;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > headerOffset) {
    header.classList.add("sticky-activate");
  } else {
    header.classList.remove("sticky-activate");
  }
});

// ScrollSpy refresh
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#middleHeader",
  rootMargin: "0px 0px -50%",
});

document.addEventListener("activate.bs.scrollspy", function (e) {
  const activeLink = e.target.querySelector(".nav-link.active");
  if (activeLink) {
    activeLink.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }
});

// document.addEventListener("scroll", function () {
//     const header = document.getElementById("header");
//     const nav = document.getElementById("header-nav");

//     if (header.classList.contains("sticky") && header.classList.contains("sticky-active")) {
//         nav.classList.add("bg-white");
//     } else {
//         nav.classList.remove("bg-white");
//     }
// });

// document.addEventListener("scroll", function () {
//     const header = document.getElementById("header");
//     const nav = document.getElementById("header-nav");

//     if (!header || !nav) return;

//     // Desktop only (Bootstrap lg and above)
//     if (window.innerWidth < 992) {
//         nav.classList.remove("bg-white"); // reset on mobile
//         return;
//     }

//     if (header.classList.contains("sticky") && header.classList.contains("sticky-active")) {
//         nav.classList.add("bg-white");
//     } else {
//         nav.classList.remove("bg-white");
//     }
// });
