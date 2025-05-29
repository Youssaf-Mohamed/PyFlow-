// Create animated stars
function createStars() {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = Math.random() * 0.5 + 0.1;
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
    particle.style.boxShadow = `0 0 15px ${
      colors[Math.floor(Math.random() * colors.length)]
    }`;
    particle.style.animationDuration = Math.random() * 5 + 5 + "s";
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 8000);
  }, 300);
}

// Modal functionality
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalBtn = document.getElementById("modalBtn");

// Open modal with session details
document.querySelectorAll(".session").forEach((session) => {
  session.addEventListener("click", () => {
    const title = session.getAttribute("data-title");
    const details = session.getAttribute("data-details");

    modalTitle.textContent = title;
    modalBody.innerHTML = details;
    modalOverlay.classList.add("active");

    // Play a subtle sound effect
    const clickSound = new Audio(
      "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU..."
    );
    clickSound.volume = 0.3;
    clickSound.play().catch((e) => console.log("Audio play failed:", e));
  });
});

// Close modal
function closeModal() {
  modalOverlay.classList.remove("active");
}

modalClose.addEventListener("click", closeModal);
modalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Add click interactions to week nuclei
document.querySelectorAll(".week-nucleus").forEach((nucleus) => {
  nucleus.addEventListener("click", () => {
    nucleus.style.transform = "translateX(-50%) scale(1.2)";
    setTimeout(() => {
      nucleus.style.transform = "translateX(-50%) scale(1)";
    }, 300);

    // Play a subtle sound effect
    const popSound = new Audio(
      "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU..."
    );
    popSound.volume = 0.2;
    popSound.play().catch((e) => console.log("Audio play failed:", e));
  });
});

// Hologram interaction
const hologram = document.querySelector(".hologram");
hologram.addEventListener("click", () => {
  hologram.style.transform = "scale(1.2) rotate(15deg)";
  setTimeout(() => {
    hologram.style.transform = "scale(1) rotate(0)";
  }, 300);

  // Show a special message
  modalTitle.textContent = "🐍 Python Nexus Activated 🐍";
  modalBody.innerHTML = `
                <h3>Welcome to the Python Neural Programming Pathway</h3>
                <p>This interactive roadmap will guide you through mastering Python fundamentals with a futuristic approach.</p>
                <ul>
                    <li>Click on any session card to view detailed information</li>
                    <li>Explore each week's content systematically</li>
                    <li>The hologram nodes represent weekly milestones</li>
                    <li>Enjoy the immersive learning experience!</li>
                </ul>
            `;
  modalOverlay.classList.add("active");
});

// Initialize effects
createStars();
createParticles();

// Intersection Observer for card animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "50px",
  }
);

// Observe all cards
document.querySelectorAll(".week-card").forEach((card) => {
  observer.observe(card);
});
