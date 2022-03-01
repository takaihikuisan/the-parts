const body = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle");

toggleBtn.onclick = () => {
  body.classList.toggle("light");
};
