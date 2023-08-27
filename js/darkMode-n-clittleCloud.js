const container = document.querySelector(".container");
const cloud = document.querySelector(" .cloudCompany ");
const themeToggle = document.querySelector("#theme");

// * functions
const storage = {
  saveTheme(value) {
    localStorage.setItem("theme", `${value}`);
  },
  checkTheme() {
    return localStorage.getItem("theme");
  },
};

const ui = {
  starInterval: null,
  SstarInterval: null,
  snowInterval: null,
  snowThreshold: 500,

  starMaker() {
    const star = document.createElement("span");

    star.classList.add("star");
    container.appendChild(star);

    const size = Math.random() * 2 + 5 + "vw";
    star.style.height = size;
    star.style.width = size;
    star.style.top = Math.random() * 80 + 10 + "vh";
    star.style.left = Math.random() * 80 + 10 + "vw";

    setTimeout(() => {
      star.remove();
    }, 5000);
  },

  SstarMaker() {
    const Sstar = document.createElement("span");
    Sstar.classList.add("Sstar");
    container.appendChild(Sstar);

    const size = Math.random() * 2 + 1 + "vw";
    Sstar.style.height = size;
    Sstar.style.width = size;
    Sstar.style.top = Math.random() * 80 + 10 + "vh";
    Sstar.style.left = Math.random() * 80 + 10 + "vw";
    setTimeout(() => {
      Sstar.remove();
    }, 10000);
  },

  // petit nuage
  move(e) {
    cloud.style.top = e.pageY + "px";
    cloud.style.left = e.pageX + "px";
  },
  theme() {
    document.body.classList.toggle("dark");
    themeToggle.classList.toggle("dark");

    if (themeToggle.classList.contains("dark")) {
      storage.saveTheme("dark");
      this.SstarInterval = setInterval(ui.SstarMaker, 8000);
      this.starInterval = setInterval(ui.starMaker, 1000);
    } else {
      storage.saveTheme("light");

      clearInterval(this.SstarInterval);
      clearInterval(this.starInterval);
      this.SstarInterval = null;
      this.starInterval = null;

      const allSstar = document.querySelectorAll(".Sstar");
      const allStar = document.querySelectorAll(".star");
      allSstar.forEach((sstar) => sstar.remove());
      allStar.forEach((star) => star.remove());
    }
  },
};

// event listeners
//event: window load
window.addEventListener("DOMContentLoaded", () => {
  //load theme
  const theme = storage.checkTheme();
  if (theme === "dark") ui.theme();
});

// event: theme button
themeToggle.addEventListener("click", ui.theme);

//event: mousemove
window.addEventListener("mousemove", ui.move);
