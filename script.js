// Mobile menu
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

btn?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileNav.style.display = "none");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();


// =============================
// FORM SUBMISSION (FORM SPREE)
// =============================

const form = document.getElementById("contactForm");

form?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const hoa = document.getElementById("hoaName").value.trim();
  const city = document.getElementById("city").value.trim();
  const msg = document.getElementById("message").value.trim();

  try {
    const response = await fetch("https://formspree.io/f/meelkrpr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hoaName: hoa,
        city: city,
        message: msg
      })
    });

    if (response.ok) {
      window.location.href = "thank-you.html";
    } else {
      alert("There was an issue submitting the form. Please try again.");
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
});
