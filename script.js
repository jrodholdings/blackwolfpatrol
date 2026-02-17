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
// FORM SUBMISSION (FORMSPREE)
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.textContent : "";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    try {
      const res = await fetch("https://formspree.io/f/meelkrpr", {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        window.location.href = "./thank-you.html";
        return;
      }

      // show useful error info from Formspree
      let msg = "There was an issue submitting the form. Please try again.";
      try {
        const data = await res.json();
        if (data?.errors?.length) msg = data.errors.map(e => e.message).join(" ");
      } catch (_) {}

      alert(msg);
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText || "Send Request";
      }
    }
  });
});
