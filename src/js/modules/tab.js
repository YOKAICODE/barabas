const tabWrapper = document.querySelector("#tabPrice");
const tabBtnElements = tabWrapper.querySelectorAll(".tab-btn");
const tabContentElements = tabWrapper.querySelectorAll(".tab-content");

tabBtnElements.forEach((el) => {
  el.addEventListener("click", toggleActiveBtn);
});

function resetActiveTabs() {
  tabBtnElements.forEach((el) => {
    el.classList.remove("--active");
  });

  tabContentElements.forEach((el) => {
    el.classList.remove("--active");
  });
}

function toggleActiveBtn(el) {
  resetActiveTabs();

  el.target.classList.add("--active");
  tabContentElements[el.target.dataset.tab].classList.add("--active");
}