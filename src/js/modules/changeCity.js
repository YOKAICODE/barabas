const cityBtnEl = document.querySelector("#changeCity");
const closeBtn = document.querySelector("#closeCity");
const cityFrameEl = document.querySelector("#changeCityFrame");
const bodyEl = document.querySelector("body");
const selectCityEl = document.querySelector("#selectCity");

const setCity = (city) => {
  // Устанавливаем куку и перезагружаем страницу
  document.cookie = "city=" + city + ";max-age='3600';path=/";
  location.reload();
};

const checkOfside = (e) => {
  const contentElement = e.target.closest(".content");
  if (!contentElement) {
    closeCityModal();
  }
};

const closeCityModal = () => {
  cityFrameEl.classList.add("hidden");
  cityFrameEl.classList.remove("flex");
  bodyEl.classList.remove("overflow-hidden", "h-screen");
  closeBtn.removeEventListener("click", closeCityModal);  
  cityFrameEl.removeEventListener("click", checkOfside);
  cityBtnEl.addEventListener("click", openCityModal);
};

const openCityModal = () => {
  cityFrameEl.classList.remove("hidden");
  cityFrameEl.classList.add("flex");
  bodyEl.classList.add("overflow-hidden", "h-screen");
  closeBtn.addEventListener("click", closeCityModal);
  cityFrameEl.addEventListener("click", checkOfside);
};

cityBtnEl.addEventListener("click", openCityModal);

selectCityEl.addEventListener("change", (evt) => {
  setCity(evt.target.value);
});
