const openBtn = document.querySelector(".open");
const modalContainer = document.querySelector(".modal-container");
const closedBtn = document.querySelector(".modal-btn");

openBtn.addEventListener("click", function () {
  modalContainer.classList.add("show");
});

closedBtn.addEventListener("click", function () {
  modalContainer.classList.remove("show");
});
