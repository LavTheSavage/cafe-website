document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".review-carousel");
  const slides = document.querySelectorAll(".review-slide");
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("carousel-dots");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Create dot for each slide
  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  // Insert dots below carousel
  carousel.parentElement.appendChild(dotsContainer);

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;

    // Show only the active slide
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    // Update active dot
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Auto-slide every 6s
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 6000);

  // Start
  showSlide(0);
});
