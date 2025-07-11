document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to the Responsive Design Site!");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for submitting the quiz!");
    });
  }

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.backgroundColor = "#0074D9";
    });
    link.addEventListener("mouseout", () => {
      link.style.backgroundColor = "";
    });
  });
});