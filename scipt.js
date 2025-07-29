// Efek ketik sederhana
document.addEventListener("DOMContentLoaded", () => {
  const typingTarget = document.querySelector(".typing-text");
  const text = typingTarget.innerText;
  typingTarget.innerText = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      typingTarget.innerText += text.charAt(i);
      i++;
      setTimeout(type, 50); // kecepatan ketik
    }
  }

  type();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
