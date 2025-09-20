var pg1 = gsap.timeline();
pg1.from(".logo",{
    opacity : 0,
    y: -20,
    duration: 0.5,
})

pg1.from(".others #first li ",{
    opacity : 0,
    y: -20,
    duration: 1,
    stagger: 0.3,
})

pg1.from(".main-image",{
    opacity : 0,
    y: -20,
    duration: 1,
})

pg1.to("#main-heading", {
    opacity: 0,
    y: 500,
    scale: 0.5,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#main-heading",
        scroller: "body",
        // markers: true,
        start: "top 34%",
        scrub: true,      
        pin: true,
    }
});


var pg2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
    scroller: "body",
    start: "top top",   
    end: "+=50%",      
    // markers: true,
    scrub: 2,
    pin: true       
  }
});


pg2.from("#img-one",{
    y: 100,
    opacity : 0,
    duration: 1,
})

pg2.from("#my-text1",{
    x:100,
    opacity: 0,
    duration : 1,
})

pg2.from("#my-text2",{
    x:-100,
    opacity: 0,
    duration : 1,
})

pg2.from("#img-two",{
    y:-100,
    opacity: 0,
    duration : 1,
    rotation : 50,
})

const text = document.querySelector(".Horizontal h1");
const totalScroll = text.scrollWidth - window.innerWidth;

gsap.to(".Horizontal h1", {
  x: -totalScroll,  
  color : "#00FFCA",
  scrollTrigger: {
    trigger: ".Horizontal",
    scroller: "body",
    // markers: true,
    start: "top top",
    end: `+=${totalScroll}`, 
    scrub: true,
    pin: true
  }
});


var footerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 80%",
    end: "bottom 97.5%",
  }
});


footerTimeline.from(".footer-about",{
  y : 100,
  duration : 0.5,
  opacity: 0,
  scale : 0.5
})





footerTimeline.from(".footer-links ul li",{
  y : 100,
  duration : 0.5,
  opacity: 0,
  scale : 0.5,
  stagger: -0.1,
})

footerTimeline.from(".footer-links h3",{
  y : 100,
  duration : 0.5,
  opacity: 0,
  scale : 0.5
})

footerTimeline.from(".footer-contact p",{
  y : 100,
  duration : 0.5,
  opacity: 0,
  scale : 0.5,
  stagger: -0.1,
})


footerTimeline.from(".footer-contact h3",{
  y : 100,
  duration : 0.5,
  opacity: 0,
  scale : 0.5
})


footerTimeline.from(".footer-bottom p",{
  x : -100,
  duration : 0.5,
  opacity: 0,
  // scale : 0.5
})





