//locomotive scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

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

let snowInterval = null;

scroll.on("scroll", () => {
  const scrollPosition = scroll.scroll.instance.scroll.y; // window.scrollY en gle

  if (scrollPosition < 50) {
  }

  if (scrollPosition > 120 && scrollPosition < 1820 && snowInterval === null) {
    console.log("object");
    snowMaker();
    snowInterval = setInterval(snowMaker, 1000);
  } else if (
    (scrollPosition <= 120 || scrollPosition >= 1750) &&
    snowInterval !== null
  ) {
    clearInterval(snowInterval);
    snowInterval = null;
    const allSnowflakes = document.querySelectorAll(".snowflake");
    allSnowflakes.forEach((snowflake) => snowflake.remove());
  }
});

// background effect
scroll.on("scroll", () => {
  const footer = document.querySelector("footer");
  if (document.querySelector("#l1.is-inview")) {
    footer.style.background = "#fff";
    footer.style.color = "#0b7994";
  } else {
    footer.style.background = "#0b7994";
    footer.style.color = "#fff";
  }
});

var typed = new Typed(".typed", {
  strings: [
    "Bonjour à toutes et à toutes",
    "Je me présente ,je m'appelle Niavo,j'ai décidé de me lancer à fond dans l'apprentissage du code, depuis 2021, je me forme à temps plein  en  autodidacte en tant que full-stack Javascript et React JS afin de devenir le plus rapidement possible développeur. Plus qu' un avenir proffessionel, je me suis découvert une passion, celle de coder",
  ],
  typeSpeed: 30,
});

// setInterval(snowMaker, 1000); innerh

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

//! Carousel slide

const carouselSlide = document.querySelector(".img-project-1");
const secondCarouselSlide = document.querySelector(".img-project-2");
const carouselImages = document.querySelectorAll(".img-project-1 .img");
const secondCarouselImages = document.querySelectorAll(".img-project-2 .img");
// buttons//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const secondPrevBtn = document.querySelector(".prevBtn");
const secondNextBtn = document.querySelector(".nextBtn");

// counter
let counter = 1;
let secondCounter = 1;
let size = carouselImages[0].clientWidth; // Initial clientWidth
let secondSize = secondCarouselImages[0].clientWidth; // Initial clientWidth

// Update the slide position
const updateSlidePosition = () => {
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
};
const secondUpdateSlidePosition = () => {
  secondCarouselSlide.style.transform = `translateX(${
    -secondSize * secondCounter
  }px)`;
};

updateSlidePosition();

//button listeners - project 1
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = " transform 0.4s ease-in-out";
  counter++;
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = " transform 0.4s ease-in-out";
  counter--;
  updateSlidePosition();
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    updateSlidePosition();
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    updateSlidePosition();
  }
});

//button listeners - project 2

secondNextBtn.addEventListener("click", () => {
  if (secondCounter >= secondCarouselImages.length - 1) return;
  secondCarouselSlide.style.transition = " transform 0.4s ease-in-out";
  secondCounter++;
  secondUpdateSlidePosition();
});

secondPrevBtn.addEventListener("click", () => {
  if (secondCounter <= 0) return;
  secondCarouselSlide.style.transition = " transform 0.4s ease-in-out";
  secondCounter--;
  secondUpdateSlidePosition();
});

secondCarouselSlide.addEventListener("transitionend", () => {
  if (secondCarouselImages[secondCounter].id === "lastClone") {
    secondCarouselSlide.style.transition = "none";
    secondCounter = secondCarouselImages.length - 2;
    secondUpdateSlidePosition();
  }
  if (secondCarouselImages[secondCounter].id === "firstClone") {
    secondCarouselSlide.style.transition = "none";
    secondCounter = secondCarouselImages.length - secondCounter;
    secondUpdateSlidePosition();
  }
});

// Update size on window resize
window.addEventListener("resize", () => {
  const newSize = carouselImages[0].clientWidth;
  if (newSize !== size) {
    size = newSize;
    updateSlidePosition();
  }
  const secondNewSize = secondCarouselImages[0].clientWidth;
  if (secondNewSize !== secondSize) {
    secondSize = secondNewSize;
    secondUpdateSlidePosition();
  }
});

secondUpdateSlidePosition();
// //buttons
// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");
// const secondPrevBtn = document.querySelector(".prevBtn");
// const secondNextBtn = document.querySelector(".nextBtn");

// // counter
// let counter = 1;
// window.addEventListener("resize", () => {
//   const size = carouselImages[0].clientWidth;

//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

//   //button listeners
//   // ! project 1
//   nextBtn.addEventListener("click", () => {
//     if (counter >= carouselImages.length - 1) return;
//     carouselSlide.style.transition = " transform 0.4s ease-in-out";
//     counter++;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   });

//   prevBtn.addEventListener("click", () => {
//     if (counter <= 0) return;
//     carouselSlide.style.transition = " transform 0.4s ease-in-out";
//     counter--;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   });

//   carouselSlide.addEventListener("transitionend", () => {
//     if (carouselImages[counter].id === "lastClone") {
//       carouselSlide.style.transition = "none";
//       counter = carouselImages.length - 2;
//       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//     }
//     if (carouselImages[counter].id === "firstClone") {
//       carouselSlide.style.transition = "none";
//       counter = carouselImages.length - counter;
//       carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//     }
//   });

//   // ! project 2
//   secondNextBtn.addEventListener("click", () => {
//     if (counter >= secondCarouselImages.length - 1) return;
//     secondCarouselSlide.style.transition = " transform 0.4s ease-in-out";
//     counter++;
//     secondCarouselSlide.style.transform =
//       "translateX(" + -size * counter + "px)";
//   });

//   secondPrevBtn.addEventListener("click", () => {
//     if (counter <= 0) return;
//     secondCarouselSlide.style.transition = " transform 0.4s ease-in-out";
//     counter--;
//     secondCarouselSlide.style.transform =
//       "translateX(" + -size * counter + "px)";
//   });

//   secondCarouselSlide.addEventListener("transitionend", () => {
//     if (secondCarouselImages[counter].id === "lastClone") {
//       secondCarouselSlide.style.transition = "none";
//       counter = secondCarouselImages.length - 2;
//       secondCarouselSlide.style.transform =
//         "translateX(" + -size * counter + "px)";
//     }
//     if (secondCarouselImages[counter].id === "firstClone") {
//       secondCarouselSlide.style.transition = "none";
//       counter = secondCarouselImages.length - counter;
//       secondCarouselSlide.style.transform =
//         "translateX(" + -size * counter + "px)";
//     }
//   });
// });

const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");
const myProjects = document.querySelectorAll(".my-projects .project");

prevProject.addEventListener("click", () => {
  const current = document.querySelector(".current");

  updateSlidePosition();

  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    myProjects[myProjects.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
});

nextProject.addEventListener("click", () => {
  const current = document.querySelector(".current");

  updateSlidePosition();

  current.classList.remove("current");

  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    myProjects[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
});
