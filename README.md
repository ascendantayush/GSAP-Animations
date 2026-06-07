# Horizontal Scroll Animation

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

A cinematic horizontal scrolling experience with scroll-driven animations, a custom cursor, and a live progress indicator — built entirely with vanilla JS and GSAP.

🔗 **[View Live Demo](https://ascendantayush.github.io/GSAP-Animations/)**

---

## ✨ Highlights

| Feature | Details |
|---|---|
| 🖱️ Custom Cursor | Fully custom cursor with smooth trailing lag effect |
| ↔️ Horizontal Scroll | Vertical scroll seamlessly drives horizontal content pan |
| 🖼️ Image Animations | Images animate left-to-right on scroll entry via ScrollTrigger |
| 📊 Progress Bar | Real-time scroll progress bar pinned to the top of the viewport |

---

## 🛠️ Tech Stack

- **GSAP + ScrollTrigger** — scroll-linked animation timeline
- **Vanilla JS** — zero dependencies beyond GSAP
- **HTML5 / CSS3** — semantic markup and custom styling

---

## 🚀 Run Locally

```bash
git clone https://github.com/ascendantayush/GSAP-Animations.git
cd GSAP-Animations
open index.html   # or just double-click index.html
```

No build tools. No npm install. Just open and run.

---

## 💡 Key Concepts Demonstrated

- Scroll-driven animation using `ScrollTrigger.create()` with pin and scrub
- DOM-based custom cursor using `mousemove` event listeners
- Timeline sequencing with `gsap.timeline()` for coordinated entrance animations
- CSS `scaleX` progress bar tied directly to scroll percentage
