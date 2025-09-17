// ================================
//  NAVIGATION OBSERVER
// ================================
const observeActiveNav = () => {
  const sections = document.querySelectorAll("section"); 
  const navLinks = document.querySelectorAll(".navigation-list__icon"); 

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(`.navigation-list a[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          navItem.classList.add("active");
        }
      });
    },
    {
      root: null,
      threshold: 0.1, 
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}


// ================================
//  ON-SCROLL ELEMENTS ANIMATION
// ================================
const onscrollElementsAnimation = () => {
   gsap.registerPlugin(ScrollTrigger);

  const scrollerTarget = window.innerWidth > 900 ? ".content-sections" : null;
  const animationStart = window.innerWidth > 900 ? "top 2800%" : "top 98%";

  // Sections Elements Animation(Except Language Bar)
  const sectionsElements = document.querySelectorAll(".content-sections section *:not(.language-label):not(.language-bar .bar)");

  sectionsElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: animationStart,
          toggleActions: "play none none reverse", 
          scroller: scrollerTarget,
        },
        opacity: 0,
        y: 27, 
        duration: 0.8,
        ease: "power2.out"
      }
    );
  });

  //Language Bars Animation
  const languageBars = document.querySelectorAll('.language-list .language-bar .bar');

  languageBars.forEach(bar => {
    let targetWidth = bar.getAttribute("data-width"); 

    gsap.fromTo(bar, 
      { width: 0 },
      { 
        width: targetWidth + "%", 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: bar,           
          start: animationStart,      
          toggleActions: "play none none reverse",
          scroller: scrollerTarget 
        }
      }
    );
  });
}


// ================================
//  MAIN FUNCTION
// ================================
function main(){
  observeActiveNav();
  onscrollElementsAnimation();
}

main();
