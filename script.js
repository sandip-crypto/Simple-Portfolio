
// ===== Preloader =====
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
      document.body.classList.add("loaded");
    }, 1000); // 1s delay for effect
  }
});

// Typing animation
const typedText = document.getElementById("typed-text");
const words = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let i = 0,
  j = 0,
  isDeleting = false;

function type() {
  const currentWord = words[i];
  typedText.textContent = currentWord.substring(0, j);
  if (!isDeleting && j < currentWord.length) j++;
  else if (isDeleting && j > 0) j--;

  if (j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 80 : 150);
}
type();

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animations
const elements = document.querySelectorAll("[data-aos]");
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  elements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("active");
  });
}
window.addEventListener("scroll", checkScroll);
checkScroll();
