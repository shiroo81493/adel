const text = "dear adel, ini ad hadiah kecil buat km hehe moga seneng 😄";
const typingTarget = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingTarget.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80); // Speed ngetik
  }
}

window.onload = () => {
  typeWriter();

  // Geser slide pakai panah kiri-kanan
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      currentSlide = Math.min(currentSlide + 1, slides.length - 1);
    } else if (e.key === "ArrowLeft") {
      currentSlide = Math.max(currentSlide - 1, 0);
    }
    document.querySelector(".slider").style.transform = translateX(-${currentSlide * 100}vw);
  });
};