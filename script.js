document.getElementById('campaign-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const code = document.getElementById('code').value;

  // Simple form validation
  if (email && code) {
    localStorage.setItem('email', email);
    localStorage.setItem('code', code);
    window.location.href = 'result.html';
  } else {
    alert('Please fill out both fields');
  }
});
