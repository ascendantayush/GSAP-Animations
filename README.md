# Horizontal Scroll Animation

A smooth horizontal scrolling experience built with GSAP and ScrollTrigger. As the user scrolls vertically, the content glides horizontally — creating a fluid, cinematic feel.

## Demo

🔗 [Live Site](https://ascendantayush.github.io/GSAP-Animations/)

## Features

- **Horizontal scroll** — vertical scroll input translates to a smooth horizontal content pan
- **Custom cursor** — replaces the default cursor with a styled interactive cursor that reacts to movement
- **Scroll progress bar** — a thin bar at the top of the page fills as the user scrolls, giving a clear sense of position
- **Image animations** — images animate in from left to right as they enter the viewport, driven by scroll position

## Built With

- HTML, CSS, JavaScript
- [GSAP](https://gsap.com/) — animation library
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) — scroll-driven animation plugin

## How It Works

ScrollTrigger pins the horizontal container and maps vertical scroll progress to an `x` translation on the content wrapper. The progress bar width and image entrance animations are tied to the same scroll timeline. The custom cursor tracks `mousemove` events and follows with a slight lag for a smooth trailing effect.

## Run Locally

No build step needed — just open `index.html` in a browser.

```bash
git clone https://github.com/ascendantayush/GSAP-Animations.git
cd GSAP-Animations
open index.html
```
