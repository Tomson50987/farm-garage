const track = document.querySelector('.gallery-track');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let scrollPosition = 0;
const scrollAmount = 300;

leftArrow.addEventListener('click', () => {
  scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
  track.style.transform = `translateX(-${scrollPosition}px)`;
});

rightArrow.addEventListener('click', () => {
  scrollPosition = scrollPosition + scrollAmount;
  track.style.transform = `translateX(-${scrollPosition}px)`;
});
