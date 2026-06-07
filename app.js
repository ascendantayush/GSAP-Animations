// ────────────────────────────────────────
// GSAP Register
// ────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// ────────────────────────────────────────
// CUSTOM CURSOR
// ────────────────────────────────────────
const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.1 });
});

function animateCursorRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + "px";
  cursorRing.style.top = ringY + "px";
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

// Cursor hover effects
document.querySelectorAll('a, button, [data-cursor="link"]').forEach(el => {
  el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
  el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
});

// ────────────────────────────────────────
// SCROLL PROGRESS BAR
// ────────────────────────────────────────
gsap.to("#scroll-progress", {
  width: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",
    scrub: 0.3,
  }
});

// ────────────────────────────────────────
// NAVBAR SHOW/HIDE ON SCROLL
// ────────────────────────────────────────
const nav = document.getElementById("nav");
let lastScroll = 0;

ScrollTrigger.create({
  trigger: document.body,
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    const scrollY = window.scrollY;
    if (scrollY > lastScroll && scrollY > 100) {
      nav.classList.add("nav-hidden");
    } else {
      nav.classList.remove("nav-hidden");
    }
    lastScroll = scrollY;
  }
});

// ────────────────────────────────────────
// PARTICLE CANVAS (Hero Background)
// ────────────────────────────────────────
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const particleCount = 60;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 229, 89, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(0, 229, 89, ${0.06 * (1 - dist / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ────────────────────────────────────────
// HERO ENTRANCE ANIMATION
// ────────────────────────────────────────
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .from(".logo", { opacity: 0, y: -20, duration: 0.6, delay: 0.3 })
  .from("#first li", { opacity: 0, y: -15, duration: 0.5, stagger: 0.1 }, "-=0.3")
  .from(".hero-tag", { opacity: 0, y: 30, duration: 0.6 }, "-=0.2")
  .from(".heading-line", {
    opacity: 0,
    y: 80,
    rotationX: 15,
    duration: 0.9,
    stagger: 0.15,
    ease: "power4.out"
  }, "-=0.3")
  .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
  .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
  .from(".scroll-indicator", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2");

// Hero parallax on scroll
gsap.to(".hero-content", {
  y: -150,
  opacity: 0,
  scale: 0.95,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});

gsap.to(".bg-video", {
  scale: 1.15,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  }
});

// ────────────────────────────────────────
// SHOWCASE / CONTENT SECTION
// ────────────────────────────────────────
// Section label
gsap.from(".section-label", {
  opacity: 0,
  x: -40,
  duration: 1,
  scrollTrigger: {
    trigger: ".section-label",
    start: "top 85%",
  }
});

// Box 1
const box1Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box1",
    start: "top 75%",
    end: "bottom 60%",
    scrub: 1,
  }
});

box1Tl
  .from("#img-wrapper-one", { x: -80, opacity: 0, duration: 1, ease: "power2.out" })
  .from("#text-block-one h2", { opacity: 0, y: 40, duration: 0.6 }, "-=0.5")
  .from("#my-text1", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
  .from("#text-block-one .text-tags .tag", { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 }, "-=0.2");

// Box 2
const box2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box2",
    start: "top 75%",
    end: "bottom 60%",
    scrub: 1,
  }
});

box2Tl
  .from("#img-wrapper-two", { x: 80, opacity: 0, rotation: 3, duration: 1, ease: "power2.out" })
  .from("#text-block-two h2", { opacity: 0, y: 40, duration: 0.6 }, "-=0.5")
  .from("#my-text2", { opacity: 0, y: 30, duration: 0.6 }, "-=0.3")
  .from("#text-block-two .text-tags .tag", { opacity: 0, y: 20, stagger: 0.1, duration: 0.4 }, "-=0.2");

// ────────────────────────────────────────
// STATS COUNTER
// ────────────────────────────────────────
const statCards = document.querySelectorAll(".stat-card");

statCards.forEach((card, i) => {
  gsap.from(card, {
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".stats-section",
      start: "top 80%",
    }
  });
});

// Animate numbers
const statNumbers = document.querySelectorAll(".stat-number");
statNumbers.forEach(num => {
  const target = parseInt(num.getAttribute("data-target"));
  ScrollTrigger.create({
    trigger: num,
    start: "top 85%",
    once: true,
    onEnter: () => {
      gsap.to(num, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out",
        onUpdate: function () {
          const val = Math.round(gsap.getProperty(num, "innerText"));
          if (target >= 1000000) {
            num.textContent = (val / 1000000).toFixed(0) + "M";
          } else {
            num.textContent = val.toLocaleString();
          }
        }
      });
    }
  });
});

// ────────────────────────────────────────
// HORIZONTAL SCROLL
// ────────────────────────────────────────
const track = document.querySelector(".horizontal-track");
const panels = gsap.utils.toArray(".h-panel");
const totalWidth = () => track.scrollWidth - window.innerWidth;

gsap.to(track, {
  x: () => -totalWidth(),
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-wrap",
    start: "top top",
    end: () => "+=" + totalWidth(),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  }
});

// Animate panels as they enter
panels.forEach((panel, i) => {
  if (i === 0) return; // skip intro panel
  gsap.from(panel.children, {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: panel,
      containerAnimation: gsap.getById && gsap.getById("horizontalScroll"),
      start: "left center",
      toggleActions: "play none none reverse",
    }
  });
});

// ────────────────────────────────────────
// MARQUEE SPEED CONTROL
// ────────────────────────────────────────
gsap.to(".marquee-track", {
  scrollTrigger: {
    trigger: ".marquee-section",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      const speed = 20 - self.progress * 10;
      document.querySelector(".marquee-track").style.animationDuration = speed + "s";
    }
  }
});

// ────────────────────────────────────────
// FOOTER ANIMATIONS
// ────────────────────────────────────────
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
  }
});

footerTl
  .from(".footer-heading", {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out"
  })
  .from(".footer-about", {
    y: 40,
    opacity: 0,
    duration: 0.6,
  }, "-=0.3")
  .from(".footer-links ul li", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.08,
  }, "-=0.3")
  .from(".footer-contact p", {
    y: 20,
    opacity: 0,
    duration: 0.4,
    stagger: 0.08,
  }, "-=0.3")
  .from(".footer-bottom", {
    opacity: 0,
    duration: 0.5,
  }, "-=0.2");

// ────────────────────────────────────────
// SMOOTH SCROLL FOR ANCHOR LINKS
// ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 0 },
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  });
});
