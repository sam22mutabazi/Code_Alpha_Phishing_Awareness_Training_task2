function showDetails(project) {
    if (project === "phishing") {
      alert("Anti-Phishing Training Simulator:\nAn interactive educational tool using simulated phishing scenarios.");
    } else if (project === "scanner") {
      alert("Web Vulnerability Scanner:\nDetects SQL injection, XSS, and other vulnerabilities.");
    }
  }
  
  // Contact form submission
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
  });
  