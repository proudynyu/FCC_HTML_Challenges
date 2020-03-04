const hamb = document.querySelector('.hamb');
const bodyHead = document.querySelector('.body-head');

hamb.addEventListener("click", () => {
    bodyHead.classList.toggle("open")
});