const bar = document.querySelector(".bar");
const exit = document.querySelector(".exit");
const responsive = document.querySelector(".responsive");
const nav = document.querySelector('.nav');

bar.addEventListener("click", () => {
  responsive.classList.add("active");
});

exit.addEventListener("click", () => {
  responsive.classList.remove("active");
});

nav.addEventListener("click", () => {
    responsive.classList.remove("active");
  });