import renderAllContents from './render-contents.js';
import emailSender from './email-sender.js';

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
  const animationStart = window.innerWidth > 900 ? "top 5000%" : "top 97.2%";

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
//  TOGGLE MORE PROJECTS
// ================================
const toggleMoreProject = () => {
  const moreProjectsList = document.querySelector('.d-grid.more-project-list');
  const toggleBtn = document.querySelector('.project-cards-container__toggle-btn');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('see-more');

    if(toggleBtn.classList.contains('see-more')) {
      toggleBtn.innerText = 'See Less'
      moreProjectsList.style.display = 'grid'
    }else{
      toggleBtn.innerText = 'See More'
      moreProjectsList.style.display = 'none'
    } 
  });
}



// ================================
//  MAIN FUNCTION
// ================================
function main(){
  renderAllContents();
  emailSender();

  document.addEventListener('DOMContentLoaded', () => {
    observeActiveNav();
    onscrollElementsAnimation();
    toggleMoreProject()
  });
}

main();
