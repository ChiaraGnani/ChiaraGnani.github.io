document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".dco-section-2-w, .dco-section-3-w"
  );

  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    section.classList.add("fade-in-section");
    observer.observe(section);
  });
});
