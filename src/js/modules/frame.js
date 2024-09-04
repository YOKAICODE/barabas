const openBtn = document.querySelector("#frameBtn");
const closeBtn = document.querySelector("#closeFrame");
const frameEl = document.querySelector("#frame");
const bodyEl = document.querySelector('body');

const closeFrame = () => {
    frameEl.classList.remove("flex");
    frameEl.classList.add("hidden");
    bodyEl.classList.remove("overflow-hidden","h-screen");
};

const openFrame = () => {
    frameEl.classList.remove("hidden");
    frameEl.classList.add("flex");
    bodyEl.classList.add("overflow-hidden","h-screen");
    closeBtn.addEventListener("click", closeFrame);
};

openBtn.addEventListener("click", openFrame)