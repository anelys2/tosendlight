document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing

  emailjs
    .send("service_n6616gq", "template_ch8ekr7", {
      from_name: document.getElementById("name").value,
      from_subject: document.getElementById("subject").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })
    .then(() => {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset(); // clears the form
    })
    .catch((error) => {
      console.error("Failed to send:", error);
      alert("Something went wrong. Please try again.");
    });
});

// Fade in on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("fade-out");
});

// Fade out on link click
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Ignore links opening in new tabs or external links
    if (
      this.target === "_blank" ||
      !this.href.startsWith(window.location.origin)
    )
      return;

    e.preventDefault();
    const destination = this.href;

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = destination;
    }, 300); // matches the CSS transition duration
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 1;
});
