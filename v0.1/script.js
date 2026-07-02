const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.section, .stats-band, .final-cta').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
