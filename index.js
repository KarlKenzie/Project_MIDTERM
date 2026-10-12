const openBtn  = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal    = document.getElementById("modal");
const video    = document.getElementById("video");

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  video.currentTime = 0;
  video.play().catch(() => {}); // browser may block autoplay; user can press play
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  video.pause();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// click the dark background to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// press Escape to close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});