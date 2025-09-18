import {personalData} from './../data/personal-data.js'
import {toolsData} from './../data/tools-data.js'
import {projectsData} from './../data/projects-data.js'
import {experienceData} from './../data/experince-data.js'

// ================================
//  RENDER PROFILE CARD
// ================================
const profileCardContent = () => {
  const profileCardHTML = `
            <img class="main-profile__img"
              src="images-and-icons/images/meowish profile.jpeg"
              alt="profile-picture" />

          <h2 class="main-profile__skill">${personalData.skills}</h2>

          <p class="main-profile__email">${personalData.email}</p>

          <div class="main-profile__socials-list">
              <a href="${personalData.facebookLink}" target="_blank" class="fab fa-facebook" id="profile-link"></a>
              <a href="${personalData.instagramLink}" target="_blank" class="fab fa-instagram"></a>
              <a href="${personalData.tiktokLink}" target="_blank" class="fab fa-tiktok"></a>
          </div>

          <a href="${personalData.resume}" download="MyCV" class="main-profile__cta">Download CV</a>
  `;

  
  document.querySelector('.main-profile').innerHTML = profileCardHTML;
}

// ================================
//  RENDER HOME SECTION
// ================================
const homeSectionContent = () => {
  const greetingHTML = `<h1 class="greeting">Hello, I'm ${personalData.name}</h1>`;

  document.querySelector('#home-section').innerHTML = greetingHTML;
}

// ================================
//  RENDER ABOUT ME
// ================================
const aboutContent = () => {
  const aboutMeHTML = `<p>${personalData.about}</p>`;

  document.querySelector('.about-item.about-me').innerHTML = aboutMeHTML
}

// ================================
//  RENDER TOOLS
// ================================
const toolsContent = () => {
  let toolHTML = ``

  toolsData.forEach(tool => {
    toolHTML+= `<div class="tool">
                    <img class="tool-icon" src="images-and-icons/icons/${tool.icon}" alt="${tool.icon}">
                    <p class="tool-label">${tool.name}</p>
                </div>`;
  });

  document.querySelector('.tools-list').innerHTML = toolHTML;
}

// ================================
//  RENDER LANGUAGES
// ================================
const languageContent = () => {
  let languageHTML = ``

  const languages = personalData.languages;

  languages.forEach(langauge => {
    languageHTML+= `<div class="language">
                        <p class="language-label">${langauge.language}</p>
                        <p class="language-bar"><span class="bar first-bar" data-width="${langauge.percentMastery}"></span></p>
                    </div>`;
  });

  document.querySelector('.language-list').innerHTML = languageHTML;
}

// ================================
//  RENDER PROJECTS
// ================================
const projectsContent = () => {
  projectsData.forEach((project, index) => {
    const projectHTML = `
      <div class="project-card">
        <img class="project-card__img" src="images-and-icons/images/${project.image}" alt="${project.title}" />
        <div class="project-card__overlay">
          <div class="project-details">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.detail}</p>
          </div>
          <a href="${project.link}" class="project-view-btn" target="_blank">View More</a>
        </div>
      </div>
    `;

    if (index < 4) {
      // First 4 projects
      document.querySelector(".project-list").innerHTML += projectHTML;
    } else {
      // Remaining projects
      document.querySelector(".more-project-list").innerHTML += projectHTML;
    }
  });
};

// ================================
//  RENDER EXPERIENCE
// ================================
const experinceContent = () => {
  let experienceHTML = '';

  experienceData.forEach(experience => {
    experienceHTML += `<div class="timeline-item">
                            <div class="timeline-date">${experience.date}</div>
                            <h3 class="timeline-title">${experience.name}</h3>
                            <p class="timeline-description">${experience.details}</p>
                        </div>`
  });

  document.querySelector('.timeline-item-list').innerHTML = experienceHTML
}



// ================================
//  MAIN FUNCTION TO RENDER ALL CONTENTS 
// ================================
export default function renderAllContents(){
  profileCardContent();
  homeSectionContent();
  aboutContent();
  toolsContent();
  languageContent();
  projectsContent();
  experinceContent();
}
