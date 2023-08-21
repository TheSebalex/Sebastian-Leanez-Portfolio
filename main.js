// Variables

const buttonDeploy = document.getElementById("svg");
const buttonUnDeploy = document.getElementById("ex");
const menu = document.getElementById("deploy");

const contactDeploy = document.getElementById("contact");
const contactResponsive = document.getElementById("contactMeResponsive");
const undeployContact = document.getElementById("ex2");
const menuContact = document.getElementById("contactDeploy");

const projectsScroll = document.getElementById("projectsScroll");
const moveButtonsFather = document.getElementById("moveButtons");
let currentScroll = 0;

let projects = {
  images: [
    "Img/GRH21LadingPage.png",
    "Img/KillThePlane.png",
    "Img/randomath.png",
    "Img/SWCLandingPage.png"
  ],
  url: [
    "https://thesebalex.github.io/GRH21/",
    "https://thesebalex.github.io/KillThePlaneGame/",
    "https://thesebalex.github.io/RandoMath/",
    "https://thesebalex.github.io/SWC/"
  ],
  descriptions: [
    "GRH21 - Lading Page",
    "Kill The Plane! - Browser Game", 
    "Randomath - Math tools",
    "SWC - Landing Page"
  ],
  languages: [
    "HTML - CSS - Javascript",
    "HTML - CSS - Javascript",
    "HTML - CSS - Javascript",
    "HTML - CSS - Javascript",
  ]
};

// Eventos

document.addEventListener("DOMContentLoaded", addProjects);

moveButtonsFather.addEventListener("click", (e) => {
  moveProjects(e.target.value);
});

contactResponsive.addEventListener("click", deployedContact);
contactDeploy.addEventListener("click", deployedContact);
undeployContact.addEventListener("click", undeployedContact);

buttonDeploy.addEventListener("click", addClass);
buttonUnDeploy.addEventListener("click", removeClass);

window.addEventListener("scroll", removeClass);
window.addEventListener("resize", removeClass);

// Funciones

function addProjects() {
  for (let i = 0; i < projects.images.length; i++) {
    let element = `
    <li>
        <a href=${projects.url[i]} target="_blank">
        <img src=${projects.images[i]}>
           <p>
              ${projects.descriptions[i]} <br>
              <span style="color: rgb(255, 157, 0);">
              ${projects.languages[i]}</span>
           </p>
         </a>
    </li>
    `;
    projectsScroll.insertAdjacentHTML("beforeend", element);
  }
}

function moveProjects(target) {
  projectsScroll.scroll(0, 0);
  if (target == 2) {
    if (currentScroll < projectsScroll.childElementCount - 1) {
      currentScroll++;
    }
    projectsScroll.scroll(projectsScroll.clientWidth * currentScroll, 0);
  } else {
    if (!currentScroll <= 0) {
      currentScroll--;
    }
    projectsScroll.scroll(projectsScroll.clientWidth * currentScroll, 0);
  }
}

function addClass() {
  menu.classList.toggle("deployed");
}

function removeClass() {
  menu.classList.remove("deployed");
}

function deployedContact() {
  menuContact.classList.toggle("contactDeployed");
}

function undeployedContact() {
  menuContact.classList.remove("contactDeployed");
}
