import { startCounters } from "./startCounter";
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
