let navMenuLinks = document.querySelectorAll("#nav-menu .nav-menu__link");
let url = window.location.href;
let segments = url.split("/");
let lastSegment = segments.pop() || "";

navMenuLinks.forEach((link) => {
  if (link.getAttribute("href") === lastSegment) {
    link.classList.add("active");
  }
});
