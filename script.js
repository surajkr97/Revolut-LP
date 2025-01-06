// stickyNavbar.js

let lastScrollPosition = 0;
const navbar = document.querySelector('.navbar');
const sectionHeroEl = document.querySelector(".hero");

// Intersection Observer to add sticky class when the hero section is out of view
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);  // Observing the .hero section

// Scroll functionality to hide/show navbar on scroll
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down, hide navbar
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.transition = 'transform 250ms ease-in';
  } else {
    // Scrolling up, show navbar
    navbar.style.transform = 'translateY(0)';
    navbar.style.transition = 'transform 250ms ease-in';
  }

  lastScrollPosition = currentScrollPosition;
});
