const cityBtnEl = document.querySelector("#changeCity");
const closeBtn = document.querySelector("#closeCity");
const cityFrameEl = document.querySelector("#changeCityFrame");
const bodyEl = document.querySelector("body");

const closeCityModal = () => {
  cityFrameEl.classList.add("hidden");
  cityFrameEl.classList.remove("flex");
  bodyEl.classList.remove("overflow-hidden", "h-screen");
  cityBtnEl.addEventListener("click", openCityModal);
};

const openCityModal = () => {
  cityFrameEl.classList.remove("hidden");
  cityFrameEl.classList.add("flex");
  bodyEl.classList.add("overflow-hidden", "h-screen");
  closeBtn.addEventListener("click", closeCityModal);
};

cityBtnEl.addEventListener("click", openCityModal);
