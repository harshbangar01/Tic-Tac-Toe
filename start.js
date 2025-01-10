const startButton = document.getElementById('startMusic');
  const bgMusic = document.getElementById('bgMusic');

  startButton.addEventListener('click', () => {
    bgMusic.play();
    startButton.style.display = 'none'; // Hide the button after starting music
  });