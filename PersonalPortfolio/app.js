const hamburguer = document.querySelector(".hamb")
const navHeader = document.querySelector(".header")

hamburguer.addEventListener("click", () => {
    navHeader.classList.toggle("open");
});