window.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("active");
    }, 300 * i);
  });
});
