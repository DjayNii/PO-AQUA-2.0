const button = document.querySelector(".mainButton");
const dropdown = document.querySelector(".dropDown");

button.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
