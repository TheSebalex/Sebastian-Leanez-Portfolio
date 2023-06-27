// Variables

const buttonDeploy = document.getElementById('svg')
const buttonUnDeploy = document.getElementById('ex')
const menu = document.getElementById('deploy')

// Eventos

buttonDeploy.addEventListener('click', agregarClase)
buttonUnDeploy.addEventListener('click', quitarClase)
window.addEventListener('scroll', quitarClase)
window.addEventListener('resize', quitarClase)

function agregarClase(){
    menu.classList.toggle('deployed')
}

function quitarClase(){
    menu.classList.remove('deployed')
}