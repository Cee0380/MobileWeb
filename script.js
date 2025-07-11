document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Responsive Design Site!");

  // Quiz form submission
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inputs = form.querySelectorAll("input");
      let valid = true;
      inputs.forEach(input => {
        if (input.value.trim() === "") {
          input.style.borderColor = "red";
          valid = false;
        } else {
          input.style.borderColor = "#ccc";
        }
      });
      if (valid) {
        alert("Thank you for submitting the quiz!");
        form.reset();
      } else {
        alert("Please fill out all quiz fields.");
      }
    });
  }

  // Navigation hover effect
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#0074D9";
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "";
    });
  });

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.hash) {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
          window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }
      }
    });
  });

  // Dark mode toggle
  const toggle = document.createElement("button");
  toggle.innerText = "Toggle Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.bottom = "1rem";
  toggle.style.right = "1rem";
  toggle.style.padding = "0.5rem 1rem";
  toggle.style.zIndex = "1000";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Back to top button
  const backToTop = document.createElement("button");
  backToTop.innerText = "↑ Top";
  backToTop.style.position = "fixed";
  backToTop.style.bottom = "4rem";
  backToTop.style.right = "1rem";
  backToTop.style.padding = "0.5rem";
  backToTop.style.display = "none";
  backToTop.style.zIndex = "1000";
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Page load animation
  const container = document.querySelector(".container");
  if (container) {
    container.style.opacity = 0;
    setTimeout(() => {
      container.style.transition = "opacity 1s ease";
      container.style.opacity = 1;
    }, 100);
  }
});