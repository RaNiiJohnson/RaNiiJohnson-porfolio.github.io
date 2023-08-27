/*// Function to update slide position
const updateSlidePosition = (slideElement, counter, size) => {
  slideElement.style.transform = `translateX(${-size * counter}px)`;
};

// Function to handle button click for carousel
const handleButtonClick = (slideElement, counter, images, size, increment) => {
  if (counter + increment < 0 || counter + increment >= images.length) return;

  slideElement.style.transition = "transform 0.4s ease-in-out";
  counter += increment;
  updateSlidePosition(slideElement, counter, size);
};

// Function to handle transitionend event
const handleTransitionEnd = (slideElement, counter, images) => {
  if (images[counter].id === "lastClone") {
    slideElement.style.transition = "none";
    counter = images.length - 2;
    updateSlidePosition(slideElement, counter, size);
  }
  if (images[counter].id === "firstClone") {
    slideElement.style.transition = "none";
    counter = images.length - counter;
    updateSlidePosition(slideElement, counter, size);
  }
};

// Initialize carousels
const initializeCarousel = (carouselElement, prevBtn, nextBtn) => {
  const images = carouselElement.querySelectorAll(".img");
  const size = images[0].clientWidth;
  let counter = 1;

  updateSlidePosition(carouselElement, counter, size);

  nextBtn.addEventListener("click", () => {
    handleButtonClick(carouselElement, counter, images, size, 1);
  });

  prevBtn.addEventListener("click", () => {
    handleButtonClick(carouselElement, counter, images, size, -1);
  });

  carouselElement.addEventListener("transitionend", () => {
    handleTransitionEnd(carouselElement, counter, images);
  });

  window.addEventListener("resize", () => {
    const newSize = images[0].clientWidth;
    if (newSize !== size) {
      size = newSize;
      updateSlidePosition(carouselElement, counter, size);
    }
  });
};

// Initialize carousels
initializeCarousel(
  document.querySelector(".img-project-1"),
  document.querySelector("#prevBtn"),
  document.querySelector("#nextBtn")
);

initializeCarousel(
  document.querySelector(".img-project-2"),
  document.querySelector(".prevBtn"),
  document.querySelector(".nextBtn")
);*/
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
