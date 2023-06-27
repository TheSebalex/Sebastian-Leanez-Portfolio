// Variables

const buttonDeploy = document.getElementById('svg');
const buttonUnDeploy = document.getElementById('ex');
const menu = document.getElementById('deploy');

const contactDeploy = document.getElementById('contact');
const contactResponsive = document.getElementById('contactMeResponsive')
const undeployContact = document.getElementById('ex2');
const menuContact= document.getElementById('contactDeploy')

// Eventos

contactResponsive.addEventListener('click', deployedContact)
contactDeploy.addEventListener('click', deployedContact)
undeployContact.addEventListener('click', undeployedContact)

buttonDeploy.addEventListener('click', agregarClase);
buttonUnDeploy.addEventListener('click', quitarClase);

window.addEventListener('scroll', quitarClase);
window.addEventListener('resize', quitarClase);

// Funciones

function agregarClase(){
    menu.classList.toggle('deployed')
};

function quitarClase(){
    menu.classList.remove('deployed')
};

function deployedContact(){
    menuContact.classList.toggle('contactDeployed')
}

function undeployedContact(){
    menuContact.classList.remove('contactDeployed')
}