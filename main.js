import "/js/projectSlide";
import "/js/darkMode-n-clittleCloud";
import { snowMaker } from "/js/snowFlakes";
import "/js/popupSkills";

//locomotive scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

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
