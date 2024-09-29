// GSAP Animation
const subjects = document.querySelectorAll('.subject');

// Function to trigger animations
const animateSubjects = () => {
  subjects.forEach((subject, index) => {
    gsap.to(subject, {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: index * 0.2, // Stagger the animations
      ease: "power2.out",
      scrollTrigger: {
        trigger: subject,
        start: "top 80%", // Start animation when subject is 80% from the top
      }
    });
  });
};

// Initialize animation
gsap.from(subjects, {
  y: 50,
  duration: 0,
  opacity: 0,
});

// Call the animation function on window load
window.addEventListener('load', animateSubjects);

// Select all welcome messages
const welcomeMessages = document.querySelectorAll('.welcome-message');

// GSAP animation for continuous scroll with 3D effect
gsap.to(welcomeMessages, {
  xPercent: -100, // Move left
  rotationY: 360, // Rotate in 3D
  duration: 10, // Duration of the scroll
  ease: "none", // Linear movement
  repeat: -1 // Infinite repeat
});

// Optional: Add a subtle fade effect on load
gsap.from(welcomeMessages, {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power1.out"
});
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item, index) => {
    gsap.from(item, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1, // Stagger effect
        ease: "power2.out"
    });
});
const announcementItems = document.querySelectorAll('.announcement-item');

        announcementItems.forEach((item, index) => {
            gsap.from(item, {
                y: 20,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.2, // Stagger effect
                ease: "power2.out"
            });
        });