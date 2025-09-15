const sections = document.querySelectorAll("section"); // all sections
const navLinks = document.querySelectorAll(".navigation-list__icon"); // nav items

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navItem = document.querySelector(`.navigation-list a[href="#${id}"]`);

      if (entry.isIntersecting) {
        console.log(entry.target.id)
        // remove active from all
        navLinks.forEach((link) => link.classList.remove("active"));
        // add active to current
        navItem.classList.add("active");
      }
    });
  },
  {
    root: null, // viewport
    threshold: 0.1, // % of section visible before marking it active
  }
);

sections.forEach((section) => {
  observer.observe(section);
});