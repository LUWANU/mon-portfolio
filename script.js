// Effets légers : reveal on scroll + smooth scroll for future anchors
document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) el.classList.add('show');
    });
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // Optional: smooth scroll for anchor links (si ajoutés plus tard)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
