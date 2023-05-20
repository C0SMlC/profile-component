'use strict';

const profleExpander = document.querySelector('.profile');
const mainProfile = document.querySelector('.main');
let isVisible = false;

profleExpander.addEventListener('click', () => {
  if (!isVisible) {
    isVisible = true;
    mainProfile.style.display = 'block';
    setTimeout(() => {
      mainProfile.style.opacity = '1';
    }, 10); // Delay of 10 milliseconds before changing the opacity
  } else {
    mainProfile.style.opacity = '0';
    setTimeout(() => {
      mainProfile.style.display = 'none';
    }, 500); // Wait for the animation to complete before hiding the element
    isVisible = false;
  }
});
