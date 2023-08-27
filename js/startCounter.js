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
