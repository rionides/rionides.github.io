fetch('/subscribe.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('subscribe-container');
    if (container) container.innerHTML = html;
  });
