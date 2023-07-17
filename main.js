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
const projectsButtonsScroll = document.querySelectorAll(".buttons");
let currentScroll = 0;

// Eventos

moveButtonsFather.addEventListener("click", (e) => {
  moveProjects(e.target.value);
});

contactResponsive.addEventListener("click", deployedContact);
contactDeploy.addEventListener("click", deployedContact);
undeployContact.addEventListener("click", undeployedContact);

buttonDeploy.addEventListener("click", addClass);
buttonUnDeploy.addEventListener("click", removeClass);

window.addEventListener("scroll", quitarClase);
window.addEventListener("resize", quitarClase);

// Funciones

function moveProjects(target) {
  projectsScroll.scroll(0, 0);
  console.log(currentScroll)
  if (target == 2) {
    if (currentScroll < projectsScroll.childElementCount-1){
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
