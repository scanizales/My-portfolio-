const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.pageX; 
  const mouseY = e.pageY; 

  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;
});

const button = document.querySelector('button');
button.addEventListener('mouseenter', () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
});

button.addEventListener('mouseleave', () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});
