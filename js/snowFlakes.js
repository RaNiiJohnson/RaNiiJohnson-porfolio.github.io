// snowMaker
const main = document.querySelector("main");

export const snowMaker = () => {
  const snow = document.createElement("span");
  snow.classList.add("snowflake");
  main.appendChild(snow);

  const size = Math.random() * 2 + 2 + "vw";
  snow.style.height = size;
  snow.style.width = size;
  snow.style.top = Math.random() * 5 + "vh";
  snow.style.fontSize = Math.random() * 4 + "px";
  snow.style.animationDuration = Math.random() * 25 + 30 + "s";
  snow.style.opacity = Math.random() + 0.3;
  snow.style.left = Math.random() * window.innerWidth + "px";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  snow.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  snow.style.setProperty("--Zindex", Math.random() > 0.5 ? 10 : 0);

  snow.style.left = Math.random() * 80 + 10 + "vw";
  setTimeout(() => {
    snow.remove();
  }, 25000);
};
