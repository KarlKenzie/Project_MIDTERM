const openBtn  = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal    = document.getElementById("modal");
const video    = document.getElementById("video");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  video.currentTime = 0;
  video.play().catch(() => {});
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  video.pause();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);


modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});