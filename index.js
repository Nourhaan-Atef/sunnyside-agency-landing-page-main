let hamburger = document.getElementById("hamburger");
let list = document.getElementById("list");
let header = document.getElementById("header");
hamburger.addEventListener("click", () => {
  list.classList.toggle("hidden");
  header.classList.toggle("hidden");
});
