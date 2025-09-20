var pg1 = gsap.timeline();
pg1.from(".logo",{
    opacity : 0,
    y: -20,
    duration: 1,
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
    stggear: 0.3,
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
        markers: true,
        start: "top 34%",
        end: "",
        scrub: true,      
    }
});


var pg2 = gsap.timeline();

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