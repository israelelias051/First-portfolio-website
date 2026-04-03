let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let overlay = document.querySelector('.menu-overlay');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

// CLOSE WHEN CLICKING OVERLAY
overlay.addEventListener('click', () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

// CLOSE ON SCROLL
window.addEventListener('scroll', () => {
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
});