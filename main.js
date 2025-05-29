// Create animated stars
function createStars() {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    starsContainer.appendChild(star);
  }
}

// Create quantum particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const colors = ["#ff006e", "#8338ec", "#3a86ff", "#06ffa5", "#ffbe0b"];

  setInterval(() => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 10px ${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
    particle.style.animationDuration = Math.random() * 5 + 5 + "s";
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 8000);
  }, 500);
}

// Initialize effects
createStars();
createParticles();

// Add click interactions to week nuclei
document.querySelectorAll(".week-nucleus").forEach((nucleus) => {
  nucleus.addEventListener("click", () => {
    nucleus.style.transform = "translateX(-50%) scale(1.1)";
    setTimeout(() => {
      nucleus.style.transform = "translateX(-50%) scale(1)";
    }, 200);
  });
});
