gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// Nav Section

tl.to("nav", {
  borderBottomWidth: "0",
  // borderBottomColor: "#000000",
  boxShadow: "0 0 20px -3px #000000",
  duration: 1,
  height: "12%",
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    start: "top -3%",
    end: "top -8%",
    scrub: 1,
  },
});

// Function to calculate the margin top for hero section

window.onload = function () {
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero-section");
  const navHeight = nav.offsetHeight; // gets the nav height
  hero.style.marginTop = navHeight - 8 + "px"; // applies the height as margin-top
};


// Hero Section's Main quote animation

tl.from(".where",{
  x : "-300px",
  opacity: 0,
  duration : 1
})

tl.from(".eve-pic",{
  x : "300px",
  opacity : 0,
  duration : 1
})

tl.from(".tells-a-story", {
  x: "-300px",
  opacity: 0,
  duration: 1,
});

