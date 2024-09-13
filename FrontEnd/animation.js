gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

// Nav Section

tl.to("nav", {
  borderBottomWidth: "0",
  // borderBottomColor: "#000000",
  boxShadow: "0 0 20px -3px #000000",
  duration: 1,
  backgroundColor: "#001f3fe2",
  backdropFilter: "blur(10px)",
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

tl.from(".where", {
  x: "-300px",
  opacity: 0,
  duration: 1,
});

tl.from(".eve-pic", {
  x: "300px",
  opacity: 0,
  duration: 1,
  scale: 0.5,
});

tl.from(".tells-a-story", {
  x: "-300px",
  opacity: 0,
  duration: 1,
});


// Animation for hover on images of hero section

  // Function to show the hidden text
  function showText(el) {
    const hiddenTxt = el.querySelector(".hidden-hover-txt");
    const imageEl = el.querySelector('.pic-img');
    gsap.to(hiddenTxt, {
      bottom: "45%", // Animate to show the text
      duration: 0.3, // Duration of the animation
    });

    gsap.to(imageEl,{
      filter : 'blur(2px) brightness(0.7)'
    })
  }

  function hideText(el) {
    const hiddenTxt = el.querySelector(".hidden-hover-txt");
    const imageEl = el.querySelector('.pic-img');

    gsap.to(hiddenTxt, {
      bottom: "-50px", // Animate to hide the text
      duration: 0.3, // Duration of the animation
    });

    gsap.to(imageEl, {
      filter: "blur(0px) brightness(1)",
    });
  }


  // Select all image div elements
  const imgDivs = document.querySelectorAll('.img-div');

  // Attach event listeners to each image div
  imgDivs.forEach(imgDiv => {
    imgDiv.addEventListener('mouseenter', () => showText(imgDiv));
    imgDiv.addEventListener('mouseleave', () => hideText(imgDiv));
  });
