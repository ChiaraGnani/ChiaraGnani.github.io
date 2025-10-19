document.addEventListener("componentsLoaded", function () {
  const header = document.getElementById("header");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navbar = document.getElementById("navbar");

  if (!header || !mobileMenuToggle || !navbar) {
    console.error("Missing header elements — are components loaded correctly?");
    return;
  }

  window.addEventListener("pageshow", () => {
    if (!header.classList.contains("shrink") || window.scrollY <= 1) {
      header.classList.toggle("shrink", window.scrollY > 1);
    }
  });

  window.addEventListener("scroll", function () {
    header.classList.toggle(
      "shrink",
      window.scrollY > 1 || navbar.classList.contains("active")
    );
  });

  mobileMenuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    if (!header.classList.contains("shrink") || window.scrollY <= 1) {
      header.classList.toggle("shrink");
    }

    const spans = mobileMenuToggle.querySelectorAll("span");
    if (navbar.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(6.5px, 6.5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(6.5px, -6.5px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      const spans = mobileMenuToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    });
  });

  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      const spans = mobileMenuToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
});
