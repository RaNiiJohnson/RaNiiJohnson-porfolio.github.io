// Fonction pour démarrer les compteurs
const dataCounters = document.querySelectorAll("span.data-counter");

export function startCounters() {
  const targetPercentages = Array.from(dataCounters).map((dataCounter) =>
    parseInt(dataCounter.getAttribute("data-count"))
  );
  setInterval(() => {
    dataCounters.forEach((dataCounter, index) => {
      const currentPercentage = parseInt(dataCounter.textContent);
      if (currentPercentage < targetPercentages[index]) {
        dataCounter.textContent = `${currentPercentage + 1}%`;
      }
    });
  }, 23);
}

//popup apparition
const more = document.querySelector("#plus");
const close = document.querySelector(".close");
const popup = document.querySelector(".popup");
const Tit = document.querySelector("h1.title");

more.addEventListener("click", () => {
  Tit.classList.toggle("plus");
  popup.classList.toggle("plus");
  startCounters();
});

close.addEventListener("click", () => {
  popup.classList.remove("plus");
  Tit.classList.remove("plus");
});
