const burgerBtnEl = document.querySelector("#burgerBtn");
const sidebarEl = document.querySelector('#sidebar');
const bodyEl = document.querySelector('body');

// burgerBtnEl.addEventListener("click", () => {
//     burgerBtnEl.children[0].classList.toggle("is-active");
//     sidebarEl.classList.toggle("-translate-x-full");
//     bodyEl.classList.toggle("overflow-hidden");
//     bodyEl.classList.toggle("h-[100dvh]");
// })

let isOpenSidebar = false;

const closeSidebar = () => {
    isOpenSidebar = false;
    burgerBtnEl.children[0].classList.remove("is-active");
    sidebarEl.classList.add("-translate-x-full");
    bodyEl.classList.remove("overflow-hidden");
    bodyEl.classList.remove("h-[100dvh]");
    burgerBtnEl.removeEventListener("click", closeSidebar)
    burgerBtnEl.addEventListener("click", openSidebar)
}

const openSidebar = () => {
    isOpenSidebar = true;
    burgerBtnEl.children[0].classList.add("is-active");
    sidebarEl.classList.remove("-translate-x-full");
    bodyEl.classList.add("overflow-hidden");
    bodyEl.classList.add("h-[100dvh]");
    burgerBtnEl.removeEventListener("click", openSidebar)
    burgerBtnEl.addEventListener("click", closeSidebar)
}

burgerBtnEl.addEventListener("click", openSidebar)

export { closeSidebar , isOpenSidebar}