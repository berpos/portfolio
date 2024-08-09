import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.2,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 2,
        height: "0vh",
        ease: "Power3.easeOut",
        onComplete: () => {
          document.querySelector('.preloader').style.display = 'none'; // Ensure preloader is hidden
          document.body.style.overflow = 'auto'; // Allow scrolling
          gsap.killTweensOf(".text"); // Stop any ongoing animations for .text
          gsap.killTweensOf(".shapes .shape"); // Stop any ongoing animations for shapes
          gsap.to(".preloader span", {
            duration: 0.5,
            opacity: 0,
            ease: "power3.easeOut",
            onComplete: () => {
              // Ensure stars are fully hidden
              document.querySelectorAll('.preloader span').forEach(el => {
                el.style.display = 'none'; // Hide stars
              });
            }
          });
        },
      },
      "-=2" // Adjust this to sync with preloader animation
    )
    .from(".landing__main .text", {
      duration: 0,
      y: 10,
      opacity: 0,
      stagger: {
        amount: 2,
      },
      ease: "power3.easeInOut",
    })
    .from(".links .item", {
      duration: 0.5,
      opacity: 0,
      delay: window.innerWidth < 763 ? -3 : -0.6,
      stagger: {
        amount: 0.5,
      },
      ease: "expo.easeOut",
    })
    .from(".main-circle", {
      duration: 1,
      opacity: 0,
      ease: "power3.easeInOut",
    })
    .from(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
      onComplete: () => {
        // Cleanup actions
        document.querySelector('.preloader').style.display = 'none'; // Ensure preloader is hidden
        document.body.style.overflow = 'auto'; // Allow scrolling
        gsap.killTweensOf(".text"); // Stop any ongoing animations for .text
        gsap.killTweensOf(".shapes .shape"); // Stop any ongoing animations for shapes
        tl.kill(); // Kill the timeline
      },
    });

  // Ensure that the stars animation is hidden after the preloader
  gsap.to("span", {
    duration: 0.5,
    opacity: 0,
    ease: "power3.easeOut",
    delay: 2.5, // Matches the preloader duration
    onComplete: () => {
      document.querySelectorAll('span').forEach(el => {
        el.style.display = 'none'; // Hide stars
      });
    }
  });

  // Ensure the text element is properly hidden after the animation
  gsap.to(".text", {
    duration: 0.4,
    opacity: 0,
    y: 20, // Adjust as needed
    ease: "power3.easeOut",
    delay: 3.5, // Delay to match preloader completion
    onComplete: () => {
      document.querySelector('.text').style.display = 'none'; // Ensure text is hidden
    }
  });
};


export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
};

const animateShapes = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .shape", {
      duration: 4,
      rotate: 360,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 2,
    })
    .to(".shapes .shape-3", {
      duration: 1,
      rotate: 360,
      delay: -2,
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 3,
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1.5,
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 1,
    });
};

const animateMainShape = () => {
  const infiniteTl = gsap.timeline({
    repeat: -1,
  });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 4,
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};
