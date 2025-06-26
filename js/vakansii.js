document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("vacancyModal");
  const closeBtn = document.getElementById("closeModal");
  const openBtns = document.querySelectorAll(".openModal");

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
