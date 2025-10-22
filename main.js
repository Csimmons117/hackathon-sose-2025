gsap.registerPlugin(ScrollTrigger);

// HOMEPAGE + TEAM PAGE -- Koosh
if (
  document.querySelector(".helloworld") &&
  !document.querySelector(".typing-container") &&
  !document.querySelector(".Announcements") &&
  !document.querySelector(".box1") &&
  !document.querySelector(".size")
) {
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });
}





// HOMEPAGE SCROLL SECTIONS -- Koosh
if (document.querySelector(".welcome")) {
  gsap.utils.toArray(".welcome").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.5,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  });
}

// JOIN PAGE -- Koosh
if (document.querySelector(".typing-container")) {

  // Title fade + scale (same as Home + Team)
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    delay: 0.2,       // <-- small delay so you actually see it fade in -- Koosh 
    ease: "power3.out"
  });

  // Scroll fade-ins for Join page elements -- Koosh 
  gsap.utils.toArray(".typing-container, .join-section").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 80,
      duration: 1.5,
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  });
}



// TEAM PAGE -- Koosh
if (document.querySelector(".main")) {
  gsap.utils.toArray(".main").forEach((member) => {
    gsap.from(member, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: member,
        start: "top 85%",
        end: "bottom 60%",
        once: true
      }
    });
  });
}

// EVENTS PAGE -- Koosh
if (document.querySelector(".Announcements")) {

  // Title fade + scale (same as other pages, plays once) -- Koosh 
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // Scroll-triggered fade-up for each event card (plays once) -- Koosh 
  gsap.utils.toArray(".Announcements").forEach((event) => {
    gsap.from(event, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: event,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      },
    });
  });
}

// TUTORING PAGE -- Koosh
if (document.querySelector(".box1")) {

  // Title fade + scale (same as other pages) -- Koosh
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // Scroll-triggered fade-up for each tutoring section -- Koosh 
  gsap.utils.toArray(".box1").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      },
    });
  });
}

// MERCH PAGE -- Koosh
if (document.querySelector(".size")) {

  // Title fade + scale (same as other pages)
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // Scroll-triggered fade-up for each merch item
  gsap.utils.toArray(".size").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 80,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true
      },
    });
  });
}


