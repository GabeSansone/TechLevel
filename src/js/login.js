const visivel = document.querySelector(".visible-card")
const invisivel = document.querySelector(".invisivel")

function createLogin() {

    visivel.classList.replace("visible-card", "invisivel")
    invisivel.classList.replace("invisivel", "visible-card")

}

function back() {
    visivel.classList.replace("invisivel", "visible-card")
    invisivel.classList.replace("visible-card", "invisivel")
}