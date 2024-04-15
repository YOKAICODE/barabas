// Offset Page Scroll
const navList = document.querySelectorAll(".header-link");
const HEADER_HEIGHT = document.querySelector("header").offsetHeight;

navList.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("".concat(link.getAttribute("Href")));
    console.log(HEADER_HEIGHT);
    const scrollElement = document.querySelector(
      "".concat(link.getAttribute("Href"))
    );
    window.scrollTo(0, scrollElement.offsetTop - HEADER_HEIGHT);
  });
});
