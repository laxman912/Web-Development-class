// Scroll animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Portfolio filter
const buttons = document.querySelectorAll('.portfolio-tabs button');
const items = document.querySelectorAll('.portfolio-grid .item');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    items.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});




function updateClocks() {
  const now = new Date();
  
  // 1. Nepal time (UTC+5:45)
  // We use toLocaleTimeString with the specific timeZone for accuracy
  const nepalTime = now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  const nepalElement = document.getElementById("nepal-clock");
  if(nepalElement) nepalElement.textContent = nepalTime;

  // 2. Local user time
  const localTime = now.toLocaleTimeString();
  const localElement = document.getElementById("local-clock");
  if(localElement) localElement.textContent = localTime;

  // 3. Optimized Dark/Light mode toggle
  const hours = now.getHours();
  const isDaytime = hours >= 6 && hours < 18; // 6:00 AM to 5:59 PM
  
  if (isDaytime) {
    // Only toggle if necessary to save performance
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    }
  } else {
    if (!document.body.classList.contains("dark-mode")) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }
}

// Update every second
setInterval(updateClocks, 1000);
updateClocks();