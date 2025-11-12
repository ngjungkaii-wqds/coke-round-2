window.onload = function() {
  // Random result generation logic
  const resultText = Math.random() > 0.5 ? 'You win!' : 'You lose!';

  // Display result on the page
  document.getElementById('result-text').textContent = resultText;

  if (resultText === 'You win!') {
    // Add the prize information
    const prize = Math.random() > 0.5 ? 'a free Coca-Cola product for one month' : 'a Coca-Cola branded T-shirt';
    document.getElementById('prize-text').textContent = `You have won ${prize}!`;
  } else {
    document.getElementById('prize-text').textContent = '';
  }
};
