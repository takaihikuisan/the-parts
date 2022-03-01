const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(".search-icon");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};
searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};
