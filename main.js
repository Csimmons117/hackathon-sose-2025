// HOMEPAGE -- Koosh
if (document.querySelector(".hero")) {
  // Fade-in the hero headline -- Koosh
  gsap.from(".hero__content h1", {
    opacity: 0,
    y: 40,
    duration: 1.6,
    ease: "power3.out",
  });

  gsap.from(".hero__content p", {
    opacity: 0,
    y: 30,
    duration: 1.4,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".hero__cta a", {
    opacity: 0,
    y: 25,
    stagger: 0.15,
    delay: 0.4,
    duration: 1.2,
    ease: "power3.out",
  });

  // Scroll-triggered fading -- Koosh
  gsap.utils.toArray(".pitch__card, .gallery__item").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  });

  // CTA -- Koosh
gsap.from(".cta-strip", {
  opacity: 0,
  y: 30,
  duration: 0.2,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cta-strip",
    start: "top 95%",
    toggleActions: "play none none none",
    once: true,
  },
});


}


// JOIN PAGE -- Koosh
if (document.querySelector(".join-hero")) {

  // Fade -- Koosh
  gsap.from(".join-hero__logo", {
    opacity: 0,
    scale: 0.7,
    duration: 1.4,
    ease: "power3.out"
  });

  gsap.from(".join-hero h1", {
    opacity: 0,
    y: 40,
    duration: 1.3,
    delay: 0.2,
    ease: "power3.out"
  });

  gsap.from(".join-hero p", {
    opacity: 0,
    y: 30,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out"
  });

  // Fade-up the scroll -- Koosh
  gsap.utils.toArray(".join-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 70,
      duration: 1,
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",  
        toggleActions: "play none none none",
        once: true
      }
    });
  });

  // Fade in -- Koosh
  gsap.from(".join-steps", {
    opacity: 0,
    y: 30,
    duration: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".join-steps",
      start: "top 92%",    
      toggleActions: "play none none none",
      once: true
    }
  });
}



// TEAM PAGE -- Koosh 
if (document.querySelector(".main")) {
  // Title fade-in -- Koosh
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 1.8,     
    ease: "power3.out"
  });

  // Each board member -- Koosh
  gsap.utils.toArray(".main").forEach((member, i) => {
    gsap.from(member, {
      opacity: 0,
      y: 50,
      duration: 0.9,  
      delay: i * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: member,
        start: "top 92%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        once: true
      }
    });
  });
}


// EVENTS PAGE -- Koosh
if (document.querySelector(".Announcements")) {

  // Title fade -- Koosh 
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // fade-up -- Koosh 
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

  // Title fade -- Koosh
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // fade-up -- Koosh 
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

  // Title fade -- Koosh 
  gsap.from(".helloworld", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    ease: "power3.out"
  });

  // fade-up -- Koosh
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


