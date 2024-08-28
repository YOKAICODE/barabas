const burgerBtnEl = document.querySelector("#burgerBtn");

burgerBtnEl.addEventListener("click", () => {
    burgerBtnEl.children[0].classList.toggle("is-active");
})