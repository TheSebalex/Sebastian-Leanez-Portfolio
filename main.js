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

window.addEventListener("scroll", removeClass);
window.addEventListener("resize", removeClass);

// Funciones


let projects= {
  images: ["Img/randomath.png", "Img/KillThePlane.png"],
  url: ["https://thesebalex.github.io/RandoMath/", "https://thesebalex.github.io/KillThePlaneGame/"],
  descriptions: ["Kill The Plane! - Browser Game", "Randomath - Math tools"]
}
function addProjects(){
  for(let i = 0; i < projects.images.length; i++){
    
    let element = `
    <li>
        <a href=${projects.url[i]} target="_blank">
        <img src=${projects.images[i]}>
           <p>
              ${projects.descriptions[i]} <br>
              <span style="color: rgb(255, 157, 0);">
              HTML - CSS - Javascript</span>
           </p>
         </a>
    </li>
    `
    projectsScroll.insertAdjacentHTML("beforeend", element)
  }
}
addProjects()






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
