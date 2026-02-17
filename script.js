// Mobile menu
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

btn?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
});

// Close mobile nav when link clicked
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => mobileNav.style.display = "none");
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple mailto form
function openMailto(){
  const hoa = document.getElementById("hoaName").value.trim();
  const city = document.getElementById("city").value.trim();
  const msg = document.getElementById("message").value.trim();

  const subject = encodeURIComponent(`Interest: Community Patrol Program — ${hoa} (${city})`);
  const body = encodeURIComponent(
`Hello Black Wolf Patrol,

Community/HOA: ${hoa}
City: ${city}

Request / Notes:
${msg}

Thank you,`
  );

  // TODO: Replace with your real email inbox for the business
  const to = "blkwolfpatrol@gmail.com";

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return false; // prevent page reload
}
window.openMailto = openMailto;
