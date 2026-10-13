// Anima os elementos quando entram na tela.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});


// Efeito de movimento no destaque principal.
const visual = document.querySelector(".hero-visual");
const bottle = document.querySelector(".main-perfume");

if (
  visual &&
  bottle &&
  window.matchMedia("(pointer: fine)").matches
) {
  visual.addEventListener("mousemove", (event) => {
    const rect = visual.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    bottle.style.transform =
      `rotate(${4 + x * 4}deg) translate(${x * 8}px, ${y * 8}px)`;
  });

  visual.addEventListener("mouseleave", () => {
    bottle.style.transform = "rotate(4deg)";
  });
}