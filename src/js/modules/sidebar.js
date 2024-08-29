const burgerBtnEl = document.querySelector("#burgerBtn");
const sidebarEl = document.querySelector('#sidebar');
const bodyEl = document.querySelector('body');

burgerBtnEl.addEventListener("click", () => {
    burgerBtnEl.children[0].classList.toggle("is-active");
    sidebarEl.classList.toggle("-translate-x-full");
    bodyEl.classList.toggle("overflow-hidden");
    bodyEl.classList.toggle("h-[100dvh]");
})
